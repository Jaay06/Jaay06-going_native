import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import {
  GestureEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
  PanGestureHandler,
} from "react-native-gesture-handler";


type emojiStickerProps = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

const EmojiSticker = ({ imageSize, stickerSource }: emojiStickerProps) => {
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const AnimatedView = Animated.createAnimatedComponent(View);
  const scaleImage = useSharedValue(imageSize);

 
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context: { translateX: number; translateY: number }) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const onDoubleTap: (
    event: GestureEvent<TapGestureHandlerEventPayload>
  ) => void = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
};

export default EmojiSticker;

const styles = StyleSheet.create({});

import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

type props = {
  placeholderImage: ImageSourcePropType;
  selectedImage?: string;
};

const ImageViewer = ({ selectedImage, placeholderImage }: props) => {
  const imageSource =
    selectedImage !== "" ? { uri: selectedImage } : placeholderImage;

  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

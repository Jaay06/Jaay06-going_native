import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React, { useState, Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import { Platform } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";

type emojiListProps = {
  onSelect: Dispatch<SetStateAction<ImageSourcePropType | null>>;
  onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: emojiListProps) => {
  const [emoji] = useState([
    require("../assets/emoji1.png"),
    require("../assets/emoji2.png"),
    require("../assets/emoji3.png"),
    require("../assets/emoji4.png"),
    require("../assets/emoji5.png"),
    require("../assets/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
};

export default EmojiList;

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

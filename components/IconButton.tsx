import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import {Icon} from '@expo/vector-icons/MaterialIcons'

type iconButtonProps = {
  label: string;
  onPress: () => void;
  //I shouldnt do this but...
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
};

const IconButton = ({ icon, label, onPress }: iconButtonProps) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});

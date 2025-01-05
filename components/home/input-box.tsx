import React from "react";
import { TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Theme } from "../../theme";
type InputBoxProps = {
  searchLocationByCity: (city: string) => void;
};
const InputBox = ({ searchLocationByCity }: InputBoxProps) => {
  return (
    <View className="relative ">
      <TextInput
        placeholder="City Name"
        className="bg-white shadow rounded-3xl p-4 my-4 ps-14"
        onSubmitEditing={(e) => {
          searchLocationByCity(e.nativeEvent.text);
        }}
      />
      <MaterialCommunityIcons
        name="cloud-search-outline"
        size={24}
        color={Theme.secondaryDark}
        className="absolute top-7 left-4 "
      />
    </View>
  );
};

export default InputBox;

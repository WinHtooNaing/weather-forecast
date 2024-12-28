import React from "react";
import { Weather } from "./w-list";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
type WItemProps = {
  w: Weather;
};
const WItem = ({ w }: WItemProps) => {
  const { day, weather, temp } = w;
  return (
    <View className="flex-row items-center flex-1 pb-4 mb-4 border-b border-b-secondaryDark ">
      <Text className="flex-1 text-xl text-purpleDark font-bold">{day}</Text>
      <View className="flex-1 flex-row items-center gap-2 justify-items-start ">
        <Ionicons name="sunny-outline" size={30} color="black" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {weather}
        </Text>
      </View>
      <Text className="flex-1 text-right text-2xl font-bold text-purpleDark">
        {temp}
      </Text>
    </View>
  );
};

export default WItem;

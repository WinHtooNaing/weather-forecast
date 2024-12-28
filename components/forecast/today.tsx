import React from "react";
import { Image, Text, View } from "react-native";

const Today = () => {
  return (
    <View className="flex-row justify-between my-2">
      <Image source={require("../../assets/storm.png")} className="w-52 h-52" />
      <View>
        <Text className="text-xl font-bold mb-2">Today</Text>
        <Text className="text-9xl font-bold text-purpleDark">26°</Text>
        <Text className="text-xl text-secondaryDark font-bold">
          ThunderStorm
        </Text>
      </View>
    </View>
  );
};

export default Today;

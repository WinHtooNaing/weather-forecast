import React from "react";
import { Image, Text, View } from "react-native";

const Content = () => {
  return (
    <View className="justify-center items-center mb-6">
      <Image source={require("../../assets/storm.png")} className="w-60 h-60" />
      <View className="relative">
        <Text className="text-[12rem] font-extrabold">26</Text>
        <Text className="absolute top-6 right-[-20] text-8xl">°</Text>
      </View>
      <Text className="text-4xl font-medium text-secondaryDark">
        ThunderStorm
      </Text>
    </View>
  );
};

export default Content;

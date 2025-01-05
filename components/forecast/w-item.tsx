import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
type WItemProps = {
  weatherCodition: string;
  temp: number;
  day: string;
  wImage: ImageSourcePropType;
};
const WItem = ({ weatherCodition, temp, day, wImage }: WItemProps) => {
  // const { day, weather, temp } = w;
  return (
    <View className="flex-row items-center flex-1 pb-4 mb-4 border-b border-b-secondaryDark ">
      <Text className="flex-1 text-xl text-purpleDark font-bold">{day}</Text>
      <View className="flex-1 flex-row items-center gap-2 justify-items-start ">
        <Image source={wImage} className="w-10 h-10" />
        <Text className="text-left text-lg font-semibold text-purpleDark">
          {weatherCodition}
        </Text>
      </View>
      <Text className="flex-1 text-right text-2xl font-bold text-purpleDark">
        {temp}
      </Text>
    </View>
  );
};

export default WItem;

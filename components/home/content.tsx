import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Weather } from "../../app";
import { getWeratherInfoByCode } from "../../utils";
import { useWeatherStore } from "../../store/weather-store";

type ContentProps = {
  weatherInfo: Weather;
};
export type WeatherDetail = {
  codes: number[];
  label: string;
  image: any;
};
const Content = () => {
  const current_weather = useWeatherStore((state) => state.current_weather);
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetail>();
  useEffect(() => {
    setWeatherDetail(getWeratherInfoByCode(current_weather.weathercode));
  }, [current_weather.weathercode]);
  return (
    <View className="justify-center items-center mb-6">
      <Image source={weatherDetail?.image} className="w-60 h-60" />
      <View className="relative">
        <Text className="text-[12rem] font-extrabold">
          {current_weather.temperature.toFixed()}
        </Text>
        <Text className="absolute top-6 right-[-20] text-8xl">°</Text>
      </View>
      <Text className="text-4xl font-medium text-secondaryDark">
        {weatherDetail?.label}
      </Text>
    </View>
  );
};

export default Content;

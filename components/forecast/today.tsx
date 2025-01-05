import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useWeatherStore } from "../../store/weather-store";
import { WeatherDetail } from "../home/content";
import { getWeratherInfoByCode } from "../../utils";

const Today = () => {
  const weatherCode = useWeatherStore(
    (state) => state.current_weather
  ).weathercode;
  const temperature = useWeatherStore(
    (state) => state.current_weather
  ).temperature;
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetail>();

  useEffect(() => {
    setWeatherDetail(getWeratherInfoByCode(weatherCode));
  }, []);
  return (
    <View className="flex-row justify-between my-2">
      <Image source={weatherDetail?.image} className="w-48 h-48" />
      <View>
        <Text className="text-xl font-bold mb-2">Today</Text>
        <Text className="text-8xl font-bold text-purpleDark">
          {temperature.toFixed()}°
        </Text>
        <Text className="text-xl text-secondaryDark font-bold">
          {weatherDetail?.label}
        </Text>
      </View>
    </View>
  );
};

export default Today;

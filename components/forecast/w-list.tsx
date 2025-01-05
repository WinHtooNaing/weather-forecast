import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import WItem from "./w-item";
import { useWeatherStore } from "../../store/weather-store";
import { DAYS, getWeratherInfoByCode } from "../../utils";

export type Weather = {
  day: string;
  weather: string;
  temp: string;
};
const DummyWeather: Weather[] = [
  {
    day: "Mon",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Tue",
    weather: "Sunny",
    temp: "26°",
  },
  {
    day: "Wed",
    weather: "Cloudy",
    temp: "26°",
  },
  {
    day: "Thu",
    weather: "Sunny",
    temp: "36°",
  },
  {
    day: "Fri",
    weather: "Rainy",
    temp: "20°",
  },
  {
    day: "Sat",
    weather: "Cloudy",
    temp: "20°",
  },
  {
    day: "Sun",
    weather: "Sunny",
    temp: "46°",
  },
];
const WList = () => {
  const [forecastData, setForecastData] = useState(DummyWeather);
  const dailyForecast = useWeatherStore((state) => state.daily);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1">
        {dailyForecast.weathercode.map((code, index) => {
          const temperature = dailyForecast.temperature_2m_max[index];
          const date = new Date(dailyForecast.time[index]);
          const dayOfWeek = DAYS[date.getDay()];
          const condition = getWeratherInfoByCode(code)?.label;
          const img = getWeratherInfoByCode(code)?.image;
          return (
            <WItem
              key={index}
              temp={temperature}
              day={dayOfWeek}
              weatherCodition={condition!}
              wImage={img}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WList;

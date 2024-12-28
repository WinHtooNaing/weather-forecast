import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import WItem from "./w-item";

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
  return (
    <FlatList
      data={forecastData}
      renderItem={({ item }) => <WItem w={item} />}
      keyExtractor={(item) => item.day}
    />
  );
};

export default WList;

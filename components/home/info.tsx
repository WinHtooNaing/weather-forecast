import React from "react";
import { Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { Theme } from "../../theme";
import { useWeatherStore } from "../../store/weather-store";
import { getTimeOnly } from "../../utils";
const Info = () => {
  const sunrise = useWeatherStore((state) => state.daily).sunrise[0];
  const sunset = useWeatherStore((state) => state.daily).sunset[0];
  const windspeed = useWeatherStore((state) => state.current_weather).windspeed;
  return (
    <>
      {sunrise && sunset && windspeed && (
        <View className="flex-row items-center justify-center my-2 gap-2 mx-auto">
          <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
            <Feather name="sunrise" size={24} color="black" />
            <Text className="text-purpleDark font-bold text-lg">
              {getTimeOnly(sunrise)}
            </Text>
            <Text className="text-secondaryDark font-bold text-lg">
              Sunrise
            </Text>
          </View>
          <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
            <Feather name="wind" size={24} color="black" />
            <Text className="text-purpleDark font-bold text-lg">
              {windspeed.toFixed()} km/h
            </Text>
            <Text className="text-secondaryDark font-bold text-lg">Wind</Text>
          </View>
          <View className="flex-1 items-center shadow bg-white rounded-3xl p-4">
            <Feather name="sunset" size={24} color="black" />
            <Text className="text-purpleDark font-bold text-lg">
              {getTimeOnly(sunset)}
            </Text>
            <Text className="text-secondaryDark font-bold text-lg">Sunset</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Info;

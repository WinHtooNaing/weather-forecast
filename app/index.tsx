import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Alert,
} from "react-native";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useWeatherStore } from "../store/weather-store";
import { getLocationByCity, getWeatherInfo } from "../utils/weather-api";

type Location = {
  latitude: number;
  longitude: number;
};
export type Weather = {
  current_weather: {
    temperature: number;
    weathercode: 0;
    windspeed: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    time: string[];
    weathercode: number[];
  };
  latitude: number;
  longtitude: number;
};
export default function Index() {
  const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);
  const setDailyForecast = useWeatherStore((state) => state.setDailyForecast);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location>({
    latitude: 18.974586,
    longitude: 96.4174395,
  });
  const [city, setCity] = useState<String>("Taungoo");
  const [weatherInfo, setWeatherInfo] = useState<Weather>();

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission not granted");
        return;
      }
      const getCurrentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: getCurrentLocation.coords.latitude,
        longitude: getCurrentLocation.coords.longitude,
      });
    };
    getPermission;
  }, []);
  const getWeather = async () => {
    const weather = await getWeatherInfo(location.latitude, location.longitude);
    setCurrentWeather({
      temperature: weather.current_weather.temperature,
      weatherCode: weather.current_weather.weathercode,
      windspeed: weather.current_weather.windspeed,
    });
    setDailyForecast({
      sunrise: weather.daily.sunrise,
      sunset: weather.daily.sunset,
      temperature_2m_max: weather.daily.temperature_2m_max,
      time: weather.daily.time,
      weathercode: weather.daily.weathercode,
    });
  };
  const getReverseGeocode = async () => {
    const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
      latitude: location.latitude,
      longitude: location.longitude,
    });

    setCity(
      reverseGeocodeResponse[0].city! || reverseGeocodeResponse[0].country!
    );
  };

  const searchLocationByCity = async (city: string) => {
    try {
      const { latitude, longitude } = await getLocationByCity(city);
      setLocation({ latitude, longitude });
    } catch (error) {
      Alert.alert(error as string, "Please enter a valid city name.");
    }
  };
  useEffect(() => {
    setLoading(true);
    getWeather();
    getReverseGeocode();
    setLoading(false);
  }, [location]);
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8">
          {!loading && (
            <View>
              <Header cityname={city} />
              <InputBox searchLocationByCity={searchLocationByCity} />
              <Content />
              <Info />
              <Text className="text-sm text-center text-secondaryDark my-8">
                Weather App - By MookTuu
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
}

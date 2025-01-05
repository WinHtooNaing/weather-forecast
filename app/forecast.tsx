import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Header from "../components/forecast/header";
import Today from "../components/forecast/today";
import Info from "../components/home/info";
import WList from "../components/forecast/w-list";

const Forecast = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8 flex-1">
          <Header />
          <Today />
          <Info />
          <View className="mt-2" />
          <WList />
          <Text className="text-sm text-center text-secondaryDark my-4">
            Weather App - By MookTuu
          </Text>
        </View>
      </ImageBackground>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

export default Forecast;

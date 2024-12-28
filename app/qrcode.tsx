import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

const QrCode = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8 flex-1 items-center justify-center">
          <Image
            source={require("../assets/scan-me.png")}
            className="w-60 h-60"
          />
          <Text className="text-sm text-center text-secondaryDark ">
            Weather App - By MookTuu
          </Text>
        </View>
      </ImageBackground>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
};

export default QrCode;

import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StatusBar,
} from "react-native";
import Header from "../components/home/header";
import InputBox from "../components/home/input-box";
import Content from "../components/home/content";
import Info from "../components/home/info";

export default function Index() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        className="w-full h-full"
        blurRadius={6}
      >
        <View className="px-8">
          <Header />
          <InputBox />
          <Content />
          <Info />
          <Text className="text-sm text-center text-secondaryDark my-8">
            Weather App - By MookTuu
          </Text>
        </View>
      </ImageBackground>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
    </SafeAreaView>
  );
}

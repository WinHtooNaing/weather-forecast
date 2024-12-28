import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Theme } from "../../theme";
const Header = () => {
  return (
    <View className="flex-row justify-between items-center mt-4 mb-4">
      <Pressable hitSlop={20}>
        <Link href="/qrcode" asChild>
          <Ionicons name="qr-code" size={24} color="black" />
        </Link>
      </Pressable>
      <View className="flex-row items-center">
        <Ionicons name="location" size={26} color={Theme.orange} />
        <Text className="text-xl font-bold">Yangon</Text>
      </View>
      <Pressable hitSlop={20}>
        <Link href="/forecast" asChild>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </Link>
      </Pressable>
    </View>
  );
};

export default Header;

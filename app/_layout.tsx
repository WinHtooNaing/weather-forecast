import { Stack } from "expo-router";
import "../global.css";

import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="forecast"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="qrcode"
        options={{
          animation: "fade_from_bottom",
          title: "Get My GITHUB QR Code",
        }}
      />
    </Stack>
  );
};

export default Layout;

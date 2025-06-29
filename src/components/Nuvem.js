import React, { useEffect, useRef } from "react";
import { Animated, Image, Dimensions } from "react-native";
import { Easing } from "react-native";

const { width } = Dimensions.get("window");

export default function Cloud({
  top,
  size,
  duration,
  source,
  direction = "right",
  delay = 0,
}) {
  const translateX = useRef(
    new Animated.Value(direction === "right" ? -size : 500)
  ).current;

  useEffect(() => {
    translateX.setValue(direction === "right" ? -size : 500);

    Animated.loop(
      Animated.timing(translateX, {
        toValue: direction === "right" ? 500 : -size,
        duration,
        delay,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [translateX, duration, size, direction, delay]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top,
        transform: [{ translateX }],
      }}
    >
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: size, height: size * 0.6 }}
      />
    </Animated.View>
  );
}

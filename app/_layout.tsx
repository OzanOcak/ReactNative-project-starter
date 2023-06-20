import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

const StackLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Login", headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Create account",
          headerRight: () => (
            <Button
              title="Open"
              onPress={() => {
                router.push("modal"); // useRouter
              }}
            />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerRight: () => (
            <Button
              title="Close"
              onPress={() => {
                router.back(); // useRouter
              }}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default StackLayout;

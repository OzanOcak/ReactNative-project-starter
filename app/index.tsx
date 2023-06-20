import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const LoginPage = () => {
  return (
    <View className="flex justify-center items-center h-screen gap-2">
      <Text>LoginPage</Text>
      <Link href={"/register"} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;

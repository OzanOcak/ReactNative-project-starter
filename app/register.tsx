import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register = () => {
  return (
    <View className="flex justify-center items-center h-screen gap-2">
      <Text>Register</Text>
      <Link href={"/"}> Go back</Link>
    </View>
  );
};

export default Register;

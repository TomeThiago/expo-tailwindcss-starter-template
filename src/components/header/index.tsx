import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View
      className="flex flex-row items-center justify-between px-3 mb-8"
      style={{ marginTop: statusBarHeight + 8 }}
    >
      <Feather name="chevron-left" size={32} onPress={() => router.back()} />
      <Text className="font-semibold text-2xl self-start mb-2">{title}</Text>
      <View style={{ width: 32 }} />
    </View>
  );
}

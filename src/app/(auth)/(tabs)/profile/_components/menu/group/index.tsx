import { ReactNode } from "react";
import { View } from "react-native";

interface MenuGroupProps {
  children: ReactNode;
}

export function MenuGroup({ children }: MenuGroupProps) {
  return <View className="bg-gray-200 px-3 rounded-xl">{children}</View>;
}

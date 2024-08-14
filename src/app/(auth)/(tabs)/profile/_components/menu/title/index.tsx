import { Text } from "react-native";

interface MenuTitleProps {
  label: string;
}

export function MenuTitle({ label }: MenuTitleProps) {
  return (
    <Text className="mb-2 text-gray-500 font-semibold text-sm">{label}</Text>
  );
}

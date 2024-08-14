import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { ColorValue, Pressable, Text, View } from "react-native";

interface MenuItemProps {
  label: string;
  labelColor?: ColorValue;
  icon?: React.ComponentProps<typeof Feather>["name"];
  iconColor?: ColorValue;
  chevronRight?: boolean;
  onPress?: () => void;
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export function MenuItem({
  label,
  labelColor,
  icon,
  iconColor,
  chevronRight = true,
  onPress,
  fontWeight = 400,
}: MenuItemProps) {
  return (
    <Pressable className="flex-row items-center gap-2 py-3" onPress={onPress}>
      <Feather
        name={icon}
        size={24}
        onPress={() => router.push("/login")}
        color={iconColor}
      />

      <Text
        className="flex-1"
        style={{ color: labelColor, fontWeight: fontWeight }}
      >
        {label}
      </Text>

      {chevronRight && (
        <Feather name="chevron-right" size={24} color={iconColor} />
      )}
    </Pressable>
  );
}

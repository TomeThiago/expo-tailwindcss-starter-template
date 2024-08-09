import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { ColorValue, Text, View } from "react-native";

interface MenuItemProps {
  label: string;
  labelColor?: ColorValue;
  icon?: React.ComponentProps<typeof Feather>["name"];
  iconColor?: ColorValue;
  chevronRight?: boolean;
}

export function MenuItem({
  label,
  labelColor,
  icon,
  iconColor,
  chevronRight = true,
}: MenuItemProps) {
  return (
    <View className="flex-row items-center gap-2 py-3">
      <Feather
        name={icon}
        size={24}
        onPress={() => router.push("/login")}
        color={iconColor}
      />

      <Text className="flex-1" style={{ color: labelColor, fontWeight: 500 }}>
        {label}
      </Text>

      {chevronRight && (
        <Feather
          name="chevron-right"
          size={24}
          onPress={() => router.push("/login")}
          color={iconColor}
        />
      )}
    </View>
  );
}

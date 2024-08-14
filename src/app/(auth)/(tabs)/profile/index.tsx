import { Image, Text, View } from "react-native";

import Constants from "expo-constants";
import { Menu } from "./_components/menu";

import logoImg from "../../../../assets/images/logo.png";

const statusBarHeight = Constants.statusBarHeight;

export default function Profile() {
  return (
    <View
      className="px-6"
      style={{
        flex: 1,
        alignItems: "stretch",
        marginTop: statusBarHeight + 16,
      }}
    >
      <View className="items-center justify-center gap-2">
        <Image
          source={logoImg}
          style={{
            height: 80,
            width: 80,
            objectFit: "contain",
            backgroundColor: "#ffffff",
            borderRadius: 80,
          }}
        />

        <Text className="text-2xl font-semibold">Usuário</Text>
      </View>
      <Menu />
    </View>
  );
}

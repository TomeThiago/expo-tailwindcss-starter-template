import { Image, Text, View } from "react-native";

import logoImg from "../../../../assets/images/logo.png";
import { Feather } from "@expo/vector-icons";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        className="bg-primary flex-row items-center justify-between p-4 rounded-b-3xl"
        style={{ paddingTop: statusBarHeight + 8 }}
      >
        <View className="flex-row gap-3 items-center">
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?name=Thiago+Tome&background=44c4f7&color=fff",
            }}
            style={{
              height: 50,
              width: 50,
              objectFit: "contain",
              backgroundColor: "#ffffff",
              borderRadius: 80,
              borderWidth: 3,
              borderColor: "#fff",
            }}
          />

          <View>
            <Text className="text-white font-medium">Bem-vindo</Text>
            <Text className="text-white font-semibold text-xl">
              Thiago Tomé
            </Text>
          </View>
        </View>

        <Feather name="bell" size={24} color="#fff" />
      </View>
      <View className="px-6 pt-2">
        <Text className="font-base">Localização</Text>
        <Text className="font-semibold text-lg">Av. Rui Barbosa</Text>

        <Text className="mt-3 font-semibold text-2xl">Categorias</Text>

        <Text className="mt-3 font-semibold text-2xl">Perto de você</Text>
      </View>
    </View>
  );
}

import { Image, Pressable, Text, View } from "react-native";

import welcomeImg from "../assets/images/welcome.jpg";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <View className="flex flex-1 justify-center items-center px-6">
        <Image
          source={welcomeImg}
          style={{
            objectFit: "contain",
            height: 400,
            width: 400,
          }}
        />

        <Text className="font-bold text-3xl mb-3 text-primary">
          Aplicativo Placeholder
        </Text>
        <Text className="font-normal text-lg mb-8 text-center">
          Seu aplicativo placeholder tudo em um só lugar e na palma da sua mão.
        </Text>

        <Pressable
          className="bg-primary w-full h-16 rounded-3xl items-center justify-center"
          onPress={() => router.push("/login")}
        >
          <Text className="font-semibold text-2xl text-white">Iniciar</Text>
        </Pressable>
      </View>
    </View>
  );
}

import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

import logoImg from "../../assets/images/logo.png";
import { Input } from "../../components/forms/input";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [isChecked, setChecked] = useState(false);

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
          source={logoImg}
          style={{
            height: 100,
            width: 100,
            objectFit: "contain",
          }}
        />

        <Text className="font-semibold text-2xl mb-4">Entre na plataforma</Text>

        <View className=" w-full flex gap-4 mb-8">
          <Input
            label="E-mail"
            name="email"
            placeholder="Digite o seu e-mail"
          />

          <Input
            label="Senha"
            name="password"
            placeholder="Digite a sua senha"
            secureTextEntry
          />

          <View className="flex flex-row items-center gap-2">
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text>Mantenha-me conectado</Text>
          </View>
        </View>

        <Pressable
          className="bg-primary w-full h-16 rounded-3xl items-center justify-center mb-5"
          onPress={() => router.push("/")}
        >
          <Text className="font-semibold text-2xl text-white">Entrar</Text>
        </Pressable>

        <TouchableOpacity onPress={() => router.push("/")}>
          <Text className="underline">Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

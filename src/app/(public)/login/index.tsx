import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

import logoImg from "../../../assets/images/logo.png";
import { Input } from "../../../components/forms/input";
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
            keyboardType="email-address"
          />

          <Input
            label="Senha"
            name="password"
            placeholder="Digite a sua senha"
            secureTextEntry
          />

          <View className="flex flex-row items-center gap-2">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color="#007dfe"
            />
            <Pressable onPress={() => setChecked((value) => !value)}>
              <Text>Mantenha-me conectado</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          className="bg-primary w-full h-16 rounded-3xl items-center justify-center "
          onPress={() => router.push("/home")}
        >
          <Text className="font-semibold text-2xl text-white">Entrar</Text>
        </Pressable>

        <View className="my-4 flex-row">
          <Text className="font-medium text-lg mr-2">Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => router.push("/create-account")}>
            <Text className="font-bold text-primary text-lg">Criar conta</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text className="underline">Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

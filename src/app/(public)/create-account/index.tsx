import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import logoImg from "../../../assets/images/logo.png";
import { Input } from "../../../components/forms/input";
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
          source={logoImg}
          style={{
            height: 100,
            width: 100,
            objectFit: "contain",
          }}
        />

        <Text className="font-semibold text-2xl mb-5">Criar conta</Text>

        <Text className="font-semibold text-2xl self-start text-primary">
          Boas-vindas ao aplicativo
        </Text>

        <Text className="font-medium my-2 self-start ">
          É muito bom te ter conosco. Para iniciarmos, informe os dados
          necessários.
        </Text>

        <Text className="text-sm mb-6 self-start text-primary">
          Demora menos de 2 minutos
        </Text>

        <View className="w-full flex gap-4 mb-8">
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o seu nome completo"
            autoCapitalize="words"
          />

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
        </View>

        <Pressable
          className="bg-primary w-full h-16 rounded-3xl items-center justify-center"
          onPress={() => router.push("/home")}
        >
          <Text className="font-semibold text-2xl text-white">Criar</Text>
        </Pressable>

        <View className="mt-5 flex-row">
          <Text className="font-medium text-lg mr-2">Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="font-bold text-primary text-lg">Fazer login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

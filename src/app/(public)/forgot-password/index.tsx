import { Pressable, Text, View } from "react-native";
import { Input } from "../../../components/forms/input";
import { router } from "expo-router";
import { Header } from "../../../components/header";

export default function Index() {
  return (
    <>
      <Header title="Recuperar senha" />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <View className="flex flex-1 items-center px-6">
          <Text className="font-semibold text-2xl self-start mb-2">
            Informe o seu e-mail
          </Text>

          <Text className="text-base self-start mb-8">
            Digite o seu e-mail cadastrado na plataforma, e enviaremos um código
            de recuperação por ele.
          </Text>

          <View className="w-full flex gap-4 mb-8">
            <Input
              label="E-mail"
              name="email"
              placeholder="Digite o seu e-mail"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View className="px-4">
          <Pressable
            className="bg-primary w-full h-16 rounded-3xl items-center justify-center mb-5"
            onPress={() => router.push("/check-code-password")}
          >
            <Text className="font-semibold text-2xl text-white">
              Enviar código
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

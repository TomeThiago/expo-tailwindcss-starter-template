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
          <Text className="font-semibold text-2xl self-start mb-6">
            Verificar código
          </Text>

          <View className="w-full flex gap-4">
            <Input
              label="Digite o código enviado para o seu e-mail: tome.pinto@empresa.br"
              name="code"
              placeholder="Digite o código de 8 digítos"
            />
          </View>
        </View>

        <View className="px-4">
          <Pressable
            className="bg-primary w-full h-16 rounded-3xl items-center justify-center mb-5"
            onPress={() => router.push("/reset-password")}
          >
            <Text className="font-semibold text-2xl text-white">
              Verificar código
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

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
            Redefinir senha
          </Text>

          <View className="w-full flex gap-4 mb-8">
            <Input
              label="Nova senha"
              name="password"
              placeholder="Digite a sua nova senha"
              secureTextEntry
            />
          </View>

          <View className="w-full flex gap-4">
            <Input
              label="Confirme a nova senha"
              name="re-password"
              placeholder="Digite novamente sua nova senha"
              secureTextEntry
            />
          </View>
        </View>

        <View className="px-4">
          <Pressable
            className="bg-primary w-full h-16 rounded-3xl items-center justify-center mb-5"
            onPress={() => router.push("/login")}
          >
            <Text className="font-semibold text-2xl text-white">
              Alterar senha
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

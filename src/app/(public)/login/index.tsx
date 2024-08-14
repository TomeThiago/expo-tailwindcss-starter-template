import {
  Alert,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";

import logoImg from "../../../assets/images/logo.png";
import { Input } from "../../../components/forms/input";
import { useRef, useState } from "react";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ErrorInput } from "../../../components/forms/input/error-input";

interface LoginFormDTO {
  login: string;
  password: string;
}

export default function Login() {
  const [isChecked, setChecked] = useState(false);
  const inputPassword = useRef<TextInput>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormDTO>({
    defaultValues: {
      login: "admin@admin.com",
      password: "12345678",
    },
  });

  const onSubmit: SubmitHandler<LoginFormDTO> = (data) => {
    if (data.login !== "admin@admin.com" || data.password !== "12345678") {
      Alert.alert("E-mail ou senha inválidos");

      return;
    }

    router.push("/home");
  };

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
          <View className="gap-1">
            <Controller
              name="login"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="E-mail"
                  placeholder="Digite o seu e-mail"
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={() => inputPassword?.current?.focus()}
                />
              )}
            />

            {errors.login && (
              <ErrorInput message="O campo e-mail deve ser informado." />
            )}
          </View>

          <View className="gap-1">
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  ref={inputPassword}
                  label="Senha"
                  placeholder="Digite a sua senha"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password && (
              <ErrorInput message="O campo senha deve ser informado." />
            )}
          </View>

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
          className="bg-primary w-full h-16 rounded-3xl items-center justify-center"
          onPress={handleSubmit(onSubmit)}
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

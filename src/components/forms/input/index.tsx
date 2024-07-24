import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  name: string;
  label: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <View className="flex flex-col gap-1">
      <Text className="font-bold">{label}</Text>
      <TextInput className="py-2 border-b-[1px] border-[#656565]" {...rest} />
    </View>
  );
}

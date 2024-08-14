import { forwardRef, RefAttributes } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
}

const Input = forwardRef<TextInput, InputProps>(({ label, ...rest }, ref) => {
  return (
    <View className="flex flex-col gap-1">
      <Text className="font-bold">{label}</Text>
      <TextInput
        ref={ref}
        className="py-2 border-b-[1px] border-[#656565]"
        {...rest}
      />
    </View>
  );
});

export { Input };

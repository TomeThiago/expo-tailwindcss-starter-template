import { Text } from "react-native";

interface ErrorInputProps {
  message: string;
}

export function ErrorInput({ message }: ErrorInputProps) {
  return <Text className="font-bold text-red-600">{message}</Text>;
}

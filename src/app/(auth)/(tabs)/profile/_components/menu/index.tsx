import { Text, View } from "react-native";
import { MenuItem } from "./item";
import { Divider } from "../../../../../../components/divider";

export function Menu() {
  return (
    <View>
      <Text className="mb-2 text-gray-500 font-semibold text-sm">
        Preferência
      </Text>

      <View className="bg-gray-200 py-1 px-4 rounded-xl">
        <MenuItem label="Configuração" icon="settings" />
        <Divider />

        <MenuItem
          label="Sair"
          labelColor="#f54a4a"
          icon="log-in"
          iconColor="#f54a4a"
          chevronRight={false}
        />
      </View>
    </View>
  );
}

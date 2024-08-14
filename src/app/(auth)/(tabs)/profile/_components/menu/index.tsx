import { Alert, View } from "react-native";
import * as Linking from "expo-linking";

import { MenuItem } from "./item";
import { Divider } from "../../../../../../components/divider";
import { router } from "expo-router";
import { MenuTitle } from "./title";
import { MenuGroup } from "./group";

export function Menu() {
  const handleOpenTermsOfUse = async () => {
    const url = "https://policies.google.com/terms?hl=en-BR&fg=1";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `Não foi possível abrir os termos de uso, tente novamente mais tarde.`
      );
    }
  };

  const handleOpenPrivacyPolicy = async () => {
    const url = "https://policies.google.com/privacy?hl=en-BR&fg=1";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `Não foi possível abrir a política de privacidade, tente novamente mais tarde.`
      );
    }
  };

  const handleOpenSupport = async () => {
    const url = "https://api.whatsapp.com/send?phone=+551195959199";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        `Não foi possível abrir a política de privacidade, tente novamente mais tarde.`
      );
    }
  };

  return (
    <View className="gap-4">
      <View>
        <MenuTitle label="Perfil" />

        <MenuGroup>
          <MenuItem label="Dados cadastrais" icon="user-check" />
          <Divider />
          <MenuItem label="Senhas" icon="lock" />
        </MenuGroup>
      </View>

      <View>
        <MenuTitle label="Privacidade" />

        <MenuGroup>
          <MenuItem
            label="Termos de uso"
            icon="file-text"
            onPress={handleOpenTermsOfUse}
          />
          <Divider />
          <MenuItem
            label="Políticas de privacidade"
            icon="file-text"
            onPress={handleOpenPrivacyPolicy}
          />
        </MenuGroup>
      </View>

      <View>
        <MenuTitle label="Outros" />

        <MenuGroup>
          <MenuItem
            label="Suporte"
            icon="help-circle"
            onPress={handleOpenSupport}
          />
          <Divider />
          <MenuItem
            label="Sair"
            labelColor="#f54a4a"
            icon="log-in"
            iconColor="#f54a4a"
            fontWeight={500}
            chevronRight={false}
            onPress={() => router.push("/login")}
          />
        </MenuGroup>
      </View>
    </View>
  );
}

import { View, Image } from "react-native";
import { Button } from "@/components/Button";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")}
        style={styles.logo}
      />
      
    <Button  title="Entrar"/>
    <Button  title="Criar conta"/>
    <Button  title="Salvar"/>
    <Button  title="Voltar"/>
    </View>
  );
}
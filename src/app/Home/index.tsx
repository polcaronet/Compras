import { View, Image } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";

import { styles } from "./styles";


export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")}
        style={styles.logo}
      />
      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?" />
        <Button title="Adicionar" />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive />
        <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
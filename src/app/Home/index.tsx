import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from "@/components/Item"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "1 pacote de café"
  },
  {
    id: "2",
    status: FilterStatus.PENDING,
    description: "3 pacotes de macarrão"
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "3 cebolas"
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}
      >
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={[]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item} 
              onStatus={() => console.log("mudar o status")}
              onRemove={() => console.log("remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
        />
      </View>
    </View>
  )
}
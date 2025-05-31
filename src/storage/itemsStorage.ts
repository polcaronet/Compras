import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@compras:items"

export type ItemsStorage = {
  id: string;
  status: FilterStatus;
  description: string;
}

async function get(): Promise<ItemsStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw new Error("GET_ITEMS: " + error)
  }
}

async function save(items: ItemsStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    throw new Error("ITEMS_SAVE: " + error)
  }
}

async function add(newItem: ItemsStorage): Promise<ItemsStorage[]> {
  const items = await get()
  const updatedItems = [...items, newItem]
  await save(updatedItems)
  
  return updatedItems
}

async function getByStatus(status: FilterStatus): Promise<ItemsStorage[]> {
  const items = await get()
  return items.filter(item => item.status === status)
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
}

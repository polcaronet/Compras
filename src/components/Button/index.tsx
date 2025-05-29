import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles"

type Props = {
  title: string;
}

export function Button(props: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}


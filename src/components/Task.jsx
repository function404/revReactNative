import { Pressable, Text, View } from "react-native";

import styles from "../utils/style";

export default function Task({ title, description, data }) {
    return (
        <Pressable style={styles.container}>
            <View style={styles.content}>
                <Text>Título: {title}</Text>

                <Text>Descrição: {description}</Text>
                
                <Text>Data: {data}</Text>
            </View>
        </Pressable>
    )
}
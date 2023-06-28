import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../utils/style';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefas</Text>
    </View>
  );
};

export default AddTask;
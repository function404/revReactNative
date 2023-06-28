import React, { useState } from "react";

import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/style";

const EditTask = ( {route} ) => {
  const { item } = route.params;

  const [desc, setDesc] = useState(item.desc);
  const [title, setTitle] = useState(item.title);
  const [data, setData] = useState(item.data);

  return (
    <>
      <View>
        <Text style={styles.title}>Editar tarefa</Text>
        <View>
          <Text>Titulo atual: {item.title}</Text>
          <Text>Descrição atual: {item.desc}</Text>
          <Text>Data atual: {item.data}</Text>
        </View>

        <View style={{ padding: 10,}}>
        <TextInput
            style={{
              margin: 5,
              border: '1px solid #000',
              padding: 7,
            }}
            label={'Titulo'}
            placeholder={'Altere o titulo da tarefa'}
            value={title}
            onChangeText={setTitle}
            mode="outlined"
          />
      </View>
      <View style={{ padding: 10,}}>
        <TextInput
          style={{
            margin: 5,
            border: '1px solid #000',
            padding: 7,
          }}
          label={'Descrição'}
          placeholder={'Altere a descrição da tarefa'}
          value={desc}
          onChangeText={setDesc}
          mode="outlined"
        />
      </View>
      <View style={{ padding: 10,}}>  
        <TextInput
          style={{
            margin: 5,
            border: '1px solid #000',
            padding: 7,

          }}
          label={'Data'}
          placeholder={'Altere a data da tarefa'}
          value={data}
          onChangeText={setData}
          mode="outlined"
        />
      </View>
      <View style={{ padding: 15,}}>
        <Button 
          style={{
            marginTop: "10px",
            backgroundColor: "#00c2cc",
            borderColor: "#fff",
          }}
          labelStyle={{ color: "#fff" }}
          title='Adicionar'
          >Adicionar tarefas
        </Button>
      </View>
      </View>
    </>
  );
};

export default EditTask;
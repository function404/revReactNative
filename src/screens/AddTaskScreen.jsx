import React, { useState } from 'react';

import { View, Text, TextInput, Button } from 'react-native';
import styles from '../utils/style';

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';


const AddTask = ({ navigation }) => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');

  function addTask() {
    if (desc !== '' && title !== '' && data !== '' ){
      const docRef = addDoc(collection(db, 'tasks'), {
        desc: desc,
        title: title,
        data: data,
      }).then((docRef) => {
        console.log('Tarefa adicionado com sucesso!', docRef.id)
        setResetTable()
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('Insira todas as informações da tarefa!');
    };
    }


  return (
    <>
      <Text style={styles.title}>Adicionar tarefas</Text>
      <View style={{ padding: 10,}}>
        <TextInput
            style={{
              margin: 5,
              border: '1px solid #000',
              padding: 7,
            }}
            label={'Titulo'}
            placeholder={'Digite o titulo da tarefa'}
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
          placeholder={'Digite a descrição da tarefa'}
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
          placeholder={'Digite a data da tarefa'}
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
          onPress={addTask}>Adicionar tarefas
        </Button>
      </View>    
    </>
  );
};

export default AddTask;
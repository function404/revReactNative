import React, { useState } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

import styles from '../utils/style';

import { useNavigation } from '@react-navigation/native';

const EditTask = ( {route} ) => {
  const { task, id } = route.params;

  const navigation = useNavigation();

  const [getDesc, setDesc] = useState('');
  const [getTitle, setTitle] = useState('');
  const [getData, setData] = useState('');

  async function updateItemTask() {
    if (getDesc !== '' && getTitle !== '' && getData !== '' ){
      await updateDoc(doc(db, 'tasks', id), {
        desc: getDesc,
        title: getTitle,
        data: getData,
      }).then(() => {
        alert('Tarefa atualizada com sucesso!');
        navigation.navigate('Home');
      }).catch((error) => {
        alert(error);
      });
    } else {
      alert('Insira todas as informações da tarefa!');
    };
  };

  return (
    <>
      <View>
        <Text style={styles.title}>Tarefa Atual</Text>

        <View style={styles.centered}>
          <Text>Titulo: {task.title}</Text>
          <Text>Descrição: {task.desc}</Text>
          <Text>Data: {task.data}</Text>
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Novo titulo:</Text>
          <TextInput
            style={{
              margin: 5,
              border: '1px solid #000',
              padding: 7,
            }}
            value={getTitle}
            placeholder={'Digite...'}
            onChangeText={setTitle}
          />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Nova descrição:</Text>
          <TextInput
            style={{
              margin: 5,
              border: '1px solid #000',
              padding: 7,
            }}
            value={getDesc}
            placeholder={'Digite...'}
            onChangeText={setDesc}
          />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Nova data:</Text>
          <TextInput
            style={{
              margin: 5,
              border: '1px solid #000',
              padding: 7,

            }}
            value={getData}
            placeholder={'Digite...'}
            onChangeText={setData}
          />
        </View>

        <View style={{ padding: 15,}}>
          <Button 
            style={{
              marginTop: '10px',
              backgroundColor: '#00c2cc',
              borderColor: '#fff',
            }}
            labelStyle={{ color: '#fff' }}
            title='Concluir'
            onPress={updateItemTask}>
          </Button>
        </View>

      </View>
    </>
  );
};

export default EditTask;
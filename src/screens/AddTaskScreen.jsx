import React, { useState } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

import styles from '../utils/style';

const AddTask = () => {
  const [getDesc, setDesc] = useState('');
  const [getTitle, setTitle] = useState('');
  const [getData, setData] = useState('');

  function addItemTask() {
    if (getDesc !== '' && getTitle !== '' && getData !== '' ){
      const docRef = addDoc(collection(db, 'tasks'), {
        desc: getDesc,
        title: getTitle,
        data: getData,
      }).then((docRef) => {
        alert('Tarefa adicionado com sucesso!', docRef.id)
        setData('');
        setDesc('');
        setTitle('');
      }).catch((error) => {
        alert(error);
      });
    } else {
      alert('Insira todas as informações da tarefa!');
    };
  }


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar tarefa</Text>
      </View>
      <View style={{backgroundColor: '#fff'}}>
        <View style={{ padding: 10 }}>
          <Text style={{fontWeight: 'bold'}}>Titulo:</Text>
            <TextInput
              style={{
                margin: 5,
                border: '1px solid #3599cc',
                padding: 7,
                color: 'rgba(0, 0, 0, .7)',
              }}
              placeholder={'Digite...'}
              value={getTitle}
              onChangeText={setTitle}
            />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Descrição:</Text>
          <TextInput
            style={{
              margin: 5,
              border: '1px solid #3599cc',
              padding: 7,
              color: 'rgba(0, 0, 0, .7)',
            }}
            placeholder={'Digite...'}
            value={getDesc}
            onChangeText={setDesc}
          />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Data:</Text>
          <TextInput
            style={{
              margin: 5,
              border: '1px solid #3599cc',
              padding: 7,
              color: 'rgba(0, 0, 0, .7)',

            }}
            label={'Data'}
            placeholder={'Digite...'}
            value={getData}
            onChangeText={setData}
          />
        </View>

        <View style={{ padding: 15,}}>
          <Button 
            style={{
              marginTop: '10px',
              backgroundColor: '#3599cc',
              borderColor: '#fff',
            }}
            labelStyle={{ color: '#fff' }}
            title='Adicionar'
            onPress={() => addItemTask()}>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddTask;
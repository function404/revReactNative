import React, { useState } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

import { TextInputMask } from 'react-native-masked-text';

import styles from '../utils/style';

const AddTask = () => {
  const [getDesc, setDesc] = useState('');
  const [getTitle, setTitle] = useState('');
  const [getData, setData] = useState('');

  function addItemTask() {
    if (getDesc !== '' && getTitle !== '' && getData !== ''){
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
  };

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
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#3599cc',
                padding: 7,
                color: 'rgba(0, 0, 0, .7)',
              }}
              placeholder={'Digite...'}
              value={getTitle}
              onChangeText={(e) => setTitle(e)}
            />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Descrição:</Text>
          <TextInput
            style={{
              margin: 5,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: '#3599cc',
              padding: 7,
              color: 'rgba(0, 0, 0, .7)',
            }}
            placeholder={'Digite...'}
            value={getDesc}
            onChangeText={(e) => setDesc(e)}
          />
        </View>

        <View style={{ padding: 10,}}>
          <Text style={{fontWeight: 'bold'}}>Data:</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            style={{
              margin: 5,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderColor: '#3599cc',
              padding: 7,
              color: 'rgba(0, 0, 0, .7)',
            }}
            value={getData}
            placeholderTextColor={'rgba(0, 0, 0, .7)'}
            placeholder='Digite...'
            onChangeText={(e) => setData(e)}
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
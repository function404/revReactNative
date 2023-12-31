import React, { useState } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

import styles from '../utils/style';

import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

const EditTask = ( {route} ) => {
  const { task, id, element } = route.params;

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
        edited: true,
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
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Editar tarefa (ID: {element})</Text>
      </View>

      <View style={styles.centered}>
        <Text style={{marginBottom: 2, marginTop: 2}}>• Titulo: <Text style={{fontWeight: 'bold'}}>{task.title}</Text></Text>
        <Text style={{marginBottom: 2, marginTop: 2}}>• Descrição: <Text style={{fontWeight: 'bold'}}>{task.desc}</Text></Text>
        <Text style={{marginBottom: 2, marginTop: 2}}>• Data: <Text style={{fontWeight: 'bold'}}>{task.data}</Text></Text>
      </View>

      <View style={{ padding: 10,}}>
        <Text style={{fontWeight: 'bold'}}>Novo titulo:</Text>
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
          value={getTitle}
          placeholder={'Digite...'}
          onChangeText={(e) => setTitle(e)}
        />
      </View>

      <View style={{ padding: 10,}}>
        <Text style={{fontWeight: 'bold'}}>Nova descrição:</Text>
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
          value={getDesc}
          placeholder={'Digite...'}
          onChangeText={(e) => setDesc(e)}
        />
      </View>

      <View style={{ padding: 10,}}>
        <Text style={{fontWeight: 'bold'}}>Nova data:</Text>
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

      <View style={{ margin: 10 }}>
        <Button 
          style={{
            marginTop: '10px',
            backgroundColor: '#3599cc',
            borderColor: '#fff',
          }}
          labelStyle={{ color: '#fff' }}
          title='Concluir'
          onPress={() => updateItemTask()}>
        </Button>
      </View>

      <View style={{ margin: 10 }}>
        <Button 
          style={{
            backgroundColor: '#3599cc',
            borderColor: '#fff',
            width: '50%',
          }}
          labelStyle={{ color: '#fff' }}
          title='< Voltar'
          onPress={() => navigation.navigate('Home')}>
        </Button>
      </View>

    </View>
  );
};

export default EditTask;
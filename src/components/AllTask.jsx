import React, { useState, useEffect } from 'react';

import { ScrollView, Text, View, Button, ActivityIndicator } from 'react-native';

import { db } from '../config/firebase';
import { collection, query, getDocs, doc, deleteDoc } from 'firebase/firestore';

import { useNavigation } from '@react-navigation/native';

import styles from '../utils/style';

const AllTasks = () => {
    const [getAllItensList, setAllItensList] = useState([]);
    const [getID, setID] = useState([]);

    const navigation = useNavigation();

    const [getLoading, setLoading] = useState(true);

    async function queryAllItens() {
        try{
            const allList = query(collection(db, 'tasks'));
            const queryAllResult = await getDocs(allList);

            const allNames = [];
            const allIDs = [];
            queryAllResult.forEach((doc) => {
                allNames.push(doc.data());
                allIDs.push(doc.id);
            });
            
            setAllItensList(allNames);
            setID(allIDs)
        }catch (error) {
            console.log(error);
        }
    };

    async function deleteItemTask(id) {
        try {
            await deleteDoc(doc(db, 'tasks', id));
            alert('Tarefa excluida com sucesso!');
        } catch (error) {
            alert(error);
        };
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        queryAllItens();
    }, [getAllItensList]);

    return (
        <View style={{height: '100%'}}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de tarefa(s)</Text>
            </View>
            {getLoading ?
                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                    <ActivityIndicator size='large' color='#3599cc' />
                    <Text style={{fontSize: 15, marginTop: 10, color: '#3599cc'}}>Carregando...</Text>
                </View>
            :
                <ScrollView style={styles.scrollView}>
                    {getAllItensList.length >= 1 ?
                        getAllItensList.map((item, index) => (
                            <View style={styles.taskContent} key={index}>
                                <Text style={{marginBottom: 2, marginTop: 2}}>• ID: <Text style={{fontWeight: 'bold'}}>{index}</Text></Text>
                                <Text style={{marginBottom: 2, marginTop: 2}}>• Titulo:  <Text style={{fontWeight: 'bold'}}>{item.title}</Text></Text>
                                <Text style={{marginBottom: 2, marginTop: 2}}>• Descrição:  <Text style={{fontWeight: 'bold'}}>{item.desc}</Text></Text>
                                <Text style={{marginBottom: 2, marginTop: 2}}>• Data:  <Text style={{fontWeight: 'bold'}}>{item.data}</Text></Text>
                                <View style={{ margin: 10 }}>
                                    <Button title='Editar' onPress={() => navigation.navigate('Editar Tarefa', {task: item, id: getID[index], element: index})} />
                                </View>
                                <View style={{ margin: 10 }}>
                                    <Button title='Excluir' onPress={() => deleteItemTask(getID[index])} />
                                </View>
                                {item.edited === true
                                ?
                                    <View style={{width: '35%', textAlign: 'center'}}>
                                        <Text style={{padding: 5, fontWeight: 'bold', borderRadius: 10, color: '#3599cc', marginTop: 10, backgroundColor: 'rgba(53, 153, 204, .2)'}}>Tarefa editada</Text>
                                    </View>
                                :
                                    <></>
                                }
                            </View>
                        ))
                    :
                        <View style={styles.container}>
                            <Text style={[styles.error, {padding: 10}]}>Não foi possivel encontrar nenhuma tarefa!</Text>
                        </View>
                    }
                </ScrollView>
            }
        </View>
    )
};

export default AllTasks;
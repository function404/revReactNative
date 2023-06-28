import React, { useState, useEffect } from 'react';

import { ScrollView, Text, View, Button } from 'react-native';

import { db } from '../config/firebase';
import { collection, query, getDocs, doc, deleteDoc } from 'firebase/firestore';

import { useNavigation } from '@react-navigation/native';

import styles from '../utils/style';

const AllTasks = () => {
    const [getAllItensList, setAllItensList] = useState([]);
    const [getID, setID] = useState([]);

    const navigation = useNavigation();

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
        queryAllItens();
    }, [getAllItensList]);

    return (
        <>
            <Text style={styles.title}>Lista de tarefas</Text>
            <ScrollView style={styles.container}>
                {getAllItensList.map((item, index) => (
                    <View style={styles.taskContent} key={index}>
                        <Text>• ID: {index}</Text>
                        <Text>• Titulo: {item.title}</Text>
                        <Text>• Descrição: {item.desc}</Text>
                        <Text>• Data: {item.data}</Text>
                        <View style={{marginBottom: 10, marginTop: 5}}>
                            <Button title='Editar' onPress={() => navigation.navigate('Editar Tarefa', {task: item, id: getID[index]})} />
                        </View>
                        <View>
                            <Button title='Excluir' onPress={() => deleteItemTask(getID[index])} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </>
    )
};

export default AllTasks;
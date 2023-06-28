import React, { useState, useEffect } from 'react';

import { ScrollView, Text, View } from 'react-native';

import { db } from '../config/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

import styles from '../utils/style';
import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const AllTasks = () => {
    const [getAllItensList, setAllItensList] = useState([]);

    const navigation = useNavigation();

    async function queryAllItens() {
        try{
            const allList = query(collection(db, 'tasks'));
            const queryAllResult = await getDocs(allList);

            const allNames = [];
            queryAllResult.forEach((doc) => {
                allNames.push(doc.data());
            });
            
            setAllItensList(allNames);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryAllItens();
    }, []);

    return (
        <>
            <Text style={styles.title}>Lista de tarefas</Text>
            <ScrollView style={styles.container}>
                {getAllItensList?.map((item, index) => (
                    <>
                        <View style={styles.taskContent} key={index}>
                            <Text key={index}>• ID: {index}</Text>
                            <Text key={index}>• Titulo: {item.title}</Text>
                            <Text key={index}>• Descrição: {item.desc}</Text>
                            <Text key={index}>• Data: {item.data}</Text>
                            <Button key={index} title='Editar' onPress={() => navigation.navigate('EditTask', { item })} />
                        </View>
                    </>
                ))}
            </ScrollView>
        </>
    )
};

export default AllTasks;
import React, { useState, useEffect } from 'react';

import { ScrollView, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

import { db } from '../config/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

import styles from '../utils/style';

const AllTasks = () => {
    const [getAllItensList, setAllItensList] = useState([]);

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
                            <Text>• ID: {index ?? 0}</Text>
                            <Text>• Titulo: {item.title}</Text>
                            <Text>• Descrição: {item.desc}</Text>
                            <Text>• Data: {item.data}</Text>
                        </View>
                    </>
                ))}
            </ScrollView>
        </>
    )
};

export default AllTasks;
import React, { useEffect, useState } from 'react';
import { 
        SafeAreaView
    ,   FlatList
    ,   Text
    ,   StyleSheet
    ,   StatusBar
    ,   TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            console.log(response)
            setRepositories(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('repositories', {
            title: `Novo repositório ${Date.now()}`
        });
        const repository = response.data;
        setRepositories([...repositories, repository])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c2"/>            
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={repositories}
                    keyExtractor={repository => repository.id}
                    renderItem={({ item: repository }) => (
                        <Text style={styles.project}> {repository.title} </Text>
                    )}
                />
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    project: {
        color: '#fff',
        fontSize: 30,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});
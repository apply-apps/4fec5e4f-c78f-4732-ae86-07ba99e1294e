// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input.trim() === '') return;
        setItems([...items, { id: Date.now().toString(), title: input }]);
        setInput('');
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Shopping List</Text>
            <TextInput
                style={styles.input}
                placeholder="Add new item"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Add" onPress={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
    },
    list: {
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
    },
    itemText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});
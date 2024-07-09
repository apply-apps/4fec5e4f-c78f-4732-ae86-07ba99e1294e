// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleAddItem = () => {
        if (text !== '') {
            setItems([...items, { key: Math.random().toString(), text }]);
            setText('');
        }
    };

    const handleRemoveItem = (key) => {
        setItems(items.filter(item => item.key !== key));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Shopping List</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a new item"
                value={text}
                onChangeText={setText}
            />
            <Button
                title="Add Item"
                onPress={handleAddItem}
            />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.text}</Text>
                        <TouchableOpacity onPress={() => handleRemoveItem(item.key)}>
                            <Text style={styles.removeItem}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 18,
    },
    removeItem: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
});
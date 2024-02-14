import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';

export default function TodoInput(props) {
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            props.onPress(text);
            setText('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.nativeEvent.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Escribe una tarea"
                onChangeText={setText}
                value={text}
                onSubmitEditing={handleAddTodo}
                onKeyPress={handleKeyPress}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddTodo}>
                <Text style={styles.addButtonText}>Añadir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderColor: '#212121',
        borderWidth: 1,
        borderRadius: 8,
    },
    addButton: {
        marginLeft: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#212121',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fafafa',
        fontWeight: 'bold',
    },
});

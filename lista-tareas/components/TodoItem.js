import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem(props) {
    const [completed, setCompleted] = useState(props.item.completed);

    const toggleCompleted = () => {
        setCompleted(!completed);
        props.completeFunction();
    };

    const itemClasses = [styles.itemText];
    if (completed) {
        itemClasses.push(styles.completed);
    } else {
        itemClasses.push(styles.pending);
    }

    return (
        <TouchableOpacity
            onPress={toggleCompleted}
            style={styles.itemContainer}>
            <Text style={itemClasses}>{props.item.text}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => props.deleteFunction()}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 5,
        margin: 5,
    },
    itemText: {
        fontSize: 18,
        color: '#333333',
        flex: 1,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888888',
    },
    pending: {
        textDecorationLine: 'none',
        color: '#333333',
    },
    deleteButton: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#FF6347',
        borderRadius: 5,
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

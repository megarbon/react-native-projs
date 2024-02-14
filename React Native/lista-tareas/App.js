import React, { useState } from 'react';
import { Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { text: "Aprender React Native", completed: true },
    { text: "Estudiar Comandos Neovim", completed: false },
    { text: "Dominar el Mundo", completed: false }
  ]);

  // Agregar un nuevo elemento al estado
  const addTodoItem = (text) => {
    setTodoItems([...todoItems, { text, completed: false }]);
  };

  // Eliminar un elemento del estado por índice
  const deleteTodoItem = (index) => {
    let tempArr = [...todoItems];
    tempArr.splice(index, 1);
    setTodoItems(tempArr);
  };

  // Marcar un elemento como completado por índice
  const completeTodoItem = (index) => {
    let tempArr = [...todoItems];
    tempArr[index].completed = true;
    setTodoItems(tempArr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />
      <Text style={styles.title}>Todo</Text>
      <ScrollView style={styles.listContainer}>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index.toString()}
            item={item}
            deleteFunction={() => deleteTodoItem(index)}
            completeFunction={() => completeTodoItem(index)}
          />
        ))}
      </ScrollView>
      <TodoInput onPress={addTodoItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderColor: '#E0E0E0',
      borderRadius: 8,
      padding: 5,
      margin: 5,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2C3E50',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    listContainer: {
      maxHeight: '60%', // Define el tamaño máximo del contenedor de la lista
      marginBottom: 20,
    },
  });

export default App;

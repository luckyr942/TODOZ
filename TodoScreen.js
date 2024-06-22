import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { uuid } from "react-native-uuid";
import Fallback from "../components/Fallback";

console.log(Date.now().toString());

const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo
  const handleAddTodo = () => {
    // sturtcure of a single todo item
    // {
    //  id:
    //  title:
    // }

    if (todo === "") {
      return; // early return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  // Handle Delete
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit todo

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  // Render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          // elevation: for android
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>

        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16, marginTop: 40 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#000",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Add
          </Text>
        </TouchableOpacity>
      )}

      {/* Render todo list */}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});












// import { StyleSheet, Text, View ,TextInput, TouchableOpacity, FlatList} from 'react-native'
// import React, { useState } from 'react'
// import {IconButton} from 'react-native-paper'
// import Fallback from '../components/Fallback'


// const dummyData=[{
//   id: 1,
//   title: "Learn React Native",
//   completed: false,
// },{
//   id: 2,
//   title: "Learn React",
//   completed: false,
// }]
// const TodoScreen = () => {

//   //Initialize local state for adding new tasks
//   const [todo, setTodo] = useState("");
//   const [todoList, setTodoList] = useState([])
//   const [editedTodo, setEdititedTodo] = useState(null)
  
//   //Handle Add Todo
//   const handleAddTodo=()=>{
//     //setTodo("")
//     //structure of a single todo items
//     //{
//     //id:
//     //title:
//     //}
//     setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
//     setTodo("");
//   };

//   //Handle Delete Todo
//   const handleDeleteTodo=(id)=>{
//     //either this or another method
//     //setTodoList(todoList.filter((todo)=>todo.id!==id))

//     const updatedTodoList = todoList.filter((todo)=>todo.id!==id)

//     setTodoList(updatedTodoList);
    
//   }

//   //Handle Edit Todo
//   const handleEditTodo=(todo)=>{
//     setEdititedTodo(todo);
//     setTodo(todo.title);

//   }


//   //Render the screen
//   const renderTodoz=({item, index}) => {
//     return(
//       <View style={{ borderWidth:2,
//         backgroundColor: "#1e90ff",
//         borderRadius: 6,
//         paddingVertical:8,
//         paddingHorizontal:6,
//         marginTop:20,
//         marginBottom:12,
//         flexDirection: "row",
//         alignItems: "center",
//         shadowColor: "#000",
//           shadowOffset: { width: 0, height: 10 },
//           shadowOpacity: 1,
//           shadowRadius: 3,
//           elevation: 5,
//       }}
//       key={index}>

        
//       <Text style={{
//         color:"#fff",
//         fontSize:20,
//         fontWeight: "800",  
//         flex:1,         
//       }}
//       >{item.title}
//       </Text>

//       <IconButton icon= "pencil" iconColor='#fff' onPress={()=>handleEditTodo(item)}/>
//       <IconButton icon= "trash-can" iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)}/>

//       </View>
//     )
//   }
//   return (
//     <View style = {{ marginHorizontal: 16}}>
//       {/* <Text> TODO APP</Text> */}
//         <TextInput style={{
//           marginTop: 50,
//           alignContent: 'center',
//           borderWidth:2,
//            borderColor: "1e90ff",
//            borderRadius: 6,
//            paddingVertical: 12,
//            paddingHorizontal: 16,
//         }}
//         placeholder='Add tasks to get started'
        
//         value={todo}
//         onChangeText={(userText)=>setTodo(userText)}

//          />
//       <TouchableOpacity 
//       style ={{
//         backgroundColor: "#000",
//         borderRadius: 6, 
//         paddingVertical: 8,
//         marginVertical: 34,
//         // marginTop: 24,
//         alignItems: "center",

//       }}
//       onPress={()=>handleAddTodo()}

      
      
//       >
//         <Text style={{
//           color: "#fff", fontWeight: "bold", fontSize: 20,textAlign: "center",
//         }}>
//           Add</Text>
//       </TouchableOpacity>

//       {/* Render todo list means display*/}

//       <FlatList data = {todoList} renderItem = {renderTodoz}></FlatList>

//       {
//         todoList.length <=0 && <Fallback/>
//       }
      
//     </View>
//   )
// }

// export default TodoScreen

// const styles = StyleSheet.create({});
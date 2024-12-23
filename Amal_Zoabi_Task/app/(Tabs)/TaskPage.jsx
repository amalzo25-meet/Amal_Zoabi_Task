import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { TextInput } from 'react-native';

const DisplayTask = ({TASKVAL, handlePress}) => {
    return (


        <View style={{backgroundColor: 'white',  
            borderWidth: 1, 
            borderColor: 'rgb(254, 192, 192)',  
            borderRadius: 5,  
            padding: 10,  
            marginBottom: 10,
             width: '80%'
            }}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>

        <Text style={{ marginRight: 50, fontWeight: 'bold'}}>{TASKVAL}</Text>

        <TouchableOpacity style={{backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginLeft: 'auto',}} 
        onPress={handlePress}>
        <Text style={{fontWeight:'bold', color:'rgb(255, 207, 207)'}}>Remove</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

const TaskPage = () => {
    const navigation = useNavigation();
    const [Task, setTask] = useState([]);
    const [CurrentTask, setCurrentTask] = useState('');
    const [showTask, setShowTask] = useState(false);

    const handleAddTask = () => {
        if (CurrentTask.trim() !== '') { 
            setTask([...Task, CurrentTask]); 
            setCurrentTask(''); 
            setShowTask(true); 
        }
    };

    const handleRemoveTask = (taskToRemove) => {
        const updatedTasks = Task.filter((task) => task !== taskToRemove);
        setTask(updatedTasks);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Task Manager</Text>
            <ScrollView>
            <View style={styles.TextView}>
            <TextInput style={styles.input} 
            placeholder="Enter Your Task Here" 
            placeholderTextColor={'grey'}
            value={CurrentTask} 
            onChangeText={(text)=> {setCurrentTask(text)}}/>

            <TouchableOpacity 
            style={[styles.button, { marginBottom: 20 }]} 
            onPress={handleAddTask}>
            <Text style={{fontWeight:'bold', color:'rgb(254, 192, 192)', textAlign: 'center'}}>SET TASK</Text>
            </TouchableOpacity>

            {showTask && <>
                {Task.map((task, index) => (
                    <DisplayTask key={index} 
                    TASKVAL={task} 
                    handlePress={()=> handleRemoveTask(task)}/>
                     ))}</>}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
            <TouchableOpacity style={{backgroundColor: 'red',
            padding: 10,
            borderRadius: 10,
            marginTop: 10
        }}
            onPress={()=> setTask([])}><Text 
            style={{fontWeight:'bold', color:'rgb(255, 207, 207)'}}>Remove All Tasks</Text></TouchableOpacity>
            </View>

            <Button style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate('Home')}>
            <Text style={{fontWeight:'bold', color:'rgb(254, 192, 192)'}}>Go to Home Page</Text>
            </Button>
            </View>
            </ScrollView>
        </View>
    )  
}
export default TaskPage

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'lightyellow',
        display: 'flex',
        flex: 1,
    },
      button: {
        backgroundColor: 'maroon',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 200, 
        height: 50,
        },
        inputContainer: {
            alignSelf: 'center',
            width: 300, 
          },
          input: {
            backgroundColor: 'white',
            height: 40,
            marginBottom: 12,
            borderWidth: 1,
            height: 48,
            maxHeight: 48,
            width: '90%',
            maxWidth: '90%',
            paddingVertical: 10,
            paddingLeft: 10,
            paddingRight: 30,
            borderRadius: 5
            },
      header: {
        color: 'rgb(81, 80, 80)',
        fontWeight: 'bold', 
        fontSize: 25,
        marginBottom: 50,
        marginTop: 100,
        marginLeft: 20
      },
      subheader: {
        color: 'black',
        fontWeight: 'bold', 
        fontSize: 20,
        margin: 20
      },
      TextView: {
        alignItems: 'center',
        justifyContent: 'center'
      }
  })
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { TextInput } from 'react-native';

const DisplayTask = ({TASKVAL, handlePress}) => {
    return (

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <Text>{TASKVAL}</Text>

        <TouchableOpacity style={{backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginLeft: 'auto',}} 
        onPress={handlePress}>
        <Text>Remove</Text>
        </TouchableOpacity>
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
            <ScrollView>
            <TextInput style={styles.input} 
            placeholder="Enter Your Task Here" 
            placeholderTextColor={'grey'}
            value={CurrentTask} 
            onChangeText={(text)=> {setCurrentTask(text)}}/>

            <TouchableOpacity 
            style={[styles.button, { marginBottom: 20 }]} 
            onPress={handleAddTask}>
            <Text style={{color:'white',textAlign: 'center'}}>SET TASK</Text>
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
            borderRadius: 5,
        }}
            onPress={()=> setTask([])}><Text>Remove All Tasks</Text></TouchableOpacity>
            </View>

            <Button style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate('Home')}>
            <Text style={{color:'white'}}>Go to Home Page</Text>
            </Button>

            </ScrollView>
        </View>
    )  
}
export default TaskPage

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'rgb(254, 192, 192)',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        height: 48,
        maxHeight: 48,
        width: 300,
        maxWidth: 300,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 30
        },
  })
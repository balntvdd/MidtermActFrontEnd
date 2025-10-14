import React from 'react';
import { View, Text, Pressable } from 'react-native'; // IMPORTANT: Pressable is imported
import Styles from '../styles.js';

export default function Homepage({navigation}) {
    return (

        <View style={Styles.container}> 
         
            <Text style={Styles.headerText}>Welcome!</Text> 

           
            <Pressable
                style={Styles.buttonWrapper} 
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={Styles.buttonText}>Register</Text>
            </Pressable>

          
            <Pressable
                style={Styles.buttonWrapper} 
                onPress={() => navigation.navigate('UserList')}
            >
                <Text style={Styles.buttonText}>View Users</Text>
            </Pressable>

        </View>
    );
    
}
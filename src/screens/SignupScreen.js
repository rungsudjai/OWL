import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignupScreen = ({navigation}) =>{
    // State สำหรับจัดการข้อมูล username และ password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // ตัวอย่างการตรวจสอบข้อมูลเบื้องต้น
        if (username === 'admin' && password === 'password') {
            Alert.alert('Login Successful', `Welcome ${username}`);
            // นำทางไปหน้าอื่นเมื่อเข้าสู่ระบบสำเร็จ เช่นหน้า Home
            // navigation.navigate('Home');
        } else {
            Alert.alert('Login Failed', 'Invalid username or password');
        }
    };

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#02575C',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default SignupScreen;
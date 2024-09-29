import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = ({ navigation }) => {
    // State สำหรับจัดการข้อมูล username และ password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [selectedValue, setSelectedValue] = useState("java"); // ค่าเริ่มต้น


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

    return (
        <View style={styles.container}>
            {/* <TextInput
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
            </TouchableOpacity> */}
            <Text style={{ color: '#274B57', fontSize: 64, width: '90%', marginBottom: 20 }}>
                Sign Up
            </Text>

            <Text style={styles.lableText}>
                ชื่อ - นามสกุล
            </Text>
            <TextInput
                style={styles.input}
                placeholder='ชื่อ-นามสกุล'
            />

            <Text style={styles.lableText}>
                คณะ
            </Text>
            <TextInput
                style={styles.input}
                placeholder='คณะ'
            />

            <Text style={styles.lableText}>
                ชั้นปี
            </Text>
            {/* <TextInput
                style={styles.input}
                placeholder='ชั้นปี'
            /> */}
            <View style={styles.dropdownContainer}>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 1" value="1" />
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 2" value="2" />
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 3" value="3" />
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 4" value="4" />
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 5" value="5" />
                    <Picker.Item style={styles.textPicker} label="ชั้นปีที่ 6" value="6" />
                </Picker>
            </View>


            <Text style={styles.lableText}>
                เพศ
            </Text>
            {/* <TextInput
                style={styles.input}
                placeholder='เพศ'
            /> */}
            <View style={styles.dropdownContainer}>
                <Picker
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item style={styles.textPicker} label="ชาย" value="0" />
                    <Picker.Item style={styles.textPicker} label="หญิง" value="1" />
                    <Picker.Item style={styles.textPicker} label="ไม่ระบุ" value="2" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup2')}>
                <Text style={styles.buttonText}>
                    Next
                </Text>
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
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
        padding: 5,
        borderWidth: 1,
        borderColor: '#274B57',
        borderRadius: 0,
        marginBottom: 10,
        backgroundColor: '#D9D9D9',
    },
    button: {
        width: '70%',
        padding: 15,
        backgroundColor: '#D9D9D9',
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50
    },
    buttonText: {
        fontSize:24,
        color:'#274B57'
    },
    lableText: {
        color: '#274B57',
        fontSize: 16,
        width: '90%',
        // borderWidth:2, 
        // borderColor:"#274B57"
    },
    picker: {
        height: 'auto',
        width: 'auto',
    },
    dropdownContainer: {
        width: '90%',
        padding: 0,
        marginTop: 0,
        borderWidth: 1,             // ความหนาของขอบของ Dropdown
        borderColor: '#274B57',        // สีของขอบ
        backgroundColor: '#D9D9D9',
        borderRadius: 0,            // มุมโค้งของขอบ
        overflow: 'hidden',          // ป้องกันไม่ให้มีเนื้อหาออกนอกขอบ
        marginBottom: 10,           // ระยะห่างจากปุ่ม
    },
    textPicker: {
        fontSize: 16
    }
})

export default SignupScreen;
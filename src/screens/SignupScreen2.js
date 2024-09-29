import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignupScreen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#274B57', fontSize: 64, width: '90%', marginBottom: 20 }}>
                Sign Up
            </Text>

            <TouchableOpacity style={styles.buttonImage}>
                <Text style={styles.buttonTextImage}>
                    เลือกรูปโปรไฟล์
                </Text>
            </TouchableOpacity>

            <Text style={styles.lableText}>
                ชื่อผู้ใช้งาน
            </Text>
            <TextInput
                style={styles.input}
                placeholder=''
            />

            <TouchableOpacity style={styles.button}>
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
    buttonImage: {
        width: '60%',
        padding: 15,
        backgroundColor: '#274B57',
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 50
    },
    buttonTextImage: {
        fontSize: 16,
        color: '#E2F397'
    },
    lableText: {
        color: '#274B57',
        fontSize: 16,
        width: '90%',
        // borderWidth:2, 
        // borderColor:"#274B57"
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
})

export default SignupScreen2;
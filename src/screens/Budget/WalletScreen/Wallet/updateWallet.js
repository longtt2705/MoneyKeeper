import { black } from 'chalk';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { backgroundColor, primaryColor, Colors, textColorOnLightBg, inactiveColor } from "../../../../api/constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateWallet } from '../../../../redux/slices/walletsSlice';


export default function UpdateWallet({ navigation, walletId }) {

    const dispath = useDispatch();
    const wallets = useSelector(state => state.wallets).wallets;
    const element = wallets.filter(e => e.id === walletId)[0]

    const [nameWallet, setNameWallet] = useState(element.title)
    const handleNameWallet = (name) => {
        setNameWallet(name)
    }

    const [balance, setBalance] = useState(element.balance)
    const handleBalance = (balance) => {
        setBalance(balance)
    }

    const [note, setNote] = useState(element.note)
    const handleNote = (note) => {
        setNote(note)
    }


    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.element}>
                    <View style={styles.nameCate}>
                        <View style={styles.icon}>

                        </View>
                        <View >
                            <Text style={styles.name}>
                                Name of Budget:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={nameWallet}
                            style={styles.input}
                            onChangeText={
                                (text) => handleNameWallet(text)
                            }
                        />
                    </View>
                </View>
                <View style={styles.element}>
                    <View style={styles.nameCate}>
                        <View style={styles.icon}>

                        </View>
                        <View >
                            <Text style={styles.name}>
                                Balance of Budget:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={balance.toString()}
                            style={styles.input}
                            onChangeText={
                                (text) => handleBalance(parseInt(text))
                            }
                        />
                    </View>
                </View>
                <View style={styles.element}>
                    <View style={styles.nameCate}>
                        <View style={styles.icon}>

                        </View>
                        <View >
                            <Text style={styles.name}>
                                Note:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={note}
                            style={styles.input}
                            onChangeText={
                                (text) => handleNote(text)
                            }
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonCotainer}>
                <TouchableOpacity 
                style={styles.saveButton}
                onPress={()=>{
                    dispath(updateWallet({walletId:element.id,title:nameWallet,balance:balance,note:note}))
                    navigation.goBack()
                }}
                >
                    <Text style={styles.saveText}>
                        Save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.delButton}
                onPress={
                    ()=>{
                        navigation.goBack()
                    }
                }
                >
                    <Text style={styles.delText}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#fff"
    },
    container: {
        backgroundColor: "#fff",
    },
    element: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        marginBottom: 10

    },
    icon: {
        backgroundColor: "#000",
        height: 50,
        width: 50,
        marginLeft: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    nameCate: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 17
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 10,
    },
    input: {
        borderWidth: 0.5,
        width: "80%",
        height: 35,
        borderRadius: 10,
        textAlign: "center"
    },
    buttonCotainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignContent:"center",
        marginTop:20
    },
    saveButton:{
        alignContent: 'center',
        color: "#fff",
        fontSize: 14,
        backgroundColor: Colors[51],
        height: 40,
        width: '40%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: "center"
    },
    saveText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },
    delButton:{
        alignContent: 'center',
        color: "#fff",
        fontSize: 14,
        backgroundColor: Colors[52],
        height: 40,
        width: '40%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: "center"
    },
    delText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },
})
import { black } from 'chalk';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";
import { useDispatch } from 'react-redux';
import { addWallet } from '../../../../redux/slices/walletsSlice';

export default function AddWallet({ navigation, chooseType }) {
    const [balance, setBalance] = useState(0);
    const [nameWallet, setNameWallet] = useState('');
    const [note, setNote] = useState("");
    const noteText = (note.length !== 0) ? ("") : (balance);

    const handleBalance = (balance) => {
        setBalance(balance);
    }

    const handleNameWallet = (name) => {
        setNameWallet(name);
    }

    const handleNote = (note) => {
        setNote(note);
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addWallet(nameWallet,chooseType,balance,noteText))
    }

    return (
        <View>
            <View style={styles.bg}>
                <View style={styles.itemContainer}>
                    <View style={styles.initalBalance}>
                        <Text style={styles.initalBalanceText}>Inital balance</Text>
                        <View style={styles.inputText}>
                            <TextInput
                                placeholder="0"
                                style={styles.myInput}
                                onChangeText={(text) => {
                                    handleBalance(parseInt(text))
                                }}
                            />
                            <Text style={styles.d}>đ</Text>
                        </View>
                    </View>
                    <View style={styles.strainghtIni}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <TextInput
                            placeholder="Name of Budget"
                            style={{ fontSize: 18 }}
                            onChangeText={(text) => {
                                handleNameWallet(text)
                            }}
                        />
                    </View>
                    <View style={styles.strainght}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <View style={styles.chooseType}>
                            <Text style={styles.typeOfBudgets}>
                                {chooseType}
                            </Text>
                            <TouchableOpacity style={styles.chooseTypeMore}
                                onPress={() =>
                                    navigation.navigate('chooseTypeBudget')}
                            ></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.strainght}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <TextInput
                            placeholder="Note"
                            style={{ fontSize: 18 }}
                            onChangeText={(text) => {
                                handleNote(text)
                            }}
                        />
                    </View>
                    <View style={styles.strainght}></View>
                </View>

            </View>
            <View style={styles.buttonCotainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        handleSubmit();
                        navigation.goBack();
                    }
                    }
                >
                    <Text style={styles.buttonName}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
    },
    Cate: {
        height: 40,
        backgroundColor: primaryColor,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },
    nameCate: {
        fontSize: 20,
        color: "white",
    },
    icon: {
        height: 50,
        width: 50,
        marginRight: 30,
        backgroundColor: "yellow",
    },
    itemContainer: {
        flexDirection: "column",
        marginBottom: 20,
        marginTop: 5
    },
    item: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    strainght: {
        borderWidth: 0.5,
        borderColor: Colors[50],
        width: '70%',
        marginLeft: 80,
        marginTop: 0,
    },
    nameWallet: {
        fontSize: 17
    },
    buttonCotainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 50
    },
    buttonName: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },
    saveButton: {
        alignContent: 'center',
        color: "#fff",
        fontSize: 14,
        backgroundColor: backgroundColor,
        height: 35,
        width: '50%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: "center"
    },
    initalBalance: {
        display: "flex",
        flexDirection: "column"
    },
    inputText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 25,
    },
    d: {
        fontSize: 18
    },
    initalBalanceText: {
        marginLeft: 20,
        fontSize: 18
    },
    strainghtIni: {
        borderWidth: 0.5,
        borderColor: Colors[50],
        width: '85%',
        marginLeft: 20,
        marginTop: 0,
    },
    typeOfBudgets: {
        fontSize: 18,
        color: 'black',
    },
    chooseType: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '70%',
    },
    chooseTypeMore: {
        height: 40,
        width: 40,
        backgroundColor: "yellow"
    },
    myInput: {
        fontSize: 25, 
        width: "92%", 
        textAlign:"right"
    }



});
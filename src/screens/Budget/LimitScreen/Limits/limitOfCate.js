import React from 'react';
import { StyleSheet, Text, View, Button, Navigator, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";
import AddLimitOfCate from './addLimitOfWallet';
import { useSelector } from 'react-redux';
import { isConstructorDeclaration } from 'typescript';



export default function LimitOfCategory({ navigation }) {
    const listOfCate = useSelector(state => state.categories)
    const limitCate = listOfCate.filter(e => e.limit !== null);
    return (
        <View style={styles.bg}>
            <View style={styles.Cate}>
                <Text style={styles.nameCate}>
                    Limit of Category
                </Text>
            </View>
            {
                limitCate.map((element) => {
                    return (
                        <ScrollView>
                            <View style={styles.container}>
                                <Text style={styles.icon}>
                                    abc
                                </Text>
                                <View style={styles.nameDate}>
                                    <Text style={styles.nameCategory}>
                                        {element.title}
                                    </Text>
                                    <Text style={styles.date}>
                                        01/05-02/06
                                    </Text>
                                </View>
                                <Text style={styles.money}>
                                    {element.limit} VND
                                </Text>
                            </View>
                        </ScrollView>
                    )
                })
            }

            <View style={styles.buttonCotainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("addLimitCate")
                    }}
                >
                    <Text style={styles.buttonName}>
                        Add Limit
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: Colors[50],
    },
    Cate: {
        height: 50,
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",

    },
    nameCate: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 70,
        marginTop: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent:"space-around"
    },
    nameDate: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 70,

    },
    money: {
        fontSize: 18,
        marginTop: 7,
        fontWeight: "bold"
    },
    nameCategory: {
        fontSize: 18,
        fontWeight: "bold"
    },
    date: {
        fontSize: 10,
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
    },
    button: {
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
        justifyContent: "center",
        marginTop: 10
    },
    buttonName: {
        color: 'white',
        fontSize: 20,
    },
    buttonCotainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 8
    },
    icon: {
        height: 50,
        width: 50,
        backgroundColor: "black",
        marginLeft: 16,
        marginRight: 50
    },

});

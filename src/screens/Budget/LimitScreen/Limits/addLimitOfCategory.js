import { black } from 'chalk';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";


export default function AddLimitOfCate({ navigation }) {
    return (
        <View>
            <View style={styles.bg}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <TextInput
                            placeholder="Enter Limit"
                        />
                    </View>
                    <View style={styles.strainght}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View>
                        <View style={styles.item}>
                            <View style={styles.iconCate}>
                            </View>
                            <Text style={styles.textChooseCate}>
                                Choose Category:
                            </Text>
                        </View>
                        <View style={styles.listCate}>
                            <View style={styles.listRow}>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>
                            </View>
                            <View style={styles.listRow}>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>
                                <View style={styles.cateElement}></View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.strainght}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <View>
                            <Text style={styles.dateStart}>Date start</Text>
                            <Text>
                                16/05/2021
                            </Text>
                        </View>
                    </View>
                    <View style={styles.strainght}></View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.icon}></View>
                        <Text style={styles.dayEnd}>Day end</Text>
                    </View>
                    <View style={styles.strainght}></View>
                </View>

            </View>
            <View style={styles.buttonCotainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        navigation.navigate("limit")
                    }}
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
    chooseWallet: {
        height: 20,
        width: 20,
        backgroundColor: "yellow",
        marginLeft: 140
    },
    dateStart: {
        color: Colors[50],
        fontSize: 12,
        marginTop: -5
    },
    dayEnd: {
        color: Colors[50],
        fontSize: 17,
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
        fontWeight:"bold"
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
    iconCate: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        marginRight: 30
    },
    textChooseCate: {
        fontSize: 17,
    },
    listCate: {
        display: "flex",
        flexDirection: "column",

    },
    cateElement: {
        width: 40,
        height: 40,
        backgroundColor: "yellow"
    },
    listRow: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
        marginTop: 10
    }
});
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";
import { useSelector } from 'react-redux'

export default function Wallet({ navigation }) {

    const listWallet = useSelector(state => state.wallets).wallets

    return (
        <View style={styles.container}>
            <Text style={styles.listBudget}>
                List of Budgets
            </Text>
            {
                listWallet.map((element,index) => {
                    return (
                        <ScrollView>
                            <View style={styles.wallet}>
                                <View style={styles.iconBudget}>
                                    <Text>
                                        icon
                                    </Text>
                                </View>
                                <View style={styles.nameKind}>
                                    <Text style={styles.nameBudget}>
                                        {element.name}
                                    </Text>
                                    <View style={styles.kindOfBudget}>
                                        <View style={styles.iconKindOfBudget}>
                                        </View>
                                        <Text style={styles.nameKindofBudget}>
                                            {element.title}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.money}>
                                    <Text style={styles.valueOfMoney}>
                                        {element.balance} VND
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
                )}


            <View style={styles.buttonCotainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("addWallet")
                    }}
                >
                    <Text style={styles.buttonName}>
                        Add Budget
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors[50],
    },
    listBudget: {
        height: 40,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        textAlign: 'center',
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    wallet: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 5,
        justifyContent:"space-around"
    },
    iconBudget: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        marginLeft: 16
    },
    nameKind: {
        width: 200,
        display: 'flex',
        flexDirection: "column",
    },
    nameBudget: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    },
    kindOfBudget: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconKindOfBudget: {
        height: 20,
        width: 20,
        backgroundColor: "yellow",
        marginRight: 5,
    },
    nameKindofBudget: {
        fontSize: 12,
        color: 'gray',
        fontWeight: "bold"
    },
    money: {
        display: 'flex',
        textAlign: "center",
        justifyContent: "center",
        marginLeft: 20,
    },
    valueOfMoney: {
        fontSize: 16,
        fontWeight: "bold"
    },
    button: {
        alignContent: 'center',
        color: "#fff",
        fontSize: 14,
        backgroundColor: backgroundColor,
        height: 35,
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonName: {
        color: 'white',
        fontSize: 20,
    },
    buttonCotainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 8,
        marginTop: 5
    },
});
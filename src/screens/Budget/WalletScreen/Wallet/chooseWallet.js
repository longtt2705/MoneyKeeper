import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";
import { useSelector } from 'react-redux';

export default function ChooseWallet({ navigation,setWalletId }) {
    const listWallet = useSelector(state => state.wallets).wallets
    const listOfLimit=listWallet.filter(e=>e.limit===null)
    return (
        <ScrollView>
            {
                listOfLimit.map((element,index) => {
                    return (
                        <TouchableOpacity style={styles.container}
                        onPress={()=>{
                            setWalletId(element.id);
                            navigation.goBack();
                        }}
                        >
                            <View style={styles.wallet}>
                                <View style={styles.iconBudget}>
                                    <Text>
                                        icon
                                    </Text>
                                </View>
                                <View style={styles.nameKind}>
                                    <Text style={styles.nameBudget}>
                                        {element.title}
                                    </Text>
                                   
                                </View>
                                <View style={styles.money}>
                                    <Text style={styles.valueOfMoney}>
                                        {element.balance} VND
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors[50],
        height: "40%"
    },
    wallet: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 15,
        justifyContent: "space-around"
    },
    iconBudget: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        marginLeft: 15
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
});
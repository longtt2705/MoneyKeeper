import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView,Image } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";
import { useSelector } from 'react-redux';

export default function ChooseCate({ navigation, setCateId }) {
    const listCate = useSelector(state => state.categories)
    const catenoNull = listCate.filter(e => e.limit === null)
    if (catenoNull === undefined) {
        return (
            <View>
                <Text>
                    Tat ca cac danh muc da co gioi han
                </Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                {
                    catenoNull.map((element, index) => {
                        return (
                            <TouchableOpacity 
                            style={styles.container}
                            key={element.id}
                                onPress={() => {
                                    setCateId(element.id)
                                    navigation.goBack();
                                }}
                            >
                                <View style={styles.wallet}>
                                    <Image
                                    source={element.icon}
                                    style={styles.iconBudget}
                                    />
                                    <View style={styles.nameKind}>
                                        <Text style={styles.nameBudget}>
                                            {element.title}
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

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors[50],
        height: 65
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
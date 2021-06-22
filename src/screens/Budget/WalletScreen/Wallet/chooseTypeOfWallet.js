import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { backgroundColor, primaryColor, Colors } from "../../../../api/constants";

export default function ChooseTypeOfBudget({ navigation,setChooseType}) {

    const listType = ['Cash', 'Account of bank', 'Credit Card', 'Other']
    return (
        <ScrollView style={styles.container}>
            <View style={styles.listOfType}>
                {
                    listType.map((element, index) => {
                        return (
                            <View>
                                <View style={styles.item}>
                                    <TouchableOpacity 
                                    style={styles.type}
                                    onPress={()=>{
                                        setChooseType(element);
                                        navigation.goBack();
                                    }}
                                    >
                                        <View style={styles.iconType}>
                                            <Text>
                                                icon
                                            </Text>
                                        </View>
                                        <Text style={styles.typeOfBudget}>
                                            {element}
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={styles.straight}></View>
                                </View>
                            </View>
                        )

                    })
                }


            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors[50],
        marginTop: 20,
        height: "40%"
    },
    listBudget: {
        height: 40,
        backgroundColor: primaryColor,
        alignItems: 'center',
        textAlign: 'center',
        color: "white",
        fontSize: 25,
    },
    type: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 15
    },
    iconType: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        marginLeft: 5
    },
    typeOfBudget: {
        fontSize: 18,
        width: "70%",
        marginLeft: 20
    },
    straight: {
        width: '70%',
        borderWidth: 0.5,
        marginLeft: 70,
        marginTop: -15,
        borderColor: Colors[50]
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "white",
        height: 80,
        marginTop: 5,
        marginBottom: 15
    },
    listOfType: {
        backgroundColor: "white"
    }
});
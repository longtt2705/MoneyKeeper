import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { backgroundColor, primaryColor, Colors, textColorOnLightBg, inactiveColor } from "../../../../api/constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import moment from "moment";
import { updateWallet } from '../../../../redux/slices/walletsSlice';

export default function AddLimitOfWallet({ navigation, walletId }) {
    const wallet = useSelector(state => state.wallets).wallets;
    const nameWallet = wallet.filter(e => e.id == walletId)[0];


    const [input, setInput] = useState(0);

    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [showDatePicker2, setShowDatePicker2] = useState(false);

    const [datestart, setDateStart] = useState(new Date());
    const [dateend, setDateEnd] = useState(new Date());

    const hideDatePicker1 = () => {
        setShowDatePicker1(false);
    };

    const hideDatePicker2 = () => {
        setShowDatePicker2(false);
    };

    const handleConfirmDayStart = (datestart) => {
        setDateStart(datestart);
        hideDatePicker1();
    };

    const handleConfirmDayEnd = (dateend) => {
        setDateEnd(dateend);
        hideDatePicker2();
    };

    const openDatePicker1 = () => {
        setShowDatePicker1(true);
    };

    const openDatePicker2 = () => {
        setShowDatePicker2(true);
    };

    const dispatch = useDispatch();

    if (nameWallet === null) {
        return (
            <View>
                <Text>
                    Tất cả các ví đã có giới hạn
                </Text>
            </View>
        )
    }
    else {
        return (
            <View>
                <View style={styles.bg}>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <View style={styles.icon}></View>
                            <TextInput
                                placeholder="Enter Limit"
                                onChangeText={text => setInput(parseInt(text))}
                            />
                        </View>
                        <View style={styles.strainght}></View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <View style={styles.icon}></View>
                            <Text style={styles.nameWallet}>
                                {nameWallet.title}
                            </Text>
                            <View style={styles.chooseWallet}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('chooseWallet')
                                    }

                                    }
                                >
                                    <Text>
                                        a
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.strainght}></View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <View style={styles.icon}></View>
                            <View>
                                <Text style={styles.dateStart}>Date start</Text>
                                <View
                                    style={[
                                        styles.input,
                                        styles.active,
                                        {
                                            justifyContent: "center",
                                            alignItems: "center",
                                        },
                                    ]}
                                >
                                    <Text style={{ fontSize: 20 }} onPress={openDatePicker1}>
                                        {moment(datestart).format("DD/MM/YYYY")}
                                    </Text>
                                </View>

                                <DateTimePickerModal
                                    isVisible={showDatePicker1}
                                    mode="date"
                                    onConfirm={handleConfirmDayStart}
                                    onCancel={hideDatePicker1}
                                    display="spinner"
                                    style={{ color: "#000" }}
                                />
                            </View>
                        </View>
                        <View style={styles.strainght}></View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <View style={styles.icon}></View>
                            <View>
                                <Text style={styles.dateStart}>Date end</Text>
                                <View
                                    style={[
                                        styles.input,
                                        styles.active,
                                        {
                                            justifyContent: "center",
                                            alignItems: "center",
                                        },
                                    ]}
                                >
                                    <Text style={{ fontSize: 18 }} onPress={openDatePicker2}>
                                        {moment(dateend).format("DD/MM/YYYY")}
                                    </Text>
                                </View>

                                <DateTimePickerModal
                                    isVisible={showDatePicker2}
                                    mode="date"
                                    onConfirm={handleConfirmDayEnd}
                                    onCancel={hideDatePicker2}
                                    display="spinner"
                                    style={{ color: "#000" }}
                                />
                            </View>
                        </View>
                        <View style={styles.strainght}></View>
                    </View>

                </View>
                <View style={styles.buttonCotainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => {
                            dispatch(updateWallet({
                                walletId: nameWallet.id,
                                limit: input,
                                datestart: moment(datestart).format("DD/MM/YYYY"),
                                dateend: moment(dateend).format("DD/MM/YYYY")
                            }))
                            navigation.goBack()
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
        marginLeft: 15
    },
    itemContainer: {
        flexDirection: "column",
        marginBottom: 20,
        marginTop: 5
    },
    item: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
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
    input: {
        color: textColorOnLightBg,
        backgroundColor: inactiveColor,
        borderColor: "#707070",
        borderRadius: 5,
        fontSize: 20,
        flex: 1,
        height: 40,
    },
    active: {
        backgroundColor: "#fff",
    },

});
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,Image } from 'react-native';
import { backgroundColor, primaryColor, Colors, textColorOnLightBg, inactiveColor } from "../../../../api/constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import moment from "moment";
import { updateCate } from '../../../../redux/slices/categoriesSlice';
import icons from '../../../../api/icons';

export default function UpdateLimitOfCategory({ navigation, idCateLimit }) {
    const categories = useSelector(state => state.categories);
    const cateLimit = categories.filter(e => e.id == idCateLimit)[0];

    if (cateLimit !== undefined) {
        const [limitBalance, setLimitBalance] = useState(cateLimit.limit)
        const handlelimitBalance = (limit) => {
            setLimitBalance(limit)
        }

        const [showDatePicker1, setShowDatePicker1] = useState(false);
        const [showDatePicker2, setShowDatePicker2] = useState(false);

        const [datestart, setDateStart] = useState(cateLimit.datestart);
        const [dateend, setDateEnd] = useState(cateLimit.dateend);

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

        return (
            <View >
                <View style={styles.container}>
                    <View style={styles.nameContainer}>
                        <Image
                        source={icons.categories}
                        style={styles.icon}
                        />
                        <View>
                            <Text style={styles.nameCate}>
                                Name of Cate:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            editable={false}
                            selectTextOnFocus={false}
                            value={cateLimit.title}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.nameContainer}>
                        <Image
                        source={icons.balance}
                        style={styles.icon}
                        />
                        <View>
                            <Text style={styles.nameCate}>
                                Balance of Limit
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={limitBalance.toString()}
                            style={styles.input}
                            onChangeText={(text) => {
                                handlelimitBalance(parseInt(text))
                            }}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.nameContainer}>
                        <Image
                        source={icons.calendar1}
                        style={styles.icon}
                        />
                        <View>
                            <Text style={styles.nameCate}>
                                Date start:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
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
                <View style={styles.container}>
                    <View style={styles.nameContainer}>
                        <Image
                        source={icons.calendar1} 
                        style={styles.icon}
                        />
                        <View>
                            <Text style={styles.nameCate}>
                                Date end:
                            </Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
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
                            <Text style={{ fontSize: 20 }} onPress={openDatePicker2}>
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
                <View style={styles.buttonCotainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => {
                            dispatch(updateCate({
                                cateId: idCateLimit,
                                limit: limitBalance,
                                datestart: moment(datestart).format("DD/MM/YYYY"),
                                dateend: moment(dateend).format("DD/MM/YYYY")
                            }))
                            navigation.goBack()
                        }}
                    >
                        <Text style={styles.saveText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.delButton}
                        onPress={() => {
                            dispatch(updateCate({
                                cateId: idCateLimit,
                                limit: null,
                                datestart: null,
                                dateend: null
                            }))
                            navigation.goBack()
                        }
                        }
                    >
                        <Text style={styles.delText}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    else {
        return (
            <View></View>
        )
    }


}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10
    },
    nameContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 7,
        alignItems: "center"
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 15
    },
    nameCate: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 15
    },
    inputContainer: {
        alignItems: "center",
        marginTop: 5
    },
    input: {
        width: "70%",
        borderWidth: 0.5,
        height: 31,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 10
    },
    buttonCotainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        marginTop: 20
    },
    saveButton: {
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
    saveText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    },
    delButton: {
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
    delText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    },
});
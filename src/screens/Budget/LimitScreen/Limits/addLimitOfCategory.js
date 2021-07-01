import { black } from 'chalk';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { backgroundColor, primaryColor, Colors, textColorOnLightBg, inactiveColor } from "../../../../api/constants";
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { updateCate } from '../../../../redux/slices/categoriesSlice';
import icons from '../../../../api/icons';


export default function AddLimitOfCate({ navigation,cateId }) {

    const categories = useSelector(state => state.categories);
    const cate = categories.filter(e => e.id==cateId)[0];
    
    const dispatch = useDispatch()
    const [showDatePicker1, setShowDatePicker1] = useState(false);
    const [showDatePicker2, setShowDatePicker2] = useState(false);
    const [limit, setlimit] = useState(0);
    const handleLimit = (limit) => {
        setlimit(limit)
    }

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

    if (!cate) {
        return (
            <View>
                <Text> Tat ca ca danh muc deu co gioi han chi tieu</Text>
            </View>
        )
    } else {
        return (
            <View>
                <View style={styles.bg}>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Image
                                source={icons.money}
                                style={styles.icon}
                            />
                            <TextInput
                                keyboardType="number-pad"
                                placeholder="Enter Limit"
                                onChangeText={(text) => {
                                    handleLimit(parseInt(text))
                                }}
                            />
                        </View>
                        <View style={styles.strainght}></View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View>
                            <View style={styles.item}>
                                <Image
                                    source={icons.categories}
                                    style={styles.iconCate}
                                />
                                <Text style={styles.textChooseCate}>
                                    Choose Category:
                                </Text>
                            </View>
                            <View style={styles.chooseCate}>
                                <Image
                                    source={cate.icon}
                                    style={styles.iconCate}
                                />
                                <Text style={styles.nameCatechoose}>
                                    {cate.title}
                                </Text>
                                <TouchableOpacity
                                    style={styles.more}
                                    onPress={() => {
                                        navigation.navigate('choosecate')
                                    }}
                                >
                                    <Image
                                        style={styles.moreicon}
                                        source={icons.rightArrow}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.strainght}></View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Image
                                source={icons.calendar1}
                                style={styles.icon}
                            />
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
                                    <Text style={{ fontSize: 18 }} onPress={openDatePicker1}>
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
                            <Image
                                source={icons.calendar1}
                                style={styles.icon}
                            />
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
                            dispatch(updateCate({
                                cateId: cateId,
                                limit: limit,
                                datestart: moment(datestart).format("MM/DD/YYYY"),
                                dateend: moment(dateend).format("MM/DD/YYYY")
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
        fontSize: 18,
        fontWeight: "bold"
    },
    icon: {
        height: 50,
        width: 50,
        marginRight: 30,
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
    iconCate: {
        width: 50,
        height: 50,
        marginRight: 30
        , marginLeft: 15
    },
    textChooseCate: {
        fontSize: 17,
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
    more: {
        height: 30,
        width: 30,

    },
    chooseCate: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center"
    },
    nameCatechoose: {
        width: "50%",
        fontSize: 18,
        fontWeight: "bold"
    },
    moreicon: {
        height: 30,
        width: 30
    }
});
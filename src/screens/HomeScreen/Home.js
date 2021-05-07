import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { storage_Key } from "../../../keys/storageKey";
import { backgroundColor } from "../../api/constants";
import { generateListColor, mergeColorToData } from "../../api/helper";
import Chart from "./components/Chart";
import Headlines from "./components/Headlines";
import Notifications from "./components/Notifications";
import Picker from "./components/Picker";

export default function Home({ navigation }) {
  const [value, setValue] = useState("m");
  const [data, setData] = useState([]);

  const generateChartData = useCallback(() => {
    const chartData = [];
    data.forEach((value) => {
      for (let i = 0; i < chartData.length; i++) {
        if (chartData[i].category === value.category) {
          chartData[i].price += value.price;
          return;
        }
      }
      chartData.push({ ...value });
    });
    return chartData;
  }, []);

  useEffect(() => {
    getData = async () => {
      try {
        const crawledData = JSON.parse(await AsyncStorage.getItem(storage_Key));
        const listColor = generateListColor(crawledData);

        const data = mergeColorToData(crawledData, listColor);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Headlines name={"Trần Thành Long"} />
        <Notifications />
        <Picker value={value} setValue={setValue} />
        <Chart data={generateChartData()} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

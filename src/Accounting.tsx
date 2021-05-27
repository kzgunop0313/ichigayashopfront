import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Homebutton from "../components/Homebutton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    seattype: {
        fontSize: 60,
        marginTop:150
    },
    total: {
        fontSize: 70,
        marginTop: 10
    },
    time: {
        fontSize: 60,
        marginTop: 10
    },
    memo: {
        color: "#ff5622",
        fontSize: 40,
        marginTop: 10
    }
});

export default function Accounting (date: { navigation: { navigate: (arg0: string) => void; }; route: { params: { total: number; seattype: string; nowtime: string; untiltime: string; time: string, xuntilhour:number }; } }) {
    const {total, seattype,nowtime, untiltime, time, xuntilhour} = date.route.params;

    return(
    <View style={styles.container}>
        <Text  style={styles.seattype}>{seattype}</Text>
        <Text style={styles.total}>金額{total}円</Text>
        {(xuntilhour >= 18 || time === "一日")?
        <Text style={styles.time}>
            {nowtime}~18:00({time})
        </Text>:
        <Text style={styles.time}>
            {nowtime}~{untiltime}({time})
        </Text>}
        <Text　style={styles.memo}>スタッフにお申し付けください</Text>

        <Homebutton
            title="ホームへ"
            onPress={() => {
                date.navigation.navigate("Home");
            }}
        />
    </View>
)};
import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    title : {
        fontSize: 80,
        marginTop:150
    },



});

const Home = (date: { navigation: { navigate: (arg0: string) => void; }; }) => (
    <View style={styles.container}>
        <Text style={styles.title}>合計金額600円</Text>
        <Button
            titleStyle={{
                color: "white",
                fontSize: 50,
            }}
            buttonStyle={{
                height: 110,
                width: 400,
                marginTop: 40,
                borderRadius: 20,
            }}
            title="ホームに戻る"
            onPress={() => {
                date.navigation.navigate("Home");
            }}
        />
    </View>
);

export default Home;
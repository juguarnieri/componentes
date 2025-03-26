import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
    <Text style={styles.headerText}>Bem-vindo ao App 🌟</Text>
</View>
  );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#6200ee",
        width: "100%",
        paddingVertical: 40,
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        color: "white",
    },
});

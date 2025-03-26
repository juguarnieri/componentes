import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Acredite no seu potencial e siga em frente! 🚀</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: "#6200ee",
        width: "100%",
        alignItems: "center",
    },
    footerText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

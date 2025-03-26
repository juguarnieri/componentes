import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: "https://static.vecteezy.com/ti/vetor-gratis/p1/17762049-mulher-atraente-fechando-os-olhos-toca-flor-gigante-apreciando-a-beleza-natural-e-o-cheiro-agradavel-menina-perto-de-flor-simboliza-o-uso-de-cosmeticos-sem-adicao-de-quimica-ilustracaoial-plana-vetor.jpg" }}
                style={styles.image}
            />
            <Text style={styles.title}>Beleza Natural</Text>
            <Text style={styles.description}>
                Aprecie a beleza da natureza e respire ar puro!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "gray",
    },
});

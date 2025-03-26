import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card />
        <Card />
        <Card />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f4f4f4",
  },
  scrollContent: {
    flexGrow: 1, // Faz os elementos preencherem o espaço disponível
    justifyContent: "center", 
    alignItems: "center",
    paddingVertical: 20,
  },
});

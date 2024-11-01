import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Tareas from "../../components/Tareas/Tareas";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tareas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

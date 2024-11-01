import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Tareas = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [tareas, setTareas] = useState<{ id: string; texto: string }[]>([]);
  const [contador, setContador] = useState<number>(0);

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, { id: Date.now().toString(), texto: nuevaTarea }]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (id: string) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const incrementarContador = () => setContador(contador + 1);
  const decrementarContador = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChangeText={setNuevaTarea}
      />

      <TouchableOpacity style={styles.addButton} onPress={agregarTarea}>
        <Text style={styles.addButtonText}>Agregar Tarea</Text>
      </TouchableOpacity>

      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.texto}</Text>
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.counterButton}
          onPress={decrementarContador}
        >
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{contador}</Text>

        <TouchableOpacity
          style={styles.counterButton}
          onPress={incrementarContador}
        >
          <Text style={styles.counterButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    marginTop: 30,
    fontSize: 24,
    marginBottom: 10,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "green",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  taskText: {
    fontSize: 16,
    color: "black",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  counterButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  counterButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  addButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Tareas;

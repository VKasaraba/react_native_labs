import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <View style={styles.task}>
        <View style={styles.leftWrapper}>
          <View style={[styles.point, checked ? styles.chekedPoint : styles.unchekedPoint]}></View>
          <Text style={styles.taskText}>{props.text}</Text>
        </View>
        <View style={[styles.circle, {"backgroundColor": props.color}]}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#252A31",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  point: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    marginRight: 15,
  },
  unchekedPoint: {
    borderColor: "#DADADA",
    borderWidth: 2,
  },
  chekedPoint: {
    backgroundColor: "#0080ff",
  },
  taskText: {
    maxWidth: "80%",
    fontSize: 18,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default Task;

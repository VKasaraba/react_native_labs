import React, { useState } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from "react-native";
import { connect } from "react-redux";
import Category from "../components/Category";
import Task from "../components/Task";

const CheckList = (props) => {
  const [plusSignPressed, setPlusSignPressed] = useState(false);

  const handleCategoryPress = (type) => {
    props.navigation.navigate('CategoryList', {type:type})
  };

  return (
    <View style={styles.appContainer}>
      {/* To enable scrolling when list gets longer than the page */}
      <ScrollView
        style={{ opacity: plusSignPressed ? 0.5 : 1 }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.checkList}>
          <Text style={styles.pageTitle}>Today</Text>
          <View>
            {/* TASKS: Display tasks from the tasks array */}
            {props.tasks_raw.map((task_raw) => (
              <Task text={task_raw.text} type={task_raw.type} />
            ))}
          </View>

          <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Lists</Text>
            {/* CATEGORIES: Display categories from the tasks array */}
            {props.categories_raw.map((categoty_raw) => (
              <TouchableOpacity
                onPress={() => handleCategoryPress(categoty_raw.type)}
              >
                <Category
                  title={categoty_raw.title}
                  tasksNumber={categoty_raw.tasksNumber}
                  type={categoty_raw.type}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Add a button to create a task or list */}
      <View style={styles.createTaskContained}>
        <View
          style={[
            styles.createChoiceWrapper,
            plusSignPressed ? styles.displayFlex : styles.displayNone,
          ]}
        >
          <TouchableOpacity
            style={[styles.createOption, styles.createOptionBorder]}
          >
            <Image source={require("../assets/option1.png")} />
            <Text style={styles.createOptionText}>Create Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createOption}>
            <Image source={require("../assets/option2.png")} />
            <Text style={styles.createOptionText}>Create List</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addTaskSignWrapper}
          onPress={() => setPlusSignPressed(!plusSignPressed)}
        >
          <Text style={styles.addTaskSign}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    tasks_raw: state.tasks_raw,
    categories_raw: state.categories_raw,
  };
}

// connect storage to the component
export default connect(mapStateToProps)(CheckList);

// STYLES
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  // Check list
  checkList: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 30,
    marginLeft: 30,
    marginBottom: 15,
    fontWeight: "bold",
  },

  // Add Task button
  createTaskContained: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "column",
    marginLeft: 200,
  },
  addTaskSignWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginLeft: 100,
  },
  addTaskSign: {
    fontSize: 40,
    color: "#1a1aff",
  },
  createChoiceWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 10,
    width: 180,
  },
  createOptionText: {
    fontWeight: "bold",
    color: "#006CFF",
    marginLeft: 7,
  },
  createOption: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    flexDirection: "row",
  },
  createOptionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#252A31",
  },
  displayNone: {
    display: "none",
  },
  displayFlex: {
    display: "flex",
  },

  // Categories
  categoriesWrapper: {
    marginLeft: 50,
    marginTop: 20,
  },
  categoriesTitle: {
    color: "#808080",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

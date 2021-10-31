import React, { useState } from "react";
import { Image } from 'react-native' ;
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';
import Category from './components/Category';

const inboxColor = "#EBEFF5"
const workColor = "#61DEA4"
const shoppingColor = "#F45E6D"
const familyColor = "#FFE761"
const personalColor = "#B678FF"

var inboxTasksNumber = 1
var workTasksNumber = 2
var shoppingTasksNumber = 3
var familyTasksNumber = 1
var personalTasksNumber = 4

export default function App() {
  const [plusSignPressed, setPlusSignPressed] = useState(false);

  return (
    <View style={styles.appContainer}>
      {/* To enable scrolling when list gets longer than the page */}
      <ScrollView
        style={plusSignPressed ? {opacity: 0.5} : {opacity: 1}}
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.checkList}>
        <Text style={styles.pageTitle}>Today</Text>
        <View>
          {/* TASKS */}
            <Task text={'Start making a presentation'} color={inboxColor} />
            <Task text={'Pay for rent'} color={workColor} />
            <Task text={'Buy a milk'} color={shoppingColor} />
            <Task text={'Don’t forget to pick up Mickael from school'} color={familyColor} />
            <Task text={'Buy a chocolate for Charlotte'} color={personalColor} />
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Lists</Text>
          <Category title={"Inbox"} tasksNumber={inboxTasksNumber} color={inboxColor}/>
          <Category title={"Work"} tasksNumber={workTasksNumber} color={workColor}/>
          <Category title={"Shopping"} tasksNumber={shoppingTasksNumber} color={shoppingColor}/>
          <Category title={"Family"} tasksNumber={familyTasksNumber} color={familyColor}/>
          <Category title={"Personal"} tasksNumber={personalTasksNumber} color={personalColor}/>
        </View>
      </View>

      </ScrollView>

      {/* Add a task button */}
      <View style={styles.createTaskContained}>
          <View style={[styles.createChoiceWrapper, plusSignPressed ? styles.displayFlex : styles.displayNone]}>
            <TouchableOpacity style={[styles.createOption, styles.createOptionBorder]}>
              <Image source={require('./assets/option1.png')} />
              <Text style={styles.createOptionText}>Create Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createOption}>
              <Image source={require('./assets/option2.png')} />
              <Text style={styles.createOptionText}>Create List</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity style={styles.addTaskSignWrapper} onPress={() => setPlusSignPressed(!plusSignPressed)}>
          <Text style={styles.addTaskSign}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    fontWeight: 'bold',
  },

  // Add Task button
  createTaskContained: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'column',
    marginLeft: 200,
  },
  addTaskSignWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 100,
  },
  addTaskSign: {
    fontSize: 40,
    color: '#1a1aff'
  },
  createChoiceWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 10,
    width: 180,
  },
  createOptionText: {
    fontWeight: 'bold',
    color: '#006CFF',
    marginLeft: 7,
  },
  createOption: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  createOptionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#252A31",
  },
  displayNone: {
    display: 'none',
  },
  displayFlex: {
    display: 'flex',
  },

  // Categories
  categoriesWrapper: {
    marginLeft: 50,
    marginTop: 20,
  },
  categoriesTitle: {
    color: '#808080',
    fontWeight: 'bold',
    marginBottom: 5,
  }
});
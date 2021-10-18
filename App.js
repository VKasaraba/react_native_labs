import React from 'react';
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
  return (
    <View style={styles.appContainer}>
      {/* To enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.checkList}>
        <Text style={styles.pageTitle}>Today</Text>
        <View style={styles.tasks}>

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
      <TouchableOpacity style={styles.createTask} onPress={() => handleCreateTask()}>
        <View style={styles.addTaskSignWrapper}>
          <Text style={styles.addTaskSign}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
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
  createTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row-reverse',
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
    marginRight: 15,
  },
  addTaskSign: {
    fontSize: 40,
    color: '#1a1aff'
  },
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
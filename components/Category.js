import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Category = (props) => {

  return (
    <View style={[styles.containerWrapper, { backgroundColor: props.color}]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subText}>{props.tasksNumber} tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerWrapper: {
        // backgroundColor: "#DADADA",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },
    subText: {
        fontSize: 10,
        color: '#808080',
        marginLeft: 10,
    }
})

export default Category;
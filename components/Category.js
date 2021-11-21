import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from "../constants";


const Category = (props) => {

  return (
    <View style={[{ backgroundColor: colors[props.type] }, styles.containerWrapper]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subText}>{props.tasksNumber} tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerWrapper: {
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
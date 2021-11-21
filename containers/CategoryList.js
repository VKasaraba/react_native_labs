import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Task from '../components/Task'
import colors from "../constants"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

const CategoryList = (props) => {
    const type = props.route.params.type
    return (
        <View style={[{ backgroundColor: colors[type] }, styles.containerWrapper]}>
            <Text style={styles.title}>{capitalize(type)}</Text>
            <View>
                {/* TASKS: Display filtered by type tasks from the tasks array */}
                {props.tasks_raw.filter(t => t.type == type).map((task_raw) => <Task text={task_raw.text} type={task_raw.type} /> )}
            </View>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        tasks_raw:state.tasks_raw
    }
}

export default connect(mapStateToProps)(CategoryList)

const styles = StyleSheet.create({
    containerWrapper: {
        width: width,
        height: height,
    },
    title: {
        marginTop: 40,
        marginLeft: 50,
        fontSize: 50,
        fontWeight: 'bold',
    },
})

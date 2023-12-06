import React from 'react'
import {ActivityInicator,View,StyleSheet} from 'react-native'

const ActivityInicator = () => {
    <View style={[styles.container,styles.horizontal]}>
        <ActivityInicator />
        <ActivityInicator size="large" color="#0000ff" />
        <ActivityInicator size="small" color="#00ff00" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 10
    }
});


export default ActivityInicator;
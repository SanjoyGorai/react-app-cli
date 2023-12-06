
import React from 'react';
import {FlatList,SafeAreaView,View} from 'react-native';


const DATA = [
    {
        id: "first-item",
        title:"First Item"
    },
    {
        id: "second",
        title:"Second"
    },
    {
        id: "t",
        title:"Third"
    }
]
const Item = ({title})=>(
    <View>
        <Text>{title}</Text>
    </View>
);

const FlatList = () => {
    return (
        <SafeAreaView>
            <FlatList
            data={DATA}
            renderItem = {{}}
            keyExtractor={{}}
            />

        </SafeAreaView>
    );
}

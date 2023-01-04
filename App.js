import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import FishGraph from "./FishGraph";
import FishTable from "./FishTable";

var yearlyData = {
    '2018': 300,
    '2019': 200,
    '2020': 150,
    '2021': 120,
    '2022': 100
}

var speciesCountData = {
    'Bass': 200,
    'Trout': 110,
    'Carp': 30,
    'Catfish': 15,
    'Pike': 6
}

const defaultChartData = {
  labels: ['2018', '2019', '2020', '2021', '2022'],
      datasets: [
  {
    data: [300, 200, 150, 120, 100]
  },
],
};

const allFishData = {
    labels: ['Bass', 'Trout', 'Carp', 'Catfish', 'Pike'],
    datasets: [
        {
            data: [200, 110, 30, 15, 6]
        },
    ],
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        margin: 12,
        flexDirection: 'row',
        borderRadius: 2,
        backgroundColor: '#00ff5e',
        display: 'inline-text',
    },
    buttonText: {
        margin: 13,
        fontSize: 20,
        textAlign: 'left',
        textAlignVertical: "center"

    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
});

export default function App() {
    const [currentChartData, setChartData] = useState(defaultChartData);

    return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Zapfino', color: '#ffffff', fontSize: 30}}>Fishing Stats</Text>
      <FishGraph data={currentChartData} width={windowWidth} viewStyles={{styles}}/>
        <FishTable data={currentChartData} width={windowWidth} viewStyles={{styles}}/>

        <View style={{flexDirection: "row", width: '100%', alignItems: 'flex-start'}}>
        <Pressable style={styles.button} onPress={() => setChartData(allFishData)}>
            <Text style={styles.buttonText}>Species Data</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setChartData(defaultChartData)}>
            <Text style={styles.buttonText}>Timeline Data</Text>
        </Pressable>
        </View>

        {/*<Demo/>*/}
      <StatusBar style="auto" />
    </View>
  );
}


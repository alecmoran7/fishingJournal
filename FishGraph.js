import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'



export default function FishGraph(props) {
    return (
        <View style={props.viewStyles}>
            <Text>
                Total Fish Caught
            </Text>
{/*
            <BarChart
                data={props.data}
                width={props.width}
                height={200}
                yAxisSuffix={' fish'}
                yAxisLabel={''}
                chartConfig={{
                    backgroundColor: "#000000",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                }}
            />
*/}
            <HorizontalBarGraph
                // data={Object.values(props.data)}
                // labels={Object.keys(props.data)}
                data={props.data.datasets[0].data}
                labels={props.data.labels}
                width={props.width - 40}
                height={350}
                barRadius={15}
                keys={['positive','negative']}
                colors={['green','blue']}
                barColor={'#ff0000'}
                style={{backgroundColor: '#000000', textColor: '#ffffff'}}
                baseConfig={{
                    hasYAxisBackgroundLines: true,
                    xAxisLabelStyle: {
                        color: 'white',
                        rotation: 0,
                        fontSize: 12,
                        width: 70,
                        yOffset: 4,
                        xOffset: -15
                    },
                    yAxisLabelStyle: {
                        rotation: 0,
                        fontSize: 13,
                        color: 'white',
                        position: 'bottom',
                        xOffset: 0,
                        decimals: 0,
                        height: 100
                    },
                    yAxisBackgroundLineStyle: {
                      strokeWidth: 2,
                      color: 'gray'
                    },

                }}
            />

        </View>
    )
}

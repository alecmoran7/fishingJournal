import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const styles = StyleSheet.create({
    container: { flex: 0, padding: 10, justifyContent: 'center', backgroundColor: '#000000', width: 380 },
    head: { height: 44, backgroundColor: 'black' },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
})

export default function FishTable(props) {
    return (
        <>
            <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'red' }}>
                <Row data={props.data.labels} style={styles.head} textStyle={styles.headText} />
                {/*<Row data={Object.keys(props.data)} style={styles.head} textStyle={styles.headText} />*/}
                {/*<Rows data={Object.values(props.data)} textStyle={styles.text} />*/}
                <Rows data={[props.data.datasets[0].data]} textStyle={styles.text} />
            </Table>
        </View>
            </>


    // <View style={styles.container}>
    //         <Text style={styles.text}>
    //             Fish Table
    //         </Text>
    //         {/*<TableWrapper style={styles.wrapper}>*/}
    //         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
    //             <Row data={props.data.labels} style={styles.head} textStyle={styles.text} flexArr={[10, 10, 1, 1]}/>
    //             {/*<Rows data={props.data.datasets[0].data} style={styles.text} textStyle={styles.text}/>*/}
    //
    //             {/*<Rows data={props.data.datasets[0].data} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>*/}
    //             {/*<Text>Data here:{props.data.datasets[0].data}:end</Text>*/}
    //
    //
    //         </Table>
    //         {/*</TableWrapper>*/}
    //
    //     </View>
    )
}


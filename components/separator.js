import React from 'react'
import { View, StyleSheet } from 'react-native'

function Separator(props) {
    return(
        <View style={styles.separator}>

        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        borderTopWidth: 1,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        borderColor: '#222222',
        borderRadius: 20,
        alignItems: 'center'
    }
})

export default Separator;

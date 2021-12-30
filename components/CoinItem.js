import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Separator from './separator'

const CoinItem = ({ coin }) => {
    return (
      <>
        <View style={styles.containerItem}>
          <View style={styles.coinName}>
            <Image style={styles.image} source={{ uri: coin.image }} />

            <Text style={styles.text}>{coin.name}</Text>

            <Text style={styles.symbol}>[{coin.symbol}]</Text>
          </View>
          <View>
            <Text style={styles.price}>${coin.current_price}</Text>

            <Text
              style={
                (styles.priceChange,
                coin.price_change_percentage_24h > 0
                  ? styles.priceUp
                  : styles.priceDown)
              }
            >
              {coin.price_change_percentage_24h}%
            </Text>
          </View>
        </View>
        <Separator/>
      </>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        paddingTop: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#ffffff',
        marginLeft: 8,
        marginTop: 12,
        fontSize: 16
    },
    image: {
        width: 30,
        height: 30,
        marginTop: 6,
    },
    price: {
        color: '#ffffff',
        marginTop: 6,
        fontSize: 15,
        textAlign: 'right'
    },
    coinName: {
        flexDirection: 'row'
    },
    symbol: {
        color: '#999999',
        marginLeft: 4,
        marginTop: 14,
        textTransform: 'uppercase',
        fontSize: 13
    },
    priceChange: {
        color: '#ffffff',
        textAlign: 'right'
    },
    priceUp: {
        color: '#00FF87',
        textAlign: 'right'
    },
    priceDown: {
        color: '#FF2300',
        textAlign: 'right'
    }
})

export default CoinItem

import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TextInput, StatusBar } from 'react-native'

import CoinItem from './components/CoinItem'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
     const data = await res.json()
     setCoins(data)
  }
  
  useEffect(() => {
    loadData()
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={"#878787"}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => {
          return <CoinItem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={async() => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101010",
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: "#ffffff",
    marginTop: 30,
    fontSize: 23,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 13
  },
  textInput: {
    color: '#ffffff',
    borderBottomColor: '#555555',
    borderBottomWidth: 1,
    textAlign: 'left',
    width: '40%',
    marginBottom: 3,
    marginTop: 30,
  },
  list: {
    width: "94%",
  },
});

export default App

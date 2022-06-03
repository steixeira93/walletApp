import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from '../../Components/Header'
import Balance from '../../Components/Balance'
import Movements from '../../Components/Movements';
import Actions from '../../Components/Actions';

const list = [
    {
        id: 1,
        label: 'Pix',
        value: '1000,00',
        date: '03/06/22',
        type: 1 // despesas
    },
    {
        id: 2,
        label: 'Boleto carro',
        value: '2002,12',
        date: '03/06/22',
        type: 0 // despesas
    },
    {
        id: 3,
        label: 'Salário do mês 06/22',
        value: '15000,00',
        date: '03/06/22',
        type: 1 // entradas
    },
    {
      id: 4,
      label: 'Ração dos Filhos',
      value: '680,00',
      date: '30/05/22',
      type: 0
    }

]

export default function Home() {
 return (
   <View style={styles.container}>
       <Header name="Giulie Antunes" />

       <Balance saldo="9.250,50" gastos="-527,00"/>

       <Actions/>

       <Text style={styles.title}>
           Ultimas Movimentações
       </Text>

       <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Movements data={item}/> }
       />
     
   </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
      marginStart: 14,
      marginEnd: 14,
  }
});
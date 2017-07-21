import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import NasaList from './src/components/NasaList';

const App = () => {
  return(
    <View>
      <Header headerText={'Space Stuff'}/>
      <NasaList />
    </View>
  )
};

AppRegistry.registerComponent('nasa', ()=> App );
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './../pages/Home';
import { Conversor } from './../pages/Conversor';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#fff',width: 130,}} 
            drawerContentOptions={
            {
                activeTintColor: '#0000ff',        //cor do texto do (da guia) {ATUAL}
                activeBackgroundColor: '#66ccff',  //cor do fundo do (da guia) {ATUAL}
                inactiveTintColor: '#DEDEDE'      ,//cor do texto do (da guia) {NAO-ATUAL}
                inactiveBackgroundColor: '#C2c2c2',//cor do fundo do (da guia) {NAO-ATUAL}
            }
            }>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Conversor" component={Conversor}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
}
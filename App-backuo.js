import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Telas/Login';
import MinhasRefeicoes from './Telas/MinhasRefeicoes';
//import CriarConta from './Telas/CriarConta';
//import VamosComecar from './Telas/VamosComecar';


const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator >
        <Drawer.Screen
        name='Login'
        component={Login}
        options={{
          title: 'LOGIN',
          headerStyle: {
            backgroundColor: '#B0C4DE'
          },
          headerTintColor: 'white',
          headerShown: false
        }}/>
        <Drawer.Screen 
        name='MinhasRefeicoes'
        component={MinhasRefeicoes}
        options={{headerShown: false
        }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

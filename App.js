import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './paginas/login'
import Cadastro from './paginas/cadastrar'
import TelaPrincipal from './paginas/telaPrincipal'

const Stack = createStackNavigator();

function Home(){
  return(
    <Stack.Navigator
    initialRouteName=''
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle:{
        backgroundColor: 'blue'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
    >
      
      <Stack.Screen name='Login' component={Login} options={{title: 'Login'}}/>
      <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'CadastrarUsuario'}}/>
      <Stack.Screen name='Home' component={TelaPrincipal} options={{title: 'TelaPrincipal'}}/>
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
    <Home/>
    </NavigationContainer>
  )
}
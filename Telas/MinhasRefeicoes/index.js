import  React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import TaskList from '../src/components/TaskList';

export default function MinhasRefeicoes({navigation}){

    const [task, setTask] = useState([
        {key: 1, task: 'Café da manhã'},
        {key: 2, task: 'Almoço'},
        {key: 3, task: 'Merenda'},
        {key: 4, task: 'Janta'},
    ]);
    return(
       
        <LinearGradient
              style={{
                  flex: 1
              }}
              colors={["#F0E68C", "#ffffff", "#F0E68C"]}>

            <View >
                <Text style={estilos.title}>
                Minhas Refeições</Text>
            </View>

              <FlatList
                showHorizontalScrollIndicator={false}
                data={task}
                keyExtractor={ (item) => String(item.key)}
                renderItem={ ({item}) => <TaskList data={item} />}
                />

            <View style={estilos.botao}>
            
                      <Icon.Button 
                      name="plus"
                      size= {15}
                      color="#fff"
                      backgroundColor= '#BDB76B'
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={{fontSize: 12, color: 'white' }}>
                        Adicionar refeição
                      </Text>
                    </Icon.Button>
            </View>

            <View style={estilos.botaoLupa}>
                    <Icon.Button style={estilos.lupa}
                      name="search"
                      size= {20}
                      color="#fff"
                      backgroundColor= '#BDB76B'
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={{fontSize: 12, color: 'white' }}>
                      Consulta
                      </Text>
                    </Icon.Button>
            </View>
        </LinearGradient>
    );
}

    const estilos = StyleSheet.create({
        botao:{
            position: 'absolute',
            width: 212,
            height: 40,
            fontSize: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            right: 55,
            bottom: 105,
            padding: 2,
            elevation: 2,
            zIndex: 9,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset:{
                width: 1,
                height: 3
            }
            
          },

          botaoLupa:{
            position: 'absolute',
            width: 212,
            height: 40,
            fontSize: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            right: 15,
            bottom: 45,
            padding: 2,
            elevation: 2,
            zIndex: 9,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset:{
                width: 1,
                height: 3
            }
            
          },

          title: {
            fontSize: 25,
            color: 'black',
            marginLeft: 30,
            marginTop: 60
          },

          lupa: {
            
            width: 80,
            height: 50,
            marginLeft: 15,
            marginRight: 15,
            verticalAlign: 'center',
            justifyContent: 'center'
          }
    })

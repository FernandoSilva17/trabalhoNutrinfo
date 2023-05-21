import  React  from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';    
    
    export default function Conta({navigation}){
      return(
       
        <LinearGradient
              style={{
                  flex: 1
              }}
              colors={["#F0E68C", "#ffffff", "#F0E68C"]}>
                
                
                
                <View style={estilos.item_login}>
                  <Image source={require('../Imagens/nutrinforImagem.png')} style={estilos.logo}></Image>
                  <View style={estilos.espaco}>
                      <Text style={estilos.titulo1}>Crie,</Text>
                      <Text style={estilos.titulo2}>Sua conta!</Text>
                  </View>
                  <View style={estilos.janela}>
                      <View style={estilos.item_email}>
                          <Text style={estilos.textEmail}>EMAIL:</Text>
                          <TextInput style={estilos.textCampo}
                              placeholder={'Digite seu email'}></TextInput>
                      </View>
                      <View style={estilos.item_senha}>
                          <Text style={estilos.textSenha}>SENHA:</Text>

                          <View style={estilos.inputArea}>
                              <TextInput style={estilos.textInput}
                                  placeholder={'Digite sua senha'} />
                              <TouchableOpacity style={estilos.icon}>
                                  <Ionicons name="eye" color="grey" />
                              </TouchableOpacity>
                          </View>
                      </View>
                      <View style={estilos.item_senha}>
                          <Text style={estilos.textSenha}>CONFIRMAR SENHA:</Text>

                          <View style={estilos.inputArea}>
                              <TextInput style={estilos.textInput}
                                  placeholder={'Digite sua senha'} />
                              <TouchableOpacity style={estilos.icon}>
                                  <Ionicons name="eye" color="grey" />
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={estilos.botao}>
                      <Button title=" CADASTRE" color='#BDB76B' onPress={() => navigation.navigate('MinhasRefeicoes')} />
                  </View>
              </View>
              
        </LinearGradient>
    
    
    );
    }
    
    const estilos = StyleSheet.create({
    
      espaco:{
        marginTop: 70
      },
    
      textEmail:{
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold'
      },
      textMatricula:{
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold'
      },
      
      textSenha:{
        marginTop: 5,
        marginLeft: 7,
        fontWeight: 'bold'
      },

      textCampo: {
        backgroundColor: '#F4F3F3',
        height: '35%',
        color: '#a1a1a1',
        marginTop: 3,
        marginLeft: 7,
        margin: '10%',
        padding: 3
      },
    
      inputArea: {
        flexDirection: 'row',
        margin: '10%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a1a1a1',
        marginTop: 3,
        marginLeft: 7,
        marginRight: 42
      },
    
      icon: {
        width: 35,
        height: 28,
        marginRight: -90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F3F3'
      },
    
      textInput: {
        backgroundColor: '#F4F3F3',
        marginLeft: -82,
        width:  288,
        height: 28,
        color: '#a1a1a1',
        padding: 3
      },
    
      item_email:{
        marginHorizontal: 25,
        height: 80,
        marginLeft: 20,
        marginTop: 20
      },
      item_matricula:{
        marginTop: 20,
        marginLeft: 20,
        height: 80,
        marginHorizontal: 25
      },
      item_senha:{
        marginTop: 20,
        marginLeft: 20,
        height: 80,
        marginHorizontal: 25
      },
    
      esqueci_senha:{
    
        marginHorizontal: '15%',
        height: '80%',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
        color: 'black'
    
      },
      
      botao:{
        position: 'absolute',
        width: 122,
        height: 40,
        fontSize: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        right: 155,
        bottom: -45,
        padding: 2
        
      },
      janela:{
        marginTop: 5,
        height: 300,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center'
      },
       
      titulo1:{
    
        margin: 8,
        marginLeft: 20,
        marginTop: 27,
        width: 175,
        height: 55,
        left: 5,
        fontSize: 25,
        color: 'black'
      },
      titulo2:{
        marginVertical: 5,
        marginLeft: 45,
        width: 175,
        height: 55,
        fontSize: 25,
        color: 'black'
      },
      logo:{
        resizeMode: 'contain',
        marginTop: 45,
        marginLeft: 100
      }
    })

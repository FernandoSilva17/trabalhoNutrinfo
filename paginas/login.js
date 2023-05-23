import {Component} from 'react'
import {
View, 
Text, 
Button, 
Alert, 
TextInput, 
ActivityIndicator} from 'react-native'

import {app} from '../firebaseConfig'
import {estilos} from '../css/estilos'

export default class Login extends Component{

    constructor(){
      super();
      this.state ={
        email: '',
        password: '',
        isLoading: false
      }
    }

    updateInputVal = (val, props) =>{
      const state = this.state;
      state[props] = val;
      this.setState(state);
    }

    userLogin = () =>{
      if(this.state.email === '' && this.state.password === ''){
        Alert.alert("Digite detalhe do usuario!");
        this.setState({
          isLoading: false
        });
      }
      else{
        this.setState({
          isLoading:true
        });
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response)=>{
          console.log(response)
          console.log("usuario logado com sucesso!")
          this.setState({
            isLoading: false,
            email: '',
            passwordfirebase: ''
          })

          this.props.navigation.navigate('Home')
        })
        .catch(error =>this.setState({
          erroMessage : error.message
        }))
      }
    }

    render(){
      
        if(this.state.isLoading){
          return(
        <View>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      );
      }

      return(
        <View style={estilos.container}>
          <TextInput style={estilos.inputTextStyle} placeholder="Email"
          value = {this.state.email}
          onChangeText={(val)=>this.updateInputVal(val, 'email')}/>

          <TextInput style={estilos.inputTextStyle} placeholder="Password"
          value = {this.state.password}
          onChangeText={(val)=>this.updateInputVal(val,'password')}
          maxLength={10}
          secureTextEntry={true}/>
          <Button
            color="#3740FE"
            title="Logar"
            onPress={() => this.userLogin()}
          />

          <Text style={estilos.loginTexto}
          onPress={()=> this.props.navigation.navigate('Cadastro')}>
            Não tem conta? Clique aqui para cadastrar!
          </Text>
        </View>
      )
      

    }
}
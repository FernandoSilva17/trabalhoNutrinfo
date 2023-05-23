import {Component} from 'react'
import {
  View,
  Text, 
  TextInput, 
  Button, 
  Alert, 
  ActivityIndicator} from 'react-native'

  // import firebase from 'firebase'
import {estilos} from '../css/estilos'

   export default class Cadastro extends Component{

     constructor (){
       super();
       this.state ={
         displayName: '',
         email: '',
         password: '',
         isLoading: '',
       }
     }

     updateInputVal = (val, prop) => {
       const state = this.state;
       state[prop] = val;
       this.setState(state);
     }

     cadastrarUsuario = () =>{
       if(this.state.email ==='' && this.state.password ===''){
         Alert.alert("Insira dados corretamente!");
       }else{
         this.setState({
          isLoading: true,
         });
      //   firebase.auth()
      //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
      //   .then((response) =>{
      //     response.user.updateProfile({
      //       displayName: this.state.displayName
      //     })
      //     Alert.alert("Usuario cadastrado com sucesso!");
      //     this.setState({
      //       isLoading: false,
      //       email: '',
      //       password: '',
      //       displayName: '',
      //     })
      //     this.props.navigation.navigate('Login')
         
      // })
      //  .cath(erro => this.setState({
      //       errorMessage: erro.message
      //     })
        // )
    } 
  } 
   render() {
     if(this.state.isLoading){
       <View>
        <ActivityIndicator size="large" color="#9E9E9E" />
       </View>
     }
      return(
        <View style={estilos.container}>
        <TextInput 
        style={estilos.inputTextStyle}
        placeholder="Nome Completo"
        value={this.state.displayName}
        onChangeText={(val)=>this.updateInputVal(val,'displayName')}/>

        <TextInput 
        style={estilos.inputTextStyle}
        placeholder="Email"
        value={this.state.displayemail}
        onChangeText={(val)=>this.updateInputVal(val,'email')}/>
        
        <TextInput 
        style={estilos.inputTextStyle}
        placeholder="Senha"
        value={this.state.displayPassword}
        onChangeText={(val)=>this.updateInputVal(val,'password')}
        secureTextEntry={true}
        maxLength={15}/>

        <Button
        color="#3740FE"
        title="Cadastro"
        onPress={()=> this.cadastrarUsuario()}/>

        <Text style={estilos.loginTexto}
        onPress={()=> this.props.navigation.navigate('Login')}>
            Já está cadastrado? Clique aqui para fazer login!
        </Text>
        
        </View>
      );
   }
  }

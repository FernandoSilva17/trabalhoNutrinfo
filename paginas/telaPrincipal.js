import {Component} from 'react'
import {View, Text, Button, Alert} from 'react-native'
import {Card, Icon} from 'react-native-elements'
// import firebase from 'firebase';
import {estilos} from '../css/estilos'

export default class TelaPrincipal extends Component{
  constructor(){
    super();
    this.state = {
      uid: ''
    }
  }

  cadastrar_dados = () =>{
    data = {nome: 'Fernando Silva', idade: 25};
    db = firebase.firestore();
    res = db.collection('perfilAluno').doc('aluno').set(data);
    Alert.alert(res);
  }

  sair = () => {
    // firebase.auth().signOut()
    // .then(() =>{
    //   this.props.navigation.navigate('Login')
    // })
    // .catch(erro => this.setState({
    //   erroMessage: erro.message
    // }))
  }

  render(){
    this.setState = {
      // displayName: firebase.auth().currentUser.displayName,
      // uid: firebase.auth().currentUser.uid
    }
    return(
      <View style={estilos.container}>
        <Card>
          <Card.Title> Serviço de hospedagem</Card.Title>
          <Card.Divider/>
          <Card.Image
          style={'padding:10'}
          source={require('../img/hospedagem.png')} />
        </Card>

        <Button 
        color= "#3CB371"
        title= "Salvar dados"
        onPress={()=> this.cadastrar_dados()}/>

        <Button 
        color= "#3740FE"
        title= "Sair"
        onPress={()=> this.sair()}/>
      </View>
    )
  }
}
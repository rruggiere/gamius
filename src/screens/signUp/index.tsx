import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEyeSlash, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

export default function SignUp() {
  const navigation = useNavigation<signUpScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.createAccount}>
        <Text style={styles.text}>Criar uma nova Conta</Text>
      </View>       
      <View style={styles.containerInfo}>
          <Text style={styles.haveAccount}>Por favor insira suas informações</Text>
        </View>
      <View style={styles.signUpInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} placeholder="Nome Completo" placeholderTextColor='#6f7075'/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} placeholder="Usuário" placeholderTextColor='#6f7075'/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} placeholder="Email" placeholderTextColor='#6f7075' keyboardType='email-address'/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Senha" placeholderTextColor='#6f7075' secureTextEntry={true}/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Data de Nascimento" placeholderTextColor='#6f7075' dataDetectorTypes='calendarEvent'/>
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faCalendarAlt }/>      
        </View>
        <View style={ styles.singUpActions }>
          <TouchableOpacity style={ styles.signUpButton } onPress={() => navigation.navigate('SignIn')}>
             <Text style={styles.textInput}>Cadastrar</Text> 
            </TouchableOpacity>
        </View>   
        <View style={styles.containerSignIn}>
          <Text style={styles.haveAccount}>Já tem uma conta? </Text>
          <Text style={styles.signInText} onPress={() => navigation.navigate('SignIn')}>Entrar!</Text>  
        </View>
      </View>
    </View>
  );
}

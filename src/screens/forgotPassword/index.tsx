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


type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

export default function SignUp() {
  const navigation = useNavigation<signUpScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.forgotPassword}>
        <Text style={styles.text}>Esqueceu sua Senha</Text>
      </View>       
      <View style={styles.containerInfo}>
          <Text style={styles.info}>Digite seu e-mail para que possamos ajudá-lo a recuperar sua senha</Text>
        </View>
      <View style={styles.forgotPasswordInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} placeholder="Email" placeholderTextColor='#6f7075' keyboardType='email-address'/>
        </View>
        <View style={ styles.forgotPasswordActions }>
          <TouchableOpacity style={ styles.forgotPasswordButton } onPress={() => navigation.navigate('EmailVerification')}>
             <Text style={styles.textInput}>Enviar</Text> 
            </TouchableOpacity>
        </View>   
      </View>
    </View>
  );
}

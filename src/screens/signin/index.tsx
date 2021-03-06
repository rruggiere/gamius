import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import logoGamiusImg from '../../../assets/gamius_logo.png';

type signInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignIn() {
  const navigation = useNavigation<signInScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={logoGamiusImg} />
      </View>
      <View style={styles.siginInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textLogin} placeholder="Usuário" placeholderTextColor='#6f7075'/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Senha" placeholderTextColor='#6f7075'/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
        <View style={ styles.signinActions }>
          <Text style={styles.forgtPassword} onPress={() => navigation.navigate('ForgotPassword')}> Esqueceu a senha?</Text>
          <TouchableOpacity style={ styles.signinButton } onPress={() => navigation.navigate('MainTab')}>
             <Text style={styles.textInput}>Entrar</Text> 
            </TouchableOpacity>
        </View>
        <View style={styles.containerSignUp}>
          <Text style={styles.forgtPassword}>Ainda não possui cadastro? </Text>
          <Text style={styles.signInText} onPress={() => navigation.navigate('SignUp')}>Cadastra-se!</Text>  
        </View>       
      </View>

    </View>
  );
}

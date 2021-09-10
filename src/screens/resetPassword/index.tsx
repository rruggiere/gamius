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
      <View style={styles.resetPassword}>
        <Text style={styles.text}>Redefinir Senha</Text>
      </View>       
      <View style={styles.containerInfo}>
          <Text style={styles.textInfo}>Agora insira sua nova senha e a confirme abaixo</Text>
        </View>
      <View style={styles.resetPasswordInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Senha" placeholderTextColor='#6f7075' secureTextEntry={true}/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Confirme a Senha" placeholderTextColor='#6f7075' secureTextEntry={true}/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
        <View style={ styles.resetPasswordActions }>
          <TouchableOpacity style={ styles.resetPasswordButton } onPress={() => navigation.navigate('SignIn')}>
             <Text style={styles.textInput}>Redefinir Senha</Text> 
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

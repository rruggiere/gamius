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
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


type disableAccountScreenProp = StackNavigationProp<RootStackParamList, 'DisableAccount'>;

export default function ChangePassword() {
  const navigation = useNavigation<disableAccountScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.resetPassword}>
        <Text style={styles.text}>Desativar Conta</Text>
      </View>  
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>Insira sua senha para desativar a conta</Text>
      </View>
      <View style={styles.resetPasswordInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Senha Atual" placeholderTextColor='#6f7075' secureTextEntry={true}/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
        <View style={ styles.resetPasswordActions }>
          <TouchableOpacity style={ styles.resetPasswordButton } onPress={() => navigation.navigate('SignIn')}>
             <Text style={styles.textInput}>Desativar Conta</Text> 
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

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


type changeEmailScreenProp = StackNavigationProp<RootStackParamList, 'ChangeEmail'>;

export default function ChangePassword() {
  const navigation = useNavigation<changeEmailScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.changeEmail}>
        <Text style={styles.text}>Atualizar Email</Text>
      </View>       
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>Insira sua senha atual atual</Text>
      </View>
      <View style={styles.changeEmailInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInputIcon} placeholder="Senha Atual" placeholderTextColor='#6f7075' secureTextEntry={true}/>           
          <FontAwesomeIcon style={styles.iconTextInput} icon={ faEyeSlash }/>
        </View>
      </View>            
      <View style={styles.containerInfo2}>
        <Text style={styles.textInfo}>Insira o nova email abaixo</Text>
      </View>
      <View style={styles.changeEmailInputs2}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} placeholder="Email" placeholderTextColor='#6f7075' keyboardType='email-address'/>
        </View>
        <View style={ styles.changeEmailActions }>
          <TouchableOpacity style={ styles.changeEmailButton } onPress={() => navigation.navigate('ChangeEmailVerification')}>
             <Text style={styles.textInput}>Verificar Email</Text> 
            </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

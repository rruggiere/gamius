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


type emailVerificationScreenProp = StackNavigationProp<RootStackParamList, 'EmailVerification'>;

export default function EmailVerification() {
  const navigation = useNavigation<emailVerificationScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.emailVerification}>
        <Text style={styles.text}>Verificação de Email</Text>
      </View>       
      <View style={styles.containerInfo}>
          <Text style={styles.info}>Acabamos de enviar o código de verificação para seu e-mail, verifique-o e digite abaixo</Text>
      </View>
      <View style={styles.emailVerificationInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} keyboardType='numeric' maxLength={1}/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} keyboardType='numeric' maxLength={1}/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} keyboardType='numeric' maxLength={1}/>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textInsideInput} keyboardType='numeric' maxLength={1}/>
        </View>
      </View>
      <View>
        <View style={styles.containerInfoTimer}>
          <Text style={styles.infoTimer}>Reenviar em 0:30</Text>
        </View>
        <View style={ styles.emailVerificationActions }>
          <TouchableOpacity style={ styles.emailVerificationButton } onPress={() => navigation.navigate('UserMenu')}>
             <Text style={styles.textInput}>Atualiza Email</Text> 
            </TouchableOpacity>
        </View>   
      </View>
    </View>
  );
}

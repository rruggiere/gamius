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

import logoGamiusImg from '../../../assets/splash.png';

type signInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export default function SignIn() {
  const navigation = useNavigation<signInScreenProp>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={logoGamiusImg} />
        <Text style={styles.text}>GAMIUS</Text>
      </View>
      <View style={styles.siginInputs}>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textLogin}>USER</TextInput>
        </View>
        <View style={styles.containerTextInput}>
          <TextInput style={styles.textLogin}>PASSWORD</TextInput>
        </View>
        <View style={ styles.signinActions }>
          <Text style={styles.forgtPassword}> Forgot password?</Text>
          <TouchableOpacity style={ styles.signinButton } onPress={() => navigation.navigate('MainTab')}>
             <Text style={styles.textInput}>SIGN IN</Text> 
            </TouchableOpacity>
        </View>
        <View style={styles.containerSignUp}>
          <Text style={styles.forgtPassword}>Don't have an account? </Text>
          <Text style={styles.signUpText}>Sign Up!</Text>  
        </View>       
      </View>

    </View>
  );
}

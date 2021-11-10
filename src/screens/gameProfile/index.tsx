import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCloudSun,faSun,faMoon,faCloudMoon } from '@fortawesome/free-solid-svg-icons';

import topIcon from '../../assets/topLane.png';
import topIcon_disabled from '../../assets/topLane_disabled.png';
import jungleIcon from '../../assets/jungleLane.png';
import jungleIcon_disabled from '../../assets/jungleLane_disabled.png';
import midIcon from '../../assets/middleLane.png';
import midIcon_disabled from '../../assets/middleLane_disabled.png';
import adcIcon from '../../assets/adcLane.png';
import adcIcon_disabled from '../../assets/adcLane_disabled.png';
import suppIcon from '../../assets/supportLane.png';
import suppIcon_disabled from '../../assets/supportLane_disabled.png';


type gameProfileScreenProp = StackNavigationProp<RootStackParamList, 'GameProfile'>;

export default function GameProfile() {
  const navigation = useNavigation<gameProfileScreenProp>();

  return (
    <View style={styles.container}>      
      <Text style={styles.text}>Perfil do Jogo</Text>
      <View style={styles.subContainer}>          
        <Text style={styles.textTitle}>Nome do Invocador</Text>
        <View style={styles.containerNickname}>
          <View style={styles.sectionInputNickname}>
           <TextInput style={[styles.textInsideInput]} placeholder="iCKzT" placeholderTextColor='#6f7075'/> 
          </View>
          <View style={styles.sectionbuttonEditNickname}>
            <TouchableOpacity style={ styles.editButton } >
                <Text style={styles.textInput}>Editar Nome</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.subContainer}>          
        <Text style={styles.textTitle}>Nota do Jogador</Text>
        <View style={styles.containerDescription}>
          <TextInput style={styles.textInsideInput} multiline numberOfLines={4} editable maxLength={130} placeholder="Main sup, buscando atiradores para jogar solo/duo" placeholderTextColor='#6f7075'/>
        </View>
      </View>
      <View style={styles.containerRole}> 
        <View style={styles.containerRoleSection}>
          <Text style={styles.textTitle}>1° Posição:</Text>
          <View style={styles.roleOptionSection}>
            <View style={styles.roleOption}>                                  
              <Image style={styles.laneIcon} source={topIcon_disabled} />
              <Text style={styles.roleTitle}>Topo</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={jungleIcon_disabled} />
              <Text style={styles.roleTitle}>Selva</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={midIcon_disabled} />
              <Text style={styles.roleTitle}>Meio</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={adcIcon_disabled} />
              <Text style={styles.roleTitle}>Atirador</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={suppIcon} />
              <Text style={styles.roleTitle}>Suporte</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerRole}> 
        <View style={styles.containerRoleSection}>
          <Text style={styles.textTitle}>2° Posição:</Text>
          <View style={styles.roleOptionSection}>
            <View style={styles.roleOption}>                                  
              <Image style={styles.laneIcon} source={topIcon_disabled} />
              <Text style={styles.roleTitle}>Topo</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={jungleIcon_disabled} />
              <Text style={styles.roleTitle}>Selva</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={midIcon} />
              <Text style={styles.roleTitle}>Meio</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={adcIcon_disabled} />
              <Text style={styles.roleTitle}>Atirador</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={suppIcon_disabled} />
              <Text style={styles.roleTitle}>Suporte</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerTime}>
        <View style={styles.containerTimeSection}>
          <Text style={styles.textTitle}>Horários:</Text>  
          <View style={styles.timeOptionSection}>
            <View style={styles.subContainerTimeSection}>
                <FontAwesomeIcon style={[styles.iconMenuTime]} icon={ faCloudSun } size={ 30 } />
                <Text style={[styles.textTitleTime]}>Manhã</Text>
            </View>
            <View style={styles.subContainerTimeSection}>
                <FontAwesomeIcon style={[styles.iconMenuTime]} icon={ faSun } size={ 30 } />
                <Text style={[styles.textTitleTime]}>Tarde</Text>
            </View>
            <View style={styles.subContainerTimeSection}>
                <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={ faMoon } size={ 30 } />
                <Text style={[styles.textTitleTime, styles.selectedTime]}>Noite</Text>
            </View>
            <View style={styles.subContainerTimeSection}>
                <FontAwesomeIcon style={[styles.iconMenuTime]} icon={ faCloudMoon } size={ 30 } />
                <Text style={[styles.textTitleTime]}>Madrugada</Text>
            </View>
          </View>
        </View>   
      </View>   
      <View style={ styles.buttonActions }>
        <TouchableOpacity style={ styles.saveButton } onPress={() => navigation.navigate('UserMenu')}>
          <Text style={styles.textInput}>Salvar</Text> 
        </TouchableOpacity>
      </View> 
    </View>
  );
}

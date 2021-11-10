import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import DropDownPicker from 'react-native-dropdown-picker';
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


type filterProfileScreenProp = StackNavigationProp<RootStackParamList, 'FilterProfile'>;

export default function FilterProfile() {

  const navigation = useNavigation<filterProfileScreenProp>();

  const [openMin, setOpenMin] = useState(false);
  const [openMax, setOpenMax] = useState(false);
  const [valueMin, setValueMin] = useState(null);
  const [valueMax, setValueMax] = useState(null);
  const [items, setItems] = useState([
    {label: 'Ferro', value: 'ferro'},
    {label: 'Prata', value: 'prata'},
    {label: 'Ouro', value: 'ouro'},    
    {label: 'Platina', value: 'platina'},
    {label: 'Diamante', value: 'diamante'},
    {label: 'Mestre', value: 'mestre'},
    {label: 'Grandmestre', value: 'grandmestre'},
    {label: 'Challenger', value: 'challenger'}
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filtros</Text>
      <View style={styles.containerFilterRank}>
        <View style={[styles.filterRankButton, styles.marginLeft]}>
          <TouchableOpacity style={[styles.rankButton, styles.rankButtonLeft]}>
            <Text style={styles.textInput}>Ranked Solo</Text> 
          </TouchableOpacity>
        </View>
        <View style={[styles.filterRankButton, styles.marginRight]}>
          <TouchableOpacity style={[styles.rankButton, styles.rankButtonRight, styles.rankButtonDeselected]}  >
            <Text style={styles.textInput}>Ranked Flex</Text> 
          </TouchableOpacity>
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
              <Image style={styles.laneIcon} source={adcIcon} />
              <Text style={styles.roleTitle}>Atirador</Text>
            </View>
            <View style={styles.roleOption}>
              <Image style={styles.laneIcon} source={suppIcon_disabled} />
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
              <Image style={styles.laneIcon} source={jungleIcon} />
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
              <Image style={styles.laneIcon} source={suppIcon_disabled} />
              <Text style={styles.roleTitle}>Suporte</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerRank}>
        <View style={styles.containerRankSection}>          
          <Text style={styles.textTitle}>Rank Minímo:</Text>
          <View style={styles.rankDropDown}>
            <DropDownPicker
              open={openMin}
              value={valueMin}
              items={items}
              setOpen={setOpenMin}
              setValue={setValueMin}
              setItems={setItems}
              placeholder='Platina'
              theme="DARK"
            />
          </View>
        </View>
      </View>
      <View style={styles.containerRank}>
        <View style={styles.containerRankSection}>          
          <Text style={styles.textTitle}>Rank Maxímo:</Text>
          <View style={styles.rankDropDown}>
            <DropDownPicker
              open={openMax}
              value={valueMax}
              items={items}
              setOpen={setOpenMax}
              setValue={setValueMax}
              setItems={setItems}
              placeholder='Diamante'
              theme="DARK"
            />
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
        <TouchableOpacity style={ styles.filterButton } onPress={() => navigation.navigate('MainTab')}>
          <Text style={styles.textInput}>Buscar</Text> 
        </TouchableOpacity>
      </View> 
    </View>
  );
}

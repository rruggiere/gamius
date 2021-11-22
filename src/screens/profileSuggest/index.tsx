import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../stacks/MainTab/rootTabParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH, faCloudSun, faSun, faMoon, faCloudMoon, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import accept_icon from '../../assets/button-withdraw-accept.png'
import over_icon from '../../assets/button-withdraw-over.png'
import sivir_icon from '../../assets/sivir_profileicon.png'

import platIcon from '../../assets/platinumRank.png';
import goldIcon from '../../assets/goldRank.png';
import adcIcon from '../../assets/adcLane.png';
import topIcon from '../../assets/topLane.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../stacks/MainStack/rootStackParams';
import { FirstScreen } from '../../components/renderLikeScreens/FirstScreen';
import { SecondScreen } from '../../components/renderLikeScreens/SecondScreen';
import { ThirdScreen } from '../../components/renderLikeScreens/ThirdScreen';
import { ConfirmationModal } from '../../components/confirmationModal';

type ProfileSuggestProps = StackNavigationProp<RootStackParamList, 'ProfileSuggest'>

export function ProfileSuggest() {
    const navigation = useNavigation<ProfileSuggestProps>();
    const [shouldShowFirst, setShouldShowFirst] = useState(true); 
    const [shouldShowSecond, setShouldShowSecond] = useState(false); 
    const [shouldShowThird, setShouldShowThird] = useState(false); 
    const [logOutConfrimationVisible, setLogoutConfirmation] = useState(false);
    
    return (     
        <View style={[{width: '100%'}, {height: '100%'}]}>        
        <ConfirmationModal
                textModal="Você encontrou um duo! Gostaria de iniciar uma conversa com Reinaldo?"
                firstOptionText="Sim"
                secondOptionText="Não"
                isVisible={logOutConfrimationVisible}              
                onClose={() => { setLogoutConfirmation(false); setShouldShowThird(true); setShouldShowSecond(false);}}  
                onPress={() => navigation.navigate('SignIn')}              
            />
           { shouldShowFirst ? (<FirstScreen visibleState={()=> { setShouldShowFirst(false); setShouldShowSecond(true) }} />) : null }   
           { shouldShowSecond ? (<SecondScreen visibleState={()=> { setLogoutConfirmation(true) }} />) : null }   
           { shouldShowThird ? (<ThirdScreen visibleState={()=> {} } />) : null }            
        </View>
    );
}
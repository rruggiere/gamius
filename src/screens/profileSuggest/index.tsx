import React from 'react';
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

import userDefault from '../../assets/userDefault.png'

import diamondPic from '../../assets/diamond.png';
import midIcon from '../../assets/middleLane.png';
import suppIcon from '../../assets/supportLane.png';
import declineIcon from '../../assets/declined.png';
import likeIcon from '../../assets/gamePad.png';
import hourIcon from '../../assets/clock.png';
import moreOptions from '../../assets/more-options.png';

type ProfileSuggestProps = BottomTabNavigationProp<RootTabParamList, 'ProfileSuggest'>

export function ProfileSuggest() {
    const navigation = useNavigation<ProfileSuggestProps>();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress = {() => navigation.navigate('UserMenu')}>
            <View style={styles.optionMenuIcon}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faSlidersH } size={ 30 } />
            </View>
            </TouchableOpacity>
            <View style={styles.containerCard}>
                <View style={styles.containerProfilePicture}>
                    <Image style={styles.profilePicture} source={userDefault} />
                </View>
                <View style={styles.containerProfileName}>
                    <Text style={styles.textUserName}>Rodriguinho Silva, 25</Text>
                </View>
                <View style={styles.containerProfileDescription}>                    
                    <Text style={styles.textUserDescription}>"Olá, estou procurando alguém para jogar solo duo!"</Text>
                </View>
                {/* <View style={styles.containerTitleSection}>
                    <View style={styles.lineTitleSection}></View>
                    <Text style={styles.textTitleSection}>ELO</Text>
                </View> */}
                <View style={styles.containerEloSection}>
                    <View style={styles.containerEloSolo}>
                        <View><Text style={styles.textTitleElo}>Solo</Text></View>
                        <View><Image style={styles.eloIcon} source={diamondPic} /></View>
                        <View><Text style={styles.textDescriptionElo}>Diamente 1</Text></View>
                    </View>
                    <View style={styles.containerEloFlex}>                        
                        <View><Text style={styles.textTitleElo}>Flex</Text></View>
                        <View ><Image style={styles.eloIcon} source={diamondPic} /></View>
                        <View><Text style={styles.textDescriptionElo}>Diamante 4</Text></View>
                    </View>
                    <View style={styles.containerRoles}>                        
                        <Image style={styles.laneIcon} source={midIcon} />
                        <Image style={styles.laneIcon} source={suppIcon} />
                    </View>
                </View>
                <View style={styles.containerTimeSection}>                    
                    <View style={[styles.containerTitleSection]}>
                        <Text style={styles.textTitleSection}>Horários</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={styles.iconMenuTime} icon={ faCloudSun } size={ 30 } />
                        <Text style={styles.textTitleTime}>Manhã</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={styles.iconMenuTime} icon={ faSun } size={ 30 } />
                        <Text style={styles.textTitleTime}>Tarde</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={ faMoon } size={ 30 } />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Noite</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={ faCloudMoon } size={ 30 } />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Madrugada</Text>
                    </View>
                </View>
                <View style={styles.containerVoteSection}>
                    <View style={styles.containerVote}>               
                        <View style={styles.iconMenuVoteSectionDecline}><FontAwesomeIcon style={[styles.iconMenuVote]} icon={ faTimesCircle } size={ 60 } /></View>        
                    </View>
                    <View style={styles.containerVote}>
                        <View style={styles.iconMenuVoteSectionAccept}><FontAwesomeIcon style={[styles.iconMenuVote]} icon={ faCheckCircle } size={ 60 } /></View>
                    </View>
                </View>
            </View>

            {/* <View style={styles.playerGameInfo}>
                <View style={styles.eloContainer}>
                    <Image style={styles.eloIcon} source={diamondPic} />
                    <Text style={styles.eloClassification}>DIAMANTE 4</Text>
                    <Text style={styles.eloInfo}>50 PDL | Taxa de vitória 58%</Text>
                </View>
                <View style={styles.lanesContainer}>
                    <Image style={styles.laneIcon} source={midIcon} />
                    <Image style={styles.laneIcon} source={suppIcon} />
                </View>
            </View>
            <View style={styles.playerProfileInfo}>
                <Text style={styles.playerNick}>FAKER</Text>
                <Text style={styles.playerGeneralInfo}>Lee Sang-hyeok, 25</Text>
                <View style={styles.hourInfoContainer}>
                    <Image style={styles.hourIcon} source={hourIcon} />
                    <Text style={styles.hourInfo}>18h às 23h</Text>
                </View>
                <Text style={styles.playerBio}>Recém contratado pela Pain buscando duos para a soloQ já que o brtt não joga.</Text>
                <View style={styles.matchOptions}>
                    <TouchableOpacity>
                        <Image style={styles.declineIcon} source={declineIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.likeIcon} source={likeIcon} />
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    );
}
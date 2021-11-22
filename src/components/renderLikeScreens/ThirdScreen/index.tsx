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
import { RootTabParamList } from '../../../stacks/MainTab/rootTabParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSlidersH, faCloudSun, faSun, faMoon, faCloudMoon, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import accept_icon from '../../../assets/button-withdraw-accept.png'
import over_icon from '../../../assets/button-withdraw-over.png'
import sivir_icon from '../../../assets/Gemstone_Poro_profileicon.png'

import platIcon from '../../../assets/platinumRank.png';
import goldIcon from '../../../assets/goldRank.png';
import adcIcon from '../../../assets/topLane.png';
import topIcon from '../../../assets/supportLane.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../stacks/MainStack/rootStackParams';

type ProfileSuggestProps = StackNavigationProp<RootStackParamList, 'ProfileSuggest'>
type Props = {
    visibleState: () => void;
}
export function ThirdScreen({ visibleState }: Props) {
    const navigation = useNavigation<ProfileSuggestProps>();

    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <View style={styles.headerContainer}>
                    <View style={styles.containerPicture}>
                        <View style={styles.containerProfilePicture}>
                            <Image style={styles.profilePicture} source={sivir_icon} />
                        </View>
                    </View>
                    <View style={styles.optionMenuIcon}>
                        <TouchableOpacity onPress={() => navigation.navigate('FilterProfile')}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={faSlidersH} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerProfileName}>
                    <Text style={styles.textUserName}>Jhonatan Goulart, 23</Text>
                </View>
                <View style={styles.containerProfileDescription}>
                    <Text style={styles.textUserDescription}>"Jogo no top, porém tento jogar de suporte também."</Text>
                </View>
                <View style={styles.containerEloSection}>
                    <View style={styles.containerEloSolo}>
                        <View><Text style={styles.textTitleElo}>Solo</Text></View>
                        <View><Image style={styles.eloIcon} source={goldIcon} /></View>
                        <View><Text style={styles.textDescriptionElo}>Ouro 2</Text></View>
                    </View>
                    <View style={styles.containerEloFlex}>
                        <View><Text style={styles.textTitleElo}>Flex</Text></View>
                        <View ><Image style={styles.eloIcon} source={goldIcon} /></View>
                        <View><Text style={styles.textDescriptionElo}>Ouro 4</Text></View>
                    </View>
                    <View style={styles.containerRoles}>
                        <Image style={styles.laneIcon} source={adcIcon} />
                        <Image style={styles.laneIcon} source={topIcon} />
                    </View>
                </View>
                <View style={styles.containerTimeSection}>
                    <View style={[styles.containerTitleSection]}>
                        <Text style={styles.textTitleSection}>Horários</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={faCloudSun} size={30} />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Manhã</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={faSun} size={30} />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Tarde</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={faMoon} size={30} />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Noite</Text>
                    </View>
                    <View style={styles.subContainerTimeSection}>
                        <FontAwesomeIcon style={[styles.iconMenuTime, styles.selectedTime]} icon={faCloudMoon} size={30} />
                        <Text style={[styles.textTitleTime, styles.selectedTime]}>Madrugada</Text>
                    </View>
                </View>
                <View style={styles.containerVoteSection}>
                    <View style={styles.containerVote}>
                        <TouchableOpacity onPress={visibleState} style={styles.iconMenuVoteSectionDecline}>
                            {/* <FontAwesomeIcon style={[styles.iconMenuVote]} icon={ faTimesCircle } size={ 60 } /> */}
                            <Image style={styles.imageMenuVote} source={over_icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerVote}>
                        <TouchableOpacity onPress={visibleState} style={styles.iconMenuVoteSectionAccept}>
                            {/* <FontAwesomeIcon style={[styles.iconMenuVote]} icon={ faCheckCircle } size={ 60 } />                             */}
                            <Image style={styles.imageMenuVote} source={accept_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
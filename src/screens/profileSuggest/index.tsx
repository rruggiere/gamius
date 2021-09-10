import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';


import diamondPic from '../../assets/diamond.png';
import midIcon from '../../assets/middleLane.png';
import suppIcon from '../../assets/supportLane.png';
import declineIcon from '../../assets/declined.png';
import likeIcon from '../../assets/gamePad.png';
import hourIcon from '../../assets/clock.png';
import moreOptions from '../../assets/more-options.png';

export function ProfileSuggest() {
    const diamondArray = ['#476cbc', '#202539', '#3957a2', '#202539'];
    return (
        <View style={styles.container}>
            <LinearGradient colors={diamondArray} style={styles.gradientContainer}>
                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.moreOptions}>
                        <Image style={styles.moreOptionsIcon} source={moreOptions} />
                    </TouchableOpacity>
                    <View style={styles.playerGameInfo}>
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
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
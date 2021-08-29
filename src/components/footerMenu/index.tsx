import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import userWhite from '../../assets/userWhite.png'
import gamePad from '../../assets/two-players.png'
import message from '../../assets/message.png'
import logout from '../../assets/logout.png'

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'FooterMenu'>;

export function FooterMenu({navigationA}: any) {
    const navigation = useNavigation<authScreenProp>();
    const goTo = (screenName: string) => {
        navigation.navigate('SignIn');
    }
    return (
        <View style={styles.iconsContainer}>
            <TouchableOpacity
                onPress={() => goTo('UserMenu')}
                style={styles.menuButton}>
                <Image style={styles.icon} source={userWhite} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <Image style={styles.icon} source={gamePad} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('ProfileSuggest')}
                style={styles.buttonCenter}>
                <Image style={styles.iconCenter} source={gamePad} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('UserMenu')}
                style={styles.menuButton}>
                <Image style={styles.icon} source={message} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('UserMenu')}
                style={styles.menuButton}>
                <Image style={styles.icon} source={logout} />
            </TouchableOpacity>
        </View>
    );
};
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import userWhite from '../../assets/userWhite.png';
import twoGamepad from '../../assets/two-players.png';
import gamePad from '../../assets/gamePad.png';
import message from '../../assets/message.png';
import logout from '../../assets/logout.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faComments, faGamepad, faDice } from '@fortawesome/free-solid-svg-icons';

export function FooterMenu({ state, navigation }: any) {  
    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }
    return (
        <View style={styles.iconsContainer}>
            <TouchableOpacity
                onPress={() => goTo('UserMenu')}
                activeOpacity={0.7}
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faBars } size={ 28 } />
                {/* <Image style={[styles.icon, {opacity : state.index === 1? 1 : 0.5}]} source={userWhite} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faGamepad } size={ 33 } />
                {/* <Image style={[styles.icon, {opacity : state.index === 2? 1 : 0.5}]} source={gamePad} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('ProfileSuggest')}
                activeOpacity={0.9}
                style={styles.buttonCenter}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faDice } size={ 37 } />
                {/* <Image style={[styles.iconCenter, {opacity : state.index === 0? 1 : 0.5}]} source={twoGamepad} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}               
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faComments } size={ 33 } />
                {/* <Image style={[styles.icon, {opacity : state.index === 3? 1 : 0.5}]} source={message} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faUser } size={ 28 } />       
                {/* <Image style={[styles.icon, {opacity : state.index === 4? 1 : 0.5}]} source={logout} /> */}
            </TouchableOpacity>
        </View>
    );
};
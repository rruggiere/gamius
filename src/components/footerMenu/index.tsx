import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
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
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('GameProfile')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faGamepad } size={ 33 } />      
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('ProfileSuggest')}
                activeOpacity={0.9}
                style={[styles.buttonCenter]}>
                <View style={styles.buttonCenterBorder}><FontAwesomeIcon style={styles.iconMenu} icon={ faDice } size={ 37 } /></View>             
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('Chat')}             
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faComments } size={ 33 } />              
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('EditPerfil')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faUser } size={ 28 } />      
            </TouchableOpacity>
        </View>
    );
};
import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faComments, faGamepad, faDice } from '@fortawesome/free-solid-svg-icons';

export function FooterMenu({ state, navigation }: any) {
    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }
    const menuFocus = (index: number) => {
        if (state.index === index)
            return 1;
        else
            return 0.8;
    }

    return (
        <View style={styles.iconsContainer}>
            <TouchableOpacity
                onPress={() => goTo('UserMenu')}
                activeOpacity={0.7}
                style={styles.menuButton}>
                <FontAwesomeIcon style={[styles.iconMenu, { opacity: menuFocus(1) }]} icon={faBars} size={28} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={[styles.iconMenu, { opacity: menuFocus(2) }]} icon={faGamepad} size={33} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('ProfileSuggest')}
                activeOpacity={1}
                style={styles.buttonCenter}>
                <FontAwesomeIcon style={[styles.iconMenu, { opacity: menuFocus(0) }]} icon={faDice} size={37} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={[styles.iconMenu, { opacity: menuFocus(3) }]} icon={faComments} size={33} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => goTo('NotImplemented')}
                style={styles.menuButton}>
                <FontAwesomeIcon style={[styles.iconMenu, { opacity: menuFocus(4) }]} icon={faUser} size={28} />
            </TouchableOpacity>
        </View>
    );
};
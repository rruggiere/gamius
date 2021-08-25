import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { styles } from './styles';
import settingsIcon from '../../assets/userWhite.png'
import editProfile from '../../assets/gamePad.png'
import shareApp from '../../assets/message.png'
import logout from '../../assets/logout.png'
import userDefault from '../../assets/like.png'
export function FooterMenu() {
    return (
        <View style={styles.container}>
            <View style={[styles.leftMenu, styles.iconsContainer]}>
                <Image style={[styles.iconConfig, styles.icon]} source={settingsIcon} />
                <Image style={[styles.iconConfig, styles.icon]} source={editProfile} />
            </View>
            
            <View style={[styles.rightMenu, styles.iconsContainer]}>
                <Image style={[styles.iconRight, styles.icon]} source={shareApp} />
                <Image style={[styles.iconRight, styles.icon]} source={logout} />
            </View>
            <View style={styles.iconCenterContainer}>
                <Image style={[styles.icon, styles.iconCenter]} source={userDefault} />
            </View>
        </View>
    );
};
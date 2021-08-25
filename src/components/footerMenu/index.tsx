import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import { styles } from './styles';
import userWhite from '../../assets/userWhite.png'
import gamePad from '../../assets/gamePad.png'
import message from '../../assets/message.png'
import logout from '../../assets/logout.png'

export function FooterMenu() {
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <Image style={styles.icon} source={userWhite} />
                    <Image style={styles.icon} source={gamePad} />
                </View>
                <View style={styles.rightIcons}>
                    <Image style={styles.icon} source={message} />
                    <Image style={styles.icon} source={logout} />
                </View>               
            </View>
            <View style={styles.iconCenter}>
                    <Image style={styles.icon} source={gamePad} />
                </View>
        </View>
    );
};
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { styles } from '../matchIcon/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import imagem from '../../assets/Gemstone_Poro_profileicon.png';

type Props = {
    icon: IconDefinition;
    userName: string;
}
export function MatchIcon({ icon, userName }: Props) {


    return (
        <View style={styles.iconContainer}>
            <View style={styles.matchIcon}>
                <Image style={styles.imageIcon} source={imagem} />
            </View>
            <View style={styles.matchText}>
                <Text style={styles.defaultText}> {userName} </Text>
            </View>            
        </View>
    );
}
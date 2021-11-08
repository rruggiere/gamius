import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../matchIcon/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
    icon: IconDefinition;
    userName: string;
}
export function MatchIcon({ icon, userName }: Props) {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.matchIcon}>
                <FontAwesomeIcon style={styles.icons} icon={icon} size={28} />
            </View>
            <Text style={styles.defaultText}>
                {userName}
            </Text>
        </View>
    );
}
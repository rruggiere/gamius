import React from 'react';
import {
    View,
    Text,
    Image,
    ImageProps
} from 'react-native';
import { styles } from '../matchIcon/styles';

type Props = ImageProps & {
    userName: string;
}

export function MatchIcon({ source, userName }: Props) {
    return (
        <View style={styles.iconContainer}>
            <View style={styles.matchIcon}>
                <Image style={styles.imageIcon} source={source} />
            </View>
            <View style={styles.matchText}>
                <Text style={styles.defaultText}> {userName} </Text>
            </View>            
        </View>
    );
}
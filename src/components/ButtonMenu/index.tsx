import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageProps
} from 'react-native';
import { styles } from './styles';

type Props = ImageProps & {
    title: string;
}

export function ButtonMenu({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.baseMenuButton} 
        activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
                <Image style={styles.menuIcon} {...rest} />
            </View>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
}
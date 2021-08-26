import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageProps,
    TouchableOpacityProps
} from 'react-native';
import { styles } from './styles';

type Props = ImageProps & TouchableOpacityProps & {
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
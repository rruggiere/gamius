import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    Image
} from 'react-native';
import { styles } from '../conversationPreview/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MatchIcon } from '../../components/matchIcon';
import { IconDefinition, faCircle } from '@fortawesome/free-solid-svg-icons';

import nocturne_icon from '../../assets/nocturne_iconprofile.png';

type Props = TouchableOpacityProps & {
    icon: IconDefinition;
    userName: string;
    lastMessage: string;
    messageNotRead: boolean;   
}

export function ConversationPreview({ icon, userName, messageNotRead, lastMessage, onPress }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
            <View style={styles.optionMenu}>
                <View style={styles.optionMenuIcon}>
                <View style={styles.containerProfilePicture}>
                    <Image style={styles.profilePicture} source={nocturne_icon} />
                </View>
                </View>
                <View style={styles.optionMenuText}>
                    <Text style={styles.textMenu}>{userName}</Text>
                    <View style={styles.containerMensage}><Text style={styles.textMensage}>{lastMessage}</Text></View>
                </View>
                <View style={styles.optionMenuGo}>
                    {messageNotRead ? <FontAwesomeIcon style={styles.iconMenu} icon={ faCircle } size={ 10 } color='orange' /> : null}
                </View>
            </View>
        </TouchableOpacity>

    );
}
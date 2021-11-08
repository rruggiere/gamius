import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { styles } from '../conversationPreview/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MatchIcon } from '../../components/matchIcon';
import { IconDefinition, faCircle } from '@fortawesome/free-solid-svg-icons';

type Props = TouchableOpacityProps & {
    icon: IconDefinition;
    userName: string;
    lastMessage: string;
    messageNotRead: boolean;   
}

export function ConversationPreview({ icon, userName, messageNotRead, lastMessage, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.conversationPreview}
            activeOpacity={0.7}
            onPress={onPress}
            >
            <MatchIcon icon={icon} userName="" />
            <View style={styles.textContainer}>
                <Text style={[styles.defaulText, { fontWeight: "bold" }]}>
                    {userName}
                </Text>
                <Text style={styles.defaulText}>
                    {lastMessage}
                </Text>
            </View>
            <View style={styles.scrollIcons}>
                {messageNotRead ? <FontAwesomeIcon style={styles.icons} icon={faCircle} size={10} color='orange' /> : null}
            </View>
        </TouchableOpacity>

    );
}
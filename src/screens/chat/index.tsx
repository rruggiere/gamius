import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../chat/styles';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MatchIcon } from '../../components/matchIcon';
import { ConversationPreview } from '../../components/conversationPreview';
import { RootStackParamList } from '../../stacks/MainStack/rootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

type conversationScreenProp = StackNavigationProp<RootStackParamList, 'ConversationScreen'>;

export function Chat() {
    
    const navigation = useNavigation<conversationScreenProp>();

    return (
        <View style={styles.chatContainer}>
            <Text style={[styles.defaulText, { fontWeight: "bold", paddingLeft: 5 }]}>
                Novos duos
            </Text>
            <View style={styles.matchsContainer}>
                <MatchIcon icon={faUser} userName="Faker" />
            </View>
            <View style={styles.conversationsContainer}>
                <Text style={[styles.defaulText, { fontWeight: "bold", paddingLeft: 5 }]}>
                    Conversas
                </Text>
                <ConversationPreview
                    icon={faUser}
                    userName="PNG Kami"
                    messageNotRead={true}
                    lastMessage="Teste mensagem"
                    onPress = {()=> navigation.navigate('ConversationScreen') }
                />
            </View>
        </View>
    );
}
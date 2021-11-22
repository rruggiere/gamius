import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from '../chat/styles';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MatchIcon } from '../../components/matchIcon';
import { ConversationPreview } from '../../components/conversationPreview';
import { RootStackParamList } from '../../stacks/MainStack/rootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import imagem from '../../assets/zed_iconprofile.png';

type conversationScreenProp = StackNavigationProp<RootStackParamList, 'ConversationScreen'>;

export function Chat() {
    
    const navigation = useNavigation<conversationScreenProp>();

    return (
        <View style={styles.container}>
            <View style={styles.contatinerNewMatches}>                
                <Text style={styles.textTitle}>Novos Matches:</Text>
                <View style={styles.contatinerNewMatchesItem}>
                    <TouchableOpacity  onPress = {()=> navigation.navigate('ConversationScreenSecond')} style={styles.matchsContainer}>
                        <MatchIcon source={imagem} userName="Reinaldo" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contatinerChat}> 
                <Text style={styles.textTitle}>Conversas:</Text>
                <ConversationPreview
                    icon={faUser}
                    userName="Alexandre"
                    messageNotRead={false}
                    lastMessage="Estou te aguardando"
                    onPress = {()=> navigation.navigate('ConversationScreen') }
                />
            </View>
        </View>
    );
}
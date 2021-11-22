import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from '../conversation/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { RootTabParamList } from '../../stacks/MainTab/rootTabParams';

type conversationScreenProp = StackNavigationProp<RootTabParamList, 'Chat'>;

export function ConversationScreen2() {
    const navigation = useNavigation<conversationScreenProp>();
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.dialogContainer}>
                {shouldShow ? (
                    <View style={styles.issuerBaloon}>
                        <Text>Oi, tudo bem? Vamos marcar de jogar?</Text>
                        <View style={styles.iconChatDirectionRight}>
                            <FontAwesomeIcon style={styles.iconDirectionRight} icon={faPlay} size={20} />
                        </View>
                    </View>) : null}
            </View>

            <View style={styles.containerInputChat}>
                <View style={styles.containerTextInput}>
                    <TextInput style={styles.textInsideInput} placeholder="Digite um texto" placeholderTextColor='#6f7075' />
                </View>
                <TouchableOpacity onPress={() => setShouldShow(true)} style={styles.iconChat}>
                    <FontAwesomeIcon style={styles.icon} icon={faPaperPlane} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
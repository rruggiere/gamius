import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { styles } from '../conversation/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { RootTabParamList } from '../../stacks/MainTab/rootTabParams';

type conversationScreenProp = StackNavigationProp<RootTabParamList, 'Chat'>;  

export function ConversationScreen() {
    const navigation = useNavigation<conversationScreenProp>();
    return (
        <View style={styles.container}>
            <View style={styles.dialogContainer}>
                <View style={styles.receiverBaloon}>
                    <Text>Oie, estava procurando alguém para jogar</Text>
                    <View style={styles.iconChatDirectionLeft}>
                        <FontAwesomeIcon style={styles.iconDirectionLeft} icon={ faPlay } size={ 20 } />
                    </View>
                </View>
                <View style={styles.issuerBaloon}>
                    <Text>Olá, eu também, vai jogar agora?</Text>
                    <View style={styles.iconChatDirectionRight}>
                        <FontAwesomeIcon style={styles.iconDirectionRight} icon={ faPlay } size={ 20 } />
                    </View>
                </View>
                <View style={styles.receiverBaloon}>
                    <Text>Sim, me passa seu nick para eu te adicionar</Text>
                    <View style={styles.iconChatDirectionLeft}>
                        <FontAwesomeIcon style={styles.iconDirectionLeft} icon={ faPlay } size={ 20 } />
                    </View>
                </View>
                <View style={styles.issuerBaloon}>
                    <Text>iCKzT</Text>
                    <View style={styles.iconChatDirectionRight}>
                        <FontAwesomeIcon style={styles.iconDirectionRight} icon={ faPlay } size={ 20 } />
                    </View>
                </View>
                <View style={styles.issuerBaloon}>
                    <Text>Estou te aguardando..</Text>
                    <View style={styles.iconChatDirectionRight}>
                        <FontAwesomeIcon style={styles.iconDirectionRight} icon={ faPlay } size={ 20 } />
                    </View>
                </View>
            </View>

            <View style={styles.containerInputChat}>                
                <View style={styles.containerTextInput}>
                    <TextInput style={styles.textInsideInput} placeholder="Digite um texto" placeholderTextColor='#6f7075'/>
                </View>
                <View style={styles.iconChat}>
                    <FontAwesomeIcon style={styles.icon} icon={ faPaperPlane } size={ 30 } />
                </View>
            </View>          
        </View>
    );
}
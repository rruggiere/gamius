import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from '../conversation/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';
import { theme } from "../../global/styles/theme";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { RootTabParamList } from '../../stacks/MainTab/rootTabParams';

type conversationScreenProp = StackNavigationProp<RootTabParamList, 'Chat'>;  

export function ConversationScreen() {
    const navigation = useNavigation<conversationScreenProp>();
    return (
        <View style={styles.conversationContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                    <FontAwesomeIcon style={styles.icons} icon={faArrowLeft} size={18} />
                </TouchableOpacity>
                <View style={styles.userIcon}>
                    <FontAwesomeIcon style={styles.icons} icon={faUser} size={18} />
                </View>
                <Text style={styles.defaultText}>
                    PNG Kami
                </Text>
            </View>
            <View style={styles.dialogContainer}>
                <View style={styles.receiverBaloon}>
                    <View style={styles.leftArrowOverlap}></View>
                    <Text>OLÁ AMIGO TUDO BEM AMIGO OLÁ AMIGO TUDO BEM AMIG OLÁ AMIGO TUDO BEM AMIG OLÁ AMIGO TUDO BEM AMIG</Text>
                </View>
                <View style={styles.issuerBaloon}>
                    <Text>OLÁ AMIGO TUDO BEM AMIGOLÁ AMIGO TUDO BEM AMIGOLÁ AMIGO TUDO BEM AMIGOLÁ AMIGO TUDO BEM AMIGOLÁ AMIGO TUDO BEM AMIG</Text>
                    <View style={styles.rightArrowOverlap}></View>
                </View>
            </View>
            <View style={styles.typingContainer}>
                <TextInput style={styles.dialogInput}
                    placeholder="Digite um texto"
                    placeholderTextColor={theme.colors.heading.secondary}
                />
            </View>

        </View>
    );
}
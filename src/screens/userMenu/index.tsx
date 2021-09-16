import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';
import { styles } from './styles';
import { ButtonMenu } from '../../components/ButtonMenu';
import { ConfirmationModal } from '../../components/confirmationModal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../stacks/MainStack/rootStackParams';

import userDefault from '../../assets/userDefault.png'
import settingsIcon from '../../assets/settings.png'
import editProfile from '../../assets/edit.png'
import shareApp from '../../assets/share.png'
import logout from '../../assets/logout.png'
import { State } from 'react-native-gesture-handler';

type userMenuScreenProp = StackNavigationProp<RootStackParamList, 'UserMenu'>;

export function UserMenu() {
    const navigation = useNavigation<userMenuScreenProp>();
    const [logOutConfrimationVisible, setLogoutConfirmation] = useState(false);

    return (
        <View style={styles.container}>
            <ConfirmationModal
                textModal="Deseja sair?"
                firstOptionText="Sim"
                secondOptionText="Não"
                isVisible={logOutConfrimationVisible}              
                onClose={() => setLogoutConfirmation(false)}  
                onPress={() => navigation.navigate('SignIn')}              
            />
            <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={userDefault} />
            </View>
            <Text style={styles.textUserName}>Rodriguinho Silva</Text>
            <Text style={styles.textUser}>@rodriguinho.silva</Text>
            <View style={styles.optionsContainer}>
                <ButtonMenu
                    title="account settings"
                    source={settingsIcon}
                />
                <ButtonMenu
                    title="edit profile"
                    source={editProfile}
                />
                <ButtonMenu
                    title="share app"
                    source={shareApp}
                />
                <ButtonMenu
                    title="log out"
                    source={logout}
                    onPress={() => setLogoutConfirmation(true)}
                />
            </View>
        </View>
    );
}
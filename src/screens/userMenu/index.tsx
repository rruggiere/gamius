import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar    
} from 'react-native';
import { styles } from './styles';
import { ButtonMenu } from '../../components/ButtonMenu';

//Image
import userDefault from '../../assets/userDefault.png'
import settingsIcon from '../../assets/settings.png'
import editProfile from '../../assets/edit.png'
import shareApp from '../../assets/share.png'
import logout from '../../assets/logout.png'


export default function UserMenu({ navigation }:any) {
    return (
        <View style={styles.container}>
               <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent    
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
                    onPress = {() => navigation.navigate('SignIn')}
                />
            </View>
        </View>
    );
}
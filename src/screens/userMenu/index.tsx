import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,    
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { ButtonMenu } from '../../components/ButtonMenu';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faAngleRight, faSignOutAlt, faUserEdit, faLockOpen, faBan, faEraser, faHeadset, faDice, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import userDefault from '../../assets/userDefault.png'
import settingsIcon from '../../assets/settings.png'
import editProfile from '../../assets/edit.png'
import shareApp from '../../assets/share.png'
import logout from '../../assets/logout.png'
import { ScrollView } from 'react-native-gesture-handler';

type userMenuScreenProp = StackNavigationProp<RootStackParamList, 'UserMenu'>;

export function UserMenu() {
    const navigation = useNavigation<userMenuScreenProp>();
    return (
        <View style={styles.container}>  
            <View style={styles.editPerfilContainer}>
                <TouchableOpacity onPress = {() => navigation.navigate('EditPerfil')}>
                    <FontAwesomeIcon style={styles.iconEditPerfil} icon={ faPencilAlt } size={ 25 } />
                </TouchableOpacity>
            </View>               
            <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={userDefault} />
            </View>
            <Text style={styles.textUserName}>Rodriguinho Silva</Text>
            <Text style={styles.textUser}>@rodriguinho.silva</Text>
            <View style={styles.optionsContainer}>
                <ScrollView>
                {/* Search Players */}
                <TouchableOpacity onPress = {() => navigation.navigate('MainTab')}>
                <View style={styles.optionMenu}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faDice } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Buscar Jogadores</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                {/* Nickname */}
                <TouchableOpacity onPress = {() => navigation.navigate('GameProfile')}>
                <View style={[styles.optionMenu, styles.optionMenuMarginTop]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faHeadset } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Perfil do Jogador</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                 {/* Update Perfil */}
                 {/* <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faUserEdit } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Atualizar Perfil</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View>  */}
                {/* Update Email */}
                <TouchableOpacity onPress = {() => navigation.navigate('ChangeEmail')}>
                <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faEnvelope } size={ 20 } />
                        </View>
                    </View>
                    <View style={[styles.optionMenuText]}>
                        <Text style={styles.textMenu}>Atualizar Email</Text>
                    </View>
                    <View style={[styles.optionMenuGo]}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                {/* Update Password */}
                <TouchableOpacity onPress = {() => navigation.navigate('ChangePassword')}>
                <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faLockOpen } size={ 20 } />
                        </View>
                    </View>
                    <View style={[styles.optionMenuText, styles.optionMenuBorderTopCenter]}>
                        <Text style={styles.textMenu}>Atualizar Senha</Text>
                    </View>
                    <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter]}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                {/* Blocked Users  */}
                <TouchableOpacity onPress = {() => navigation.navigate('BlockedUsers')}>
                <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faBan } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Usuários Bloqueados</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                {/* Disable Account */}
                <TouchableOpacity onPress = {() => navigation.navigate('DisableAccount')}>
                <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faEraser } size={ 20 } />
                        </View>
                    </View>
                    <View style={[styles.optionMenuText, styles.optionMenuBorderTopCenter]}>
                        <Text style={styles.textMenu}>Desativar Conta</Text>
                    </View>
                    <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter]}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                </TouchableOpacity>
                {/* Exit */}
                <TouchableOpacity onPress = {() => navigation.navigate('SignIn')}>
                <View style={[styles.optionMenu, styles.optionMenuMarginTop]} >
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faSignOutAlt } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Sair</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View>
                </TouchableOpacity>
                </ScrollView>
                {/* <ButtonMenu
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
                /> */}
            </View>
        </View>
    );
}
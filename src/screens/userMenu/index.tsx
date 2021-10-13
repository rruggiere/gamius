import React, { useState } from 'react';
import {
    View,
    Text,
    Image, 
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faAngleRight, faSignOutAlt, faUserEdit, faLockOpen, faBan, faEraser, faHeadset, faDice } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { ConfirmationModal } from '../../components/confirmationModal';
import userDefault from '../../assets/userDefault.png'

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
                 {/* Update Perfil */}
                 <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
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
                </View> 
                {/* Update Email */}
                <View style={[styles.optionMenu, styles.optionMenuCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faEnvelope } size={ 20 } />
                        </View>
                    </View>
                    <View style={[styles.optionMenuText, styles.optionMenuBorderTopCenter, styles.optionMenuBorderBottomCenter]}>
                        <Text style={styles.textMenu}>Atualizar Email</Text>
                    </View>
                    <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter, styles.optionMenuBorderBottomCenter]}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                {/* Update Password */}
                <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faLockOpen } size={ 20 } />
                        </View>
                    </View>
                    <View style={styles.optionMenuText}>
                        <Text style={styles.textMenu}>Atualizar Senha</Text>
                    </View>
                    <View style={styles.optionMenuGo}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
                {/* Blocked Users  */}
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
                {/* Disable Account */}
                <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                    <View style={styles.optionMenuIcon}>
                        <View style={styles.MenuIcon}>
                            <FontAwesomeIcon style={styles.iconMenu} icon={ faEraser } size={ 20 } />
                        </View>
                    </View>
                    <View style={[styles.optionMenuText, , styles.optionMenuBorderTopCenter]}>
                        <Text style={styles.textMenu}>Desativar Conta</Text>
                    </View>
                    <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter]}>
                        <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
                    </View>
                </View> 
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
            </View>
        </View>
    );
}
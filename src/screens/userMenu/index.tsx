import React,  { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faEnvelope,
    faAngleRight,
    faSignOutAlt,
    faLockOpen,
    faBan,
    faEraser,
    faHeadset,
    faDice,
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import supportIcon from '../../assets/support_profileicon.png';
import { ConfirmationModal } from '../../components/confirmationModal';

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
            <View style={styles.editPerfilContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('EditPerfil')}>
                    <FontAwesomeIcon style={styles.iconEditPerfil} icon={faPencilAlt} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={supportIcon} />
            </View>
            <Text style={styles.textUserName}>Igor Martins</Text>
            <Text style={styles.textUser}>@martins_igor</Text>
            <View style={styles.optionsContainer}>
                <ScrollView>
                    {/* Search Players */}
                    <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
                        <View style={styles.optionMenu}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faDice} size={20} />
                                </View>
                            </View>
                            <View style={styles.optionMenuText}>
                                <Text style={styles.textMenu}>Buscar Jogadores</Text>
                            </View>
                            <View style={styles.optionMenuGo}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Nickname */}
                    <TouchableOpacity onPress={() => navigation.navigate('GameProfile')}>
                        <View style={[styles.optionMenu, styles.optionMenuMarginTop]}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faHeadset} size={20} />
                                </View>
                            </View>
                            <View style={styles.optionMenuText}>
                                <Text style={styles.textMenu}>Perfil do Jogador</Text>
                            </View>
                            <View style={styles.optionMenuGo}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Update Email */}
                    <TouchableOpacity onPress={() => navigation.navigate('ChangeEmail')}>
                        <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faEnvelope} size={20} />
                                </View>
                            </View>
                            <View style={[styles.optionMenuText]}>
                                <Text style={styles.textMenu}>Atualizar Email</Text>
                            </View>
                            <View style={[styles.optionMenuGo]}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Update Password */}
                    <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                        <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faLockOpen} size={20} />
                                </View>
                            </View>
                            <View style={[styles.optionMenuText, styles.optionMenuBorderTopCenter]}>
                                <Text style={styles.textMenu}>Atualizar Senha</Text>
                            </View>
                            <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter]}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Blocked Users  */}
                    <TouchableOpacity onPress={() => navigation.navigate('BlockedUsers')}>
                        <View style={[styles.optionMenu, styles.optionMenuMarginTop, styles.optionMenuRadiusBottomCenter]}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faBan} size={20} />
                                </View>
                            </View>
                            <View style={styles.optionMenuText}>
                                <Text style={styles.textMenu}>Usuários Bloqueados</Text>
                            </View>
                            <View style={styles.optionMenuGo}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Disable Account */}
                    <TouchableOpacity onPress={() => navigation.navigate('DisableAccount')}>
                        <View style={[styles.optionMenu, styles.optionMenuRadiusTopCenter]}>
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faEraser} size={20} />
                                </View>
                            </View>
                            <View style={[styles.optionMenuText, styles.optionMenuBorderTopCenter]}>
                                <Text style={styles.textMenu}>Desativar Conta</Text>
                            </View>
                            <View style={[styles.optionMenuGo, styles.optionMenuBorderTopCenter]}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Exit */}
                    <TouchableOpacity onPress={() => setLogoutConfirmation(true)}>
                        <View style={[styles.optionMenu, styles.optionMenuMarginTop]} >
                            <View style={styles.optionMenuIcon}>
                                <View style={styles.MenuIcon}>
                                    <FontAwesomeIcon style={styles.iconMenu} icon={faSignOutAlt} size={20} />
                                </View>
                            </View>
                            <View style={styles.optionMenuText}>
                                <Text style={styles.textMenu}>Sair</Text>
                            </View>
                            <View style={styles.optionMenuGo}>
                                <FontAwesomeIcon style={styles.iconMenu} icon={faAngleRight} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}
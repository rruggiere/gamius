import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { styles } from './styles';
import { ButtonMenu } from '../../components/ButtonMenu';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt,faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import userDefault from '../../assets/userDefault.png'

type editPerfilScreenProp = StackNavigationProp<RootStackParamList, 'EditPerfil'>;

export function EditPerfil() {
    const navigation = useNavigation<editPerfilScreenProp>();
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}></View>
            <View style={styles.containerImage}>                
                <View style={styles.containerProfilePictureBorder}></View>
                <View style={styles.containerProfilePicture}>
                    <Image style={styles.profilePicture} source={userDefault} />
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.containerName}>                    
                    <Text style={styles.textUserName}>Rodriguinho Silva</Text>
                    <Text style={styles.textUser}>@rodriguinho.silva</Text>
                </View>                 
                <View style={styles.editPerfilContainer}>
                    <View style={ styles.singUpActions }>
                        <TouchableOpacity style={ styles.editButton } onPress={() => navigation.navigate('UserMenu')}>
                            <Text style={styles.textInput}>Editar Nome</Text> 
                        </TouchableOpacity>
                    </View> 
                </View> 
                <View style={styles.containerInput}>                
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInputIcon} placeholder="Data de Nascimento" placeholderTextColor='#6f7075' dataDetectorTypes='calendarEvent'/>
                        <FontAwesomeIcon style={styles.iconTextInput} icon={ faCalendarAlt }/>      
                    </View>                    
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="Pais" placeholderTextColor='#6f7075'/>
                    </View>                    
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="Gênero" placeholderTextColor='#6f7075'/>
                    </View>                   
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="Telefone" placeholderTextColor='#6f7075'/>
                    </View>
                    <View style={ styles.singUpActions }>
                    <TouchableOpacity style={ styles.signUpButton } onPress={() => navigation.navigate('UserMenu')}>
                        <Text style={styles.textInput}>Atualizar Perfil</Text> 
                        </TouchableOpacity>
                    </View>  
                </View>
            </View>
        </View>
    );
}
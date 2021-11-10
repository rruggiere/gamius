import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt,faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import userDefault from '../../assets/userDefault.png';
import supportIcon from '../../assets/support_profileicon.png';

type editPerfilScreenProp = StackNavigationProp<RootStackParamList, 'EditPerfil'>;

export function EditPerfil() {
    const navigation = useNavigation<editPerfilScreenProp>();
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}></View>
            <View style={styles.containerImage}>                
                <View style={styles.containerProfilePictureBorder}></View>
                <View style={styles.containerProfilePicture}>
                    <Image style={styles.profilePicture} source={supportIcon} resizeMode="cover"/>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.containerName}>                    
                    <Text style={styles.textUserName}>Igor Martins</Text>
                    <Text style={styles.textUser}>@martins_igor</Text>
                </View>                 
                <View style={styles.editPerfilContainer}>
                    <View style={ styles.singUpActions }>
                        <TouchableOpacity style={ styles.editButton } onPress={() => navigation.navigate('UserMenu')}>
                            <Text style={styles.textInput}>Editar Nome</Text> 
                        </TouchableOpacity>
                    </View> 
                </View> 
                <View style={styles.containerInput}>
                    <Text style={styles.textTitle}>Data de Nascimento:</Text>          
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInputIcon} placeholder="05/05/1997" placeholderTextColor='#6f7075' dataDetectorTypes='calendarEvent'/>
                        <FontAwesomeIcon style={styles.iconTextInput} icon={ faCalendarAlt }/>      
                    </View>
                    <Text style={styles.textTitle}>País:</Text>                     
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="Brasil" placeholderTextColor='#6f7075'/>
                    </View>    
                    <Text style={styles.textTitle}>Gênero:</Text>                 
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="Masculino" placeholderTextColor='#6f7075'/>
                    </View>  
                    <Text style={styles.textTitle}>Telefone:</Text>                  
                    <View style={styles.containerTextInput}>
                        <TextInput style={styles.textInsideInput} placeholder="31 99429-7692" placeholderTextColor='#6f7075'/>
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
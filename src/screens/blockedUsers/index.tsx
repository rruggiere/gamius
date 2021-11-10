import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../stacks/MainStack/rootStackParams';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDice,faAngleRight } from '@fortawesome/free-solid-svg-icons';


import userDefault from '../../assets/userDefault.png'


type blockedUsersScreenProp = StackNavigationProp<RootStackParamList, 'BlockedUsers'>;

export default function BlockedUsers() {
  const navigation = useNavigation<blockedUsersScreenProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuário Bloqueados</Text>
      <View style={styles.optionsContainer}>
        <ScrollView>
        <TouchableOpacity>
        <View style={styles.optionMenu}>
            <View style={styles.optionMenuIcon}>
              <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={userDefault} />
              </View>
            </View>
            <View style={styles.optionMenuText}>
                <Text style={styles.textMenu}>RodriguinhoPai</Text>
                <View style={styles.containerDate}><Text style={styles.textDateMenu}>10/07/2021</Text></View>
            </View>
            <View style={styles.optionMenuGo}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
            </View>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.optionMenu}>
            <View style={styles.optionMenuIcon}>
              <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={userDefault} />
              </View>
            </View>
            <View style={styles.optionMenuText}>
                <Text style={styles.textMenu}>Thumper</Text>
                <View style={styles.containerDate}><Text style={styles.textDateMenu}>10/07/2021</Text></View>
            </View>
            <View style={styles.optionMenuGo}>
                <FontAwesomeIcon style={styles.iconMenu} icon={ faAngleRight } size={ 20 } />
            </View>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.optionMenu}>
            <View style={styles.optionMenuIcon}>
              <View style={styles.containerProfilePicture}>
                <Image style={styles.profilePicture} source={userDefault} />
              </View>
            </View>
            <View style={styles.optionMenuText}>
                <Text style={styles.textMenu}>Kr3usk</Text>
                <View style={styles.containerDate}><Text style={styles.textDateMenu}>10/07/2021</Text></View>
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

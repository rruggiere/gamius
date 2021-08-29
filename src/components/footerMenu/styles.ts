import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    iconsContainer:{        
        height: 55,
        flexDirection: 'row',
        backgroundColor: theme.colors.background.main,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center', 
        marginTop: -500
    },
    menuButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCenter:{
        width: 75,
        height: 75,     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background.main,
        borderRadius: 37.5,
        borderWidth: 2,
        borderColor: theme.colors.background.secondary,
        marginTop: -30
    },
    icon:{
        width: 30,
        height: 30,     
    },     
    iconCenter:{
        width: 50,
        height: 50
    }
});
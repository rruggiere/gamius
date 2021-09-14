import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    iconsContainer:{        
        height: '7%',
        flexDirection: 'row',
        backgroundColor: theme.colors.backgroundButton,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center', 
        marginTop: '-50%'
    },
    menuButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCenter:{
        width: 75,
        height: 75,     
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundButton,
        borderRadius: 37.5,
        borderWidth: 5,
        borderColor: theme.colors.background.main,
        marginTop: '-5%'
    },
    icon:{
        width: 30,
        height: 30,    
        opacity: 0.5 
    },     
    iconCenter:{
        width: 50,
        height: 50,
        opacity: 0.5 
    }, 
    iconMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.background.main
    },
});
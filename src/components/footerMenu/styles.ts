import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    iconsContainer:{        
        height: '7%',
        flexDirection: 'row',
        backgroundColor: theme.colors.backgroundButton,
        borderRadius: 15,
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
        marginTop: '-4%',
        padding: '1%',
    },
    
    buttonCenterBorder:{
        width: 76,
        height: 76,     
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 37.5,
        borderWidth: 6,
        borderColor: theme.colors.background.main,
        marginTop: '-4%',
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
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({      
    container: {
        width: '100%',
        height: '100%',        
        justifyContent: 'center',
        alignItems: 'center'       
    },
    modalWindow :{
        width: 200,
        height: 120,
        backgroundColor: theme.colors.backgroundButton,        
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden'     
    },
    modalTitle:{
        height: '50%',
        justifyContent: 'center',       
        alignItems: 'center'
    },  
    buttonsLine:{
        borderRightWidth: 1,
        borderColor: 'black'
    },
    buttonsContainer:{
        height: '50%',
        flexDirection: 'row'        
    },
    confirmationButton : {     
        justifyContent: 'center',       
        alignItems: 'center',   
        width: '50%',
        height: '100%',       
        backgroundColor: theme.colors.backgroundButton,
        borderTopWidth: 1,
        borderColor: 'black'             
    }
});
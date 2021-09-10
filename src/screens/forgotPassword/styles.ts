import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        paddingTop: '5%'
    },   
    forgotPassword:{
        height: '10%'      
    },
    text: {
        color: theme.colors.heading.main,
        fontSize: 27,
        fontWeight: 'bold'
    },
    textInput: {
        color: theme.colors.heading.main,
        padding: 10             
    },
    textInsideInput:{
        color: theme.colors.heading.main,
        width: '80%'
    },
    textInsideInputIcon:{
        color: theme.colors.heading.main,
        width: '75%'
    },
    forgotPasswordInputs: {
        paddingTop: '20%',
        width: '90%'    
    },
    containerTextInput: {
        borderRadius: 11,
        height: 50,
        backgroundColor: theme.colors.background.secondary,
        marginTop: 18,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    forgotPasswordActions: {
      marginTop: '15%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    forgotPasswordButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 4,
        borderRadius: 8,
        width: '100%',     
        justifyContent: 'center'       
    },
    containerInfo:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    info:{
        color: theme.colors.heading.secondary,
        fontSize: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'   
    }
})
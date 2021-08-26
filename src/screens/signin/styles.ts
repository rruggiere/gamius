import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        justifyContent: 'center'
    },   
    logoContainer:{
        height: '23%'      
    },
    image: {
        width: 100,
        height: 100
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
    textLogin:{
        color: theme.colors.heading.main,
        paddingLeft: 15    
    },
    siginInputs: {
        width: '90%'    
    },
    containerTextInput: {
        borderRadius: 11,
        height: 50,
        backgroundColor: theme.colors.background.secondary,
        marginTop: 18,
        justifyContent: 'center'
    },
    signinActions: {
      marginTop: 25,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    signinButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 2,
        borderRadius: 8,
        width: '50%',     
        justifyContent: 'center'       
    },
    forgtPassword:{
        color: theme.colors.heading.secondary,
        fontSize: 15             
    }, 
    containerSignUp:{
      marginTop: 35,
      flexDirection: 'row',
      justifyContent: 'center'     
    },
    signUpText:{
        color: theme.colors.heading.main
    }
})
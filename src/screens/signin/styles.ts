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
        height: '20%'
    },
    image: {
        width: 300,
        height: 100,
        flex: 1,
        resizeMode: 'contain'
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
        paddingLeft: 20    
    },
    siginInputs: {
        width: '90%',
        marginTop: '10%'
    },
    containerTextInput: {
        borderRadius: 11,
        height: 50,
        backgroundColor: theme.colors.background.secondary,
        marginTop: 18,
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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
      marginTop: '20%',
      flexDirection: 'row',
      justifyContent: 'center'     
    },
    signInText:{
        color: theme.colors.heading.main
    },
    iconTextInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#6f7075',
        fontSize: 20
    },
    textInsideInputIcon:{
        color: theme.colors.heading.main,
        width: '85%',
        paddingLeft: 20    
    }
})
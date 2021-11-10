import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        paddingTop: '5%'
    }, 
    containerInput: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        paddingTop: '5%'
    }, 
    emailVerification:{
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        paddingTop: '0%',
        paddingBottom: '0%',
        flex: 1,
        fontSize: 30
    },
    textInsideInputIcon:{
        color: theme.colors.heading.main,
        width: '75%'
    },
    emailVerificationInputs: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '18%',
        marginTop: '20%'

    },
    containerTextInput: {
        borderRadius: 11,
        backgroundColor: theme.colors.background.secondary,
        alignContent: 'center',
        alignItems: 'center',
        height: '60%',
        width: '25%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    emailVerificationActions: {
      marginTop: '10%',
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    emailVerificationButton: {        
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
    containerInfoTimer:{
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
    },
    infoTimer:{
        color: theme.colors.textInfo,
        fontSize: 15,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        fontWeight: 'bold'
    }
})
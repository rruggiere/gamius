import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center" ,  
    },
    containerHeader: {     
        paddingTop: '15%',  
    },
    containerImage: {        
        top: 0,
        left: 0,
        position: 'absolute',
        zIndex: 1,
        marginTop: '15%',
        marginLeft: '3%',
        alignContent: 'center',
        alignItems: 'center',
    },
    textUserName:{
        marginTop: 10,
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 20,
        fontWeight: '800'
    },
    textUser:{
        color: theme.colors.heading.secondary,
        backgroundColor: theme.colors.background.main,
        fontSize: 14,
        paddingTop: '2%',
    },
    containerProfilePicture:{
        borderStyle: 'solid',
        borderWidth: 2,        
        borderRadius: 100,
        // backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center' ,
        padding: '5%',
        width: 135,
        height: 135,
        overflow: 'hidden'
    },
    containerProfilePictureBorder: {
        width: 140,
        height: 140,
        borderStyle: 'solid',
        borderWidth: 2,        
        borderRadius: 100,
        borderColor: theme.colors.backgroundButton,
        position: 'absolute',
        marginTop: -2,
        backgroundColor: theme.colors.background.secondary,
        overflow: 'hidden'
    },
    profilePicture:{
        width: '115%',
        height: '115%',  
        alignContent: 'center',
        alignItems: 'center' ,
        alignSelf:'center',
        overflow: 'hidden',
        borderRadius: 150/2,
        marginTop: '-4%'
    },
    optionsContainer:{        
        borderTopWidth: 0.5,
        borderColor: theme.colors.backgroundButton,
        backgroundColor: theme.colors.background.main,
        width: '100%',
        height: '90%',
        marginTop: '10%',         
        paddingTop: '2%',
        paddingHorizontal: 15,
        alignContent: 'center',
        alignItems: 'center',   
    },
    containerName: {
        marginLeft: '10%'
    },
    containerInput: {
        paddingTop: '20%',
        width: '90%'  ,
    },
    containerTextInput: {
        borderRadius: 11,
        height: 50,
        backgroundColor: theme.colors.background.secondary,
        marginTop: '2%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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
    iconTextInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#6f7075',
        fontSize: 20
    },
    singUpActions: {
      marginTop: '15%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },
    signUpButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 4,
        borderRadius: 8,
        width: '100%',     
        justifyContent: 'center'       
    }, 
    editButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        // paddingVertical: 0.1,
        borderRadius: 8,
        width: '80%',     
        justifyContent: 'center'       
    },
    editPerfilContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: '15%',
        marginLeft: '38%',
        width: '20%',
        height: '5%'
    } ,
    iconEditPerfil: {
        color: 'white',
        opacity: 0.9,
        height: '100%',
    },    
    textTitle: {
        color: theme.colors.heading.main,
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        marginTop: '5%'
    },
});
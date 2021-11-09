import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        paddingTop: '5%',
    },   
    text: {
        color: theme.colors.heading.main,
        fontSize: 27,
        fontWeight: 'bold'
    },
    subContainer: {              
        width: '90%',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    textTitle: {
        color: theme.colors.heading.main,
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
    },
    textInsideInput:{
        color: theme.colors.heading.main,
        width: '80%'
    },
    editButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        borderWidth: 1,
        borderRadius: 8,
        width: '80%',     
        justifyContent: 'center',
        height: '100%',
    },
    textInput: {
        color: theme.colors.heading.main,
        padding: 10             
    },
    containerNickname: {
        width: '100%',        
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
    },
    sectionInputNickname: {
        width: '70%',        
        borderRadius: 11,
        height: 50,
        backgroundColor: theme.colors.background.secondary,
        marginTop: 18,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionbuttonEditNickname: {
        width: '35%',
        marginLeft: '3%',
        marginTop: 18,
        height: 50,
    },
    containerDescription: {        
        width: '100%',        
        borderRadius: 11,
        height: 100,
        backgroundColor: theme.colors.background.secondary,
        marginTop: 18,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerRole: {             
        width: '90%',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
        flexDirection: "row",
    },
    containerRoleSection: {                   
        width: '90%',
    },
    roleOptionSection: {
        marginTop: '2%',
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
    },
    roleOption: {
        width: '22.5%',
        textAlign: 'center',
        alignItems: 'center',
    },
    laneIcon:{
        width: 40,
        height: 40,
        marginVertical: 5
    },
    roleTitle: {
        color: theme.colors.heading.main,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: '3%',
    },    
    containerTime: {          
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    containerTimeSection: {                 
        width: '90%',
    },
    containerTitleSection: {
        width: '35%',
        height: '40%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: '-3%',
        marginLeft: '5%',
        backgroundColor: theme.colors.background.main,
    },
    textTitleSection:{
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        letterSpacing: 4,
        margin: 0,
        
    },  
    subContainerTimeSection : {
        width: '25%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
    },    
    iconMenuTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.5,
        height: '100%'
    },  
    selectedTime: {
        color: theme.colors.textInfo,
        opacity: 0.9
    }, 
    textTitleTime:{
        color: theme.colors.heading.main,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        margin: 0,
        padding: '2.2%',
        opacity: 0.5,
        marginTop: '3%',
    },  
    timeOptionSection: {
        marginTop: '2%',
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
    },
    buttonActions: {
      marginTop: '7%',
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'      
    },  
    saveButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 4,
        borderRadius: 8,
        width: '100%',     
        justifyContent: 'center',
        borderWidth: 1,   
    },
})
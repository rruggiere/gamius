import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        zIndex: 0,
    },   
    containerFilterRank: {        
        width: '100%',
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    filterRankButton: {              
        width: '45%',
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
    },    
    rankButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 4,
        borderRadius: 8,
        width: '100%',     
        justifyContent: 'center',
        borderWidth: 1,   
    },
    rankButtonDeselected:{        
        backgroundColor: theme.colors.background.main,
        borderColor: theme.colors.heading.secondary,
        borderWidth: 1,
    },
    rankButtonLeft: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    rankButtonRight: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    marginLeft: {
        marginLeft: '5%',
    },
    marginRight: {
        marginRight: '5%',
    },
    containerRole: {             
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    containerRoleSection: {                   
        width: '90%',
    },
    text: {
        color: theme.colors.heading.main,
        fontSize: 27,
        fontWeight: 'bold'
    },
    textTitle: {
        color: theme.colors.heading.main,
        fontSize: 16,
        fontWeight: 'bold',
    },
    roleOptionSection: {
        marginTop: '2%',
        flexDirection: "row",
        textAlign: 'center',
        alignItems: 'center',
    },
    roleOption: {
        width: '20%',
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
    containerRank: {          
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    containerRankSection: {                 
        width: '90%',
    },
    rankDropDown: {
        marginTop: '5%'        
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
    filterButton: {        
        alignItems: "center",
        backgroundColor: theme.colors.backgroundButton,
        paddingVertical: 4,
        borderRadius: 8,
        width: '100%',     
        justifyContent: 'center',
        borderWidth: 1,   
    },












    changeEmail:{
        height: '10%'      
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
    changeEmailInputs: {
        paddingTop: '5%',
        width: '90%'    
    },
    changeEmailInputs2: {
        paddingTop: '5%',
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
    containerInfo:{
      flexDirection: 'row',
      justifyContent: 'center'     
    },
    containerInfo2:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '10%' 
    },
    iconTextInput: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#6f7075',
        fontSize: 20
    },
    textInfo:{
        color: theme.colors.heading.secondary,
        fontSize: 15             
    }, 
})
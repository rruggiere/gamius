import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    conversationContainer: {
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '100%',
        paddingTop: 40,
        justifyContent: 'space-between'   
    },
    header: {
        backgroundColor: theme.colors.background.main,
        width: '100%',
        minHeight: '7%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15,
        flexDirection: 'row'
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.heading.main
    },
    userIcon: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: theme.colors.background.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 9
    },
    defaultText: {
        color: theme.colors.heading.main,
        fontSize: 20
    },
    dialogContainer:{
        marginTop: 7,
        height: '80%',
        overflow: 'scroll'
    },
    issuerBaloon: {
        backgroundColor: "#0078fe",
        padding: 10,   
        marginLeft: '5%',
        borderRadius: 5,
        marginTop: 7,
        marginRight: "5%",
        maxWidth: '80%',
        alignSelf: 'flex-end'
    }, 
    receiverBaloon: {
        backgroundColor: "#dedede",
        padding: 10,        
        borderRadius: 5,
        marginTop: 7,
        marginLeft: "5%",
        maxWidth: '80%',
        alignSelf: 'flex-start'        
    },  
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#dedede",  
        width: 13,
        height: 13,
        bottom: 20,     
        left: -5.9,
        transform: [{ rotate: '40deg'}]    
    },
    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#0078fe",  
        width: 13,
        height: 13,
        bottom: 20,
        right: -6,
        transform: [{ rotate: '40deg'}]    
    },
    typingContainer: {
        backgroundColor: theme.colors.background.main,
        width: '90%',
        minHeight: '5%',
        borderRadius: 15,
        alignSelf: 'center',          
    },
    dialogInput:{        
        padding: 7,
        justifyContent: 'center',      
        color: theme.colors.heading.main
    }
});
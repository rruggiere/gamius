import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        zIndex: 0,
        borderTopWidth: 1,
        borderTopColor:  theme.colors.heading.main,
    },  
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
        overflow: 'scroll',
        width: '90%',
    },
    issuerBaloon: {
        backgroundColor: theme.colors.backgroundButton,
        opacity: 0.5,
        padding: 10,   
        marginLeft: '5%',
        borderRadius: 5,
        marginTop: 7,
        marginRight: "5%",
        maxWidth: '85%',
        alignSelf: 'flex-end',
    }, 
    receiverBaloon: {
        backgroundColor: theme.colors.heading.main,
        opacity: 0.8,
        padding: 10,        
        borderRadius: 5,
        marginTop: 7,
        marginLeft: "5%",
        maxWidth: '85%',
        alignSelf: 'flex-start'        
    },  
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: theme.colors.heading.main,  
        width: 13,
        height: 13,
        top: 0,
        left: 0,
        marginTop: '1%',
        marginLeft: '-1%',
        transform: [{ rotate: '40deg'}]    
    },
    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: theme.colors.backgroundButton,
        width: 13,
        height: 13,
        top: '100%',
        // left: '100%',
        // marginTop: '1%',
        marginLeft: '50%',
        transform: [{ rotate: '-40deg'}]    
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
    },
    containerInputChat: {
        width: '100%',
        backgroundColor: theme.colors.background.secondary,
        height: '10%',
        marginTop: '18%',
        borderTopWidth: 0.1,
        borderTopColor: theme.colors.heading.secondary,
        flexDirection: 'row',
    },
    containerTextInput: {
        borderRadius: 11,
        height: 40,
        backgroundColor: theme.colors.heading.main,
        marginTop: '3%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginLeft: '5%'
    },
    textInsideInput:{
        color: theme.colors.heading.main,
        width: '80%'
    },
    iconChat:{
        marginTop: '3.5%',
        marginLeft: '3%'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.backgroundButton,
        opacity: 0.9,
        height: '100%'
    },     
    iconChatDirectionLeft:{
        position: 'absolute',
        top: 0,
        left: 0,
        marginLeft: '-3.5%',
        marginTop: '1%'
    },
    iconDirectionLeft: {
        color: theme.colors.heading.main,
        transform: [{ rotate: '180deg'}],
    },    
    iconChatDirectionRight:{
        position: 'absolute',
        textAlign: 'right',
        marginLeft: '-3.5%',
        marginTop: '1%',
        alignSelf: 'flex-end',
    },
    iconDirectionRight: {
        color: theme.colors.backgroundButton,
        // transform: [{ rotate: '180deg'}],
    }, 
});
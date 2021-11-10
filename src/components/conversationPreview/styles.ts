import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    textContainer:{
        width: '70%'                      
    },
    defaulText: {
        color: theme.colors.heading.main,
        maxWidth: '70%',
        maxHeight: '45%',
        fontSize: 20            
    },    
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.heading.main
    },
    scrollIcons: {
        width: '7.5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    conversationPreview:{
        backgroundColor: theme.colors.background.main,
        width: '100%',
        height: '7%',
        flexDirection: 'row',      
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    optionMenu:{        
        borderRadius: 12,
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.background.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
    },
    optionMenuIcon:{                
        borderRadius: 12,
        width: '10%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background.main,
    },
    containerProfilePicture:{
        borderStyle: 'solid',
        borderWidth: 6,        
        borderRadius: 100,
        borderColor: theme.colors.background.secondary,
        // backgroundColor: theme.colors.heading.main,
        alignContent: 'center',
        alignItems: 'center' ,
        padding: '5%',
        width: 70,
        height: 70
    },
    profilePicture:{        
        width: '115%',
        height: '115%',  
        alignContent: 'center',
        alignItems: 'center' ,
        alignSelf:'center',
        overflow: 'hidden',
        borderRadius: 150/2,
        marginTop: '-8%',
        marginLeft: '2%',
    }, 
    optionMenuText: {  
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        height: '100%',
        paddingLeft: '12%',
    },
    textMenu: {
        width: '100%',
        color: 'white',
        fontSize: 16,
        opacity: 0.7,
        marginTop: '-6%',
    },
    containerMensage: {
        width: '90%',
        marginLeft: '-100%',
        marginTop: '11%',
    },
    textMensage: {   
        color: 'white',
        fontSize: 12,
        opacity: 0.7,
    },
    optionMenuGo: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        marginRight: '10%',
        color: 'white',
        opacity: 0.8,
        height: '100%'
    },
    iconMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.9,
        height: '100%',
    },   
});
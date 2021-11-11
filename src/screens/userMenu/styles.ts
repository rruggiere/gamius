import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center"    
    },
    textUserName:{
        marginTop: 10,
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 18
    },
    textUser:{
        color: theme.colors.heading.secondary,
        backgroundColor: theme.colors.background.main,
        fontSize: 14
    },
    containerProfilePicture:{
        marginTop: 70,
        borderStyle: 'solid',
        borderWidth: 2,        
        borderRadius: 100,
        borderColor: theme.colors.backgroundButton,
        backgroundColor: theme.colors.backgroundButton,
        overflow: 'hidden'
    },
    profilePicture:{
        width: 80,
        height: 80,           
    },
    optionsContainer:{        
        borderTopWidth: 0.5,
        borderColor: theme.colors.backgroundButton,
        backgroundColor: theme.colors.background.main,
        width: '100%',
        height: '90%',
        marginTop: 30,         
        paddingTop: 25,
        paddingHorizontal: 15        
    },
    optionMenuFrist:{       
        marginTop: '0%'
    },
    optionMenu:{        
        borderRadius: 12,
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.background.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '-1%'
    },
    optionMenuIcon:{                
        borderRadius: 12,
        width: '25%',
        height: '100%',
        backgroundColor: theme.colors.background.secondary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    MenuIcon:{         
        width: '45%',
        height: '60%',
        backgroundColor: 'rgba(111, 112, 117, 0.2)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20%',       
        borderRadius: 37.5,
    },
    iconMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.9,
        height: '100%'
    },   
    editPerfilContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        marginTop: '15%',
        marginLeft: '87%'
    } ,
    iconEditPerfil: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        color: 'white',
        opacity: 0.9,
        height: '100%',
    },
    optionMenuText: {  
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
        marginLeft: '-2%',
        height: '100%'
    },
    textMenu: {
        color: 'white',
        fontSize: 16,
        opacity: 0.7
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
    optionMenuMarginTop: {
        marginTop: '5%'
    },
    optionMenuCenter: {
        borderRadius: 0
    },
    optionMenuRadiusBottomCenter: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    optionMenuRadiusTopCenter: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    optionMenuBorderTopCenter: {        
        borderTopWidth: 0.5,        
        borderTopColor: theme.colors.heading.secondary
    },
    optionMenuBorderBottomCenter: {        
        borderBottomWidth: 0.5,        
        borderBottomColor: theme.colors.heading.secondary
    },
    menuFocus: {
        backgroundColor: theme.colors.backgroundButton,
    },
    menuFocusText:{        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.background.secondary,
        opacity: 0.9,
    },
    menuFocusIcon: {
        backgroundColor: 'rgba(25, 26, 30, 0.3)',
    }
});
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        paddingTop: '5%'
    }, 
    text: {
        color: theme.colors.heading.main,
        fontSize: 27,
        fontWeight: 'bold'
    },
    optionsContainer:{        
        borderTopWidth: 0.5,
        borderColor: theme.colors.backgroundButton,
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '90%',
        marginTop: 30,         
        paddingTop: 25,
        paddingHorizontal: 15        
    },
    optionMenu:{        
        borderRadius: 12,
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.background.main,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%',
    },
    optionMenuIcon:{                
        borderRadius: 12,
        width: '10%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background.secondary,
    },
    MenuIcon:{         
        width: '45%',
        height: '60%',
        backgroundColor: theme.colors.background.secondary,
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
    textDateMenu: {   
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
    profilePicture:{        
        width: '115%',
        height: '115%',  
        alignContent: 'center',
        alignItems: 'center' ,
        alignSelf:'center',
        overflow: 'hidden',
        borderRadius: 150/2,
        marginTop: '-8%'           ,
        marginLeft: '2%',
    },
    containerProfilePicture:{
        borderStyle: 'solid',
        borderWidth: 6,        
        borderRadius: 100,
        borderColor: theme.colors.background.main,
        // backgroundColor: theme.colors.heading.main,
        alignContent: 'center',
        alignItems: 'center' ,
        padding: '5%',
        width: 70,
        height: 70
    },
    containerDate: {
        width: '30%',
        marginLeft: '-100%',
        marginTop: '11%'
    }
})
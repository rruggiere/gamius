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
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '80%',
        marginTop: 30,         
        paddingTop: 25,
        paddingHorizontal: 15        
    }
});
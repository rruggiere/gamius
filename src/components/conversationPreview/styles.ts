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
    }
});
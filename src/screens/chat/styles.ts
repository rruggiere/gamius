import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    defaulText: {
        color: theme.colors.heading.main
    },
    chatContainer: {
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '100%',
        paddingTop: 40
    },
    matchsContainer: {
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'    
    },
    conversationsContainer: {
        height: '93%',
        paddingTop: 20
    },
    matchIcon: {
        backgroundColor: theme.colors.background.main,
        borderRadius: 50,
        width: '15%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3
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
        justifyContent: 'space-between'
    }
});
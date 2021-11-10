import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background.main,
        alignItems: "center",
        zIndex: 0,
    },   
    text: {
        color: theme.colors.heading.main,
        fontSize: 27,
        fontWeight: 'bold'
    },
    contatinerNewMatches: {
        width: '90%',
        marginTop: '13%'
        // borderBottomWidth: 1,
        // borderBottomColor: theme.colors.background.secondary,
    },
    contatinerNewMatchesItem: {
        width: '100%',
    },
    textTitle: {
        color: theme.colors.heading.main,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '3%'        
    },
    matchsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    contatinerChat: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15
    },










    
    defaulText: {
        color: theme.colors.heading.main
    },
    chatContainer: {
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '100%',
        paddingTop: 40
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
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    iconContainer:{
        width: '15%',
        height: '100%',
        alignItems: 'center'
    },
    matchIcon: {
        backgroundColor: theme.colors.background.main,
        borderRadius: 50,
        width: '100%',
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
    defaultText: {
        color: theme.colors.heading.main,        
        fontSize: 15    
    },        
});
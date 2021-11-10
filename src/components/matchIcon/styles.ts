import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    iconContainer:{
        width: '22%',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '3%',
    },
    matchIcon: {
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
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
        fontSize: 16, 
        fontWeight: 'bold',
    },        
    imageIcon: {
        borderWidth: 1,        
        borderRadius: 100,
        borderColor: 'black',
        alignContent: 'center',
        alignItems: 'center' ,
        padding: '5%',
        width: 65,
        height: 65,
    },
    matchText: {
        width: '100%',
        height: 20,
        alignContent: 'center',
        alignItems: 'center' ,
        marginTop: '2%'
    },
});
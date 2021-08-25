import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    baseMenuButton: {
        backgroundColor: theme.colors.background.main,
        width: '100%',
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 8,
        marginVertical: 5
    },
    textButton: {
        color: theme.colors.heading.main,
        paddingLeft: 15,
        flex: 1,
        textTransform: 'uppercase'
    },
    menuIconContainer: {
        backgroundColor: theme.colors.background.secondary,
        borderRadius: 100,
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: "center"
    },
    menuIcon: {
        width: 25,
        height: 25,
    }
});
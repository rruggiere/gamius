import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {        
        backgroundColor: theme.colors.background.secondary,
        width: '100%',
        height: '100%',
        alignItems: 'center'                     
    },
      moreOptions: {
        paddingTop: 35,
        paddingRight: 25,
        width: '100%',
        height: '1%',        
        flexDirection: 'column'
    },
    gradientContainer: {
        marginTop: 59,       
        borderRadius: 18,
        width: '90%',
        height: '70%',        
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {   
        backgroundColor: theme.colors.background.main,     
        borderRadius: 20,
        width: '97.8%',
        height: '99%',        
        justifyContent: 'center',
        overflow: 'hidden'
    },  
    moreOptionsIcon: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end'
    },
    playerGameInfo: {
        width: '100%',
        height: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5  
    },
    eloContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eloIcon: {
        width: 150,
        height: 150
    },
    eloClassification: {
        marginTop: 10,
        textAlign: 'center',
        color: theme.colors.heading.main,
        fontSize: 24
    },
    eloInfo: {
        textAlign: 'center',
        color: theme.colors.heading.secondary
    },
    playerProfileInfo: {
        backgroundColor: '#121212',
        borderRadius: 30,
        width: '100%',
        height: '51%',
        alignItems: 'center'
    },
    lanesContainer: {
        flexDirection: 'row'
    },
    laneIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 8
    },
    playerNick: {
        marginTop: 15,
        color: theme.colors.heading.main,
        fontSize: 20,
        fontWeight: 'bold'
    },
    playerGeneralInfo: {
        color: theme.colors.heading.main,
        fontSize: 15
    },
    hourInfoContainer: {
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'center',
    },
    hourIcon: {
        marginTop: 5,
        width: 15,
        height: 15
    },
    hourInfo: {
        paddingTop: 4,
        marginLeft: 7,
        color: theme.colors.heading.secondary,
        fontStyle: 'italic'
    },
    playerBio: {
        marginTop: 20,
        color: theme.colors.heading.main,
        fontSize: 15,
        paddingHorizontal: 50,
        textAlign: 'justify'
    },
    matchOptions: {       
        flexDirection: 'row',      
        alignItems: 'center',
        height: '50%'
    },
    declineIcon: {
        marginHorizontal: 30,
        width: 45,
        height: 45
    },
    likeIcon: {
        marginHorizontal: 30,
        width: 60,
        height: 60
    },
});
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:  theme.colors.background.main,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: "wrap",
    },
    moreOptions:{
     paddingTop: 35,
     paddingRight: 25,
     width: '100%',
     height: '5%',
     justifyContent: 'flex-start',
     alignContent: 'flex-end',   
     flexDirection: 'column'    
    },
    moreOptionsIcon:{
        width: 20,
        height: 20,
        alignSelf: 'flex-end' 
    },
    playerGameInfo:{
        width: '100%',
        height:'30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    eloContainer:{
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    eloIcon:{
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    eloClassification:{   
        marginTop: 10,   
        textAlign: 'center',
        color: theme.colors.heading.main,
        fontSize: 24 
    },
    eloInfo:{
        textAlign: 'center',
        color: theme.colors.heading.secondary 
    },
    playerProfileInfo:{
        backgroundColor: theme.colors.background.secondary,      
        borderRadius: 45,
        width: '100%',
        height:'65%',       
        alignItems: 'center'       
    },   
    lanesContainer:{
        flexDirection:'row'
    },
    laneIcon:{
        width: 40,
        height: 40,
        marginVertical: 5
    },
    playerNick:{
        marginTop: 15,
        color: theme.colors.heading.main,
        fontSize: 20,
        fontWeight: 'bold'     
    },
    playerGeneralInfo:{
        color: theme.colors.heading.main,
        fontSize: 15    
    }, 
    hourInfoContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hourIcon:{
        marginTop: 5,
        width: 15,
        height: 15
    },
    hourInfo:{   
      paddingTop: 4, 
      marginLeft: 7,
      color: theme.colors.heading.secondary,
      fontStyle: 'italic'
    },
    playerBio:{
        marginTop: 20,
        color: theme.colors.heading.main,
        fontSize: 15,
        paddingHorizontal: 50 ,
        textAlign: 'justify'
    },
    matchOptions:{
        paddingTop: 10,
        flexDirection: 'row',
        marginVertical: 20, 
        alignItems: 'center',    
        height: '50%'
    },
    declineIcon:{       
        marginHorizontal: 80,
        width: 45,
        height: 45
    },
    likeIcon:{       
        marginHorizontal: 80,
        width: 60,
        height: 60         
    },
    optionMenuIcon:{
        position: 'absolute',
        top: 0,
        left: 0,   
        paddingTop: '30%',
        paddingLeft: '55%'
    },
    iconMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.9,
        height: '100%'
    },  
    containerCard: {
        marginTop: '30%',
        width: '90%',
        height: '65%',
        borderStyle: 'solid',
        borderWidth: 0.3,        
        borderRadius: 15,
        borderColor: theme.colors.heading.main,
        alignItems: 'center',
        alignContent: 'center',
    },    
    containerProfilePicture:{
        borderStyle: 'solid',
        borderWidth: 2,        
        borderRadius: 100,
        borderColor: theme.colors.backgroundButton,
        backgroundColor: theme.colors.backgroundButton,
        overflow: 'hidden',
        marginTop: '5%',
    },
    profilePicture:{
        width: 100,
        height: 100,           
    },
    containerProfileName: {
        marginTop: '3%'
    },
    textUserName:{
        marginTop: 10,
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 20,
        fontWeight: '800',        
        letterSpacing: 2
    },
    containerProfileDescription: {
        // marginTop: '3%',
    },
    textUserDescription:{
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 16,
        padding: '5%',
        textAlign: 'center',
        letterSpacing: 5
    },
    containerTitleSection: {
        width: '35%',
        height: '40%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: '-3%',
        marginLeft: '5%',
        backgroundColor: theme.colors.background.main,
    },
    lineTitleSection: {
        top: 0,
        left: 0,
        width: '80%',
        marginLeft: '9%',
        marginTop: '3%',
        borderBottomColor: theme.colors.heading.main,
        borderBottomWidth: 1,
        position: 'absolute',
    },
    textTitleSection:{
        color: theme.colors.heading.main,
        backgroundColor: theme.colors.background.main,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        letterSpacing: 4,
        margin: 0,
        
    },
    containerEloSection: {
        width: '100%',
        flexDirection: "row",
    },
    containerEloSolo: {             
        width: '50%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    containerEloFlex: {     
        width: '50%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center'
    },    
    textTitleElo:{
        color: theme.colors.heading.main,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        letterSpacing: 3,
        margin: 0,
        padding: '5%'
    },  
    textDescriptionElo:{
        color: theme.colors.heading.main,
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1,
        margin: 0,
        padding: '5%',
    },
    containerTitleSectionTop: {
        marginTop: '5%',
    },
    containerTimeSection: {        
        width: '95%',
        flexDirection: "row",
        paddingLeft: '3%',        
        borderStyle: 'solid',
        borderWidth: 1,        
        borderRadius: 10,
        borderColor: theme.colors.heading.secondary,
        marginTop: '7%'
    },   
    textTitleTime:{
        color: theme.colors.heading.main,
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center',
        letterSpacing: 3,
        margin: 0,
        padding: '2.2%',
        opacity: 0.5,
    },  
    subContainerTimeSection : {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
    },    
    iconMenuTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.5,
        height: '100%'
    },  
    selectedTime: {
        color: theme.colors.textInfo,
        opacity: 0.9
    },
    containerVoteSection: {
        width: '100%',
        flexDirection: "row",
        marginTop: '12%'
    },
    containerVote: {             
        width: '50%',
        height: '100%',
        textAlign: 'center',
        alignItems: 'center'
    },   
    iconMenuVoteSectionDecline:{ 
        textAlign: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,        
        borderRadius: 100,
        borderColor: theme.colors.backgroundButton,
        marginLeft: '30%'
    }, 
    iconMenuVoteSectionAccept:{ 
        textAlign: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,        
        borderRadius: 100,
        borderColor: 'green',
        marginRight: '30%'
    },
    iconMenuVote: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.9,
        height: '100%',       
    }, 
    containerRoles: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginLeft: '45%',
        marginTop: '9%'
    }
});
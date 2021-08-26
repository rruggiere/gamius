import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:  theme.colors.background.main,
        width: '100%',
        height: '100%',
    },
    moreOptions:{
     paddingTop: 25,
     paddingRight: 25,
     width: '100%',
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
        height:'40%',
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
        width: 150,
        height: 150       
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
        height:'60%',       
        alignItems: 'center'       
    },   
    lanesContainer:{
        flexDirection:'row'
    },
    laneIcon:{
        width: 30,
        height: 30,
        marginHorizontal: 8
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
      color: theme.colors.heading.secondary
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
});
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        justifyContent:'center',     
        flexDirection: 'row',
        paddingTop: 15      
    },
    leftMenu:{   
        transform: [{ rotate: '8deg'}],
        paddingLeft: 25,
        paddingTop: 10  
    },
    rightMenu:{   
        transform: [{ rotate: '-8deg'}],
        paddingLeft: 60,
        paddingTop: 10                    
    },
    icon:{
        marginHorizontal: 18,
        height: 30,
        width: 30        
    },
    iconConfig:{     
        transform: [{ rotate: '-8deg'}]        
    },
    iconRight:{
        transform: [{ rotate: '8deg'}]  
    },
    iconsContainer:{        
        flexDirection: 'row',    
        height: 80,
        width: '55%',          
        backgroundColor: theme.colors.background.main,
        borderTopWidth: 1,
        borderTopColor: theme.colors.backgroundButton,
        overflow:'hidden'  
    },
    iconCenterContainer:{   
        flexDirection: 'row',
        width: 80,
        height: 80,          
        backgroundColor: theme.colors.backgroundButton,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 15,
        paddingBottom: 10                    
    },
    iconCenter:{  
       width: 40,
       height: 40
    }
});
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{ 
        width: '100%',
        height: 90,      
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 25          
    },
    iconsContainer:{
        marginTop: 35,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor: theme.colors.background.main,
        borderRadius: 130,
        flexDirection:'row',
        paddingBottom: 13
    },
    leftIcons:{             
        width: '50%',              
        flexDirection: 'row',   
        justifyContent:'center',
        paddingRight: 15         
    },
    rightIcons:{       
        width: '50%',               
        flexDirection: 'row',
        justifyContent:'center',
        paddingLeft: 15      
    },
    icon:{
        width: 30,
        height: 30,
        marginHorizontal: 25      
    },
    iconCenter:{  
        marginTop: 1,
        width: 70,
        height: 70,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background.main,
        borderWidth: 3.5,
        borderRadius: 100,
        borderColor: theme.colors.background.secondary         
    }     
});
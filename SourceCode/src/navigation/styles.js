import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 50,   
    },
    customTabBarStyle: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 50,  
    },
    customTabBarView: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#174166',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
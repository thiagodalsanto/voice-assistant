import { StyleSheet } from "react-native";

import colors from '../styles/colors';

const styles = StyleSheet.create({
    shadow: {
        shadowColor: colors.black,
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
        backgroundColor: colors.darkerBlue,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
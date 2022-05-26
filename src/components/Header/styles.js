import { StyleSheet } from "react-native";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 90,
        paddingTop: 30,
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderColor: colors.lightGrey,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        paddingRight: 30,
    },  
    icon: {
        color: colors.lightBlue,
        width: "10%",
    },
    title: {
        fontSize: fonts.big,
        color: "#000",

    }
});

export default styles;
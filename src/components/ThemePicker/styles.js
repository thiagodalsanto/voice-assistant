import { StyleSheet } from "react-native";

import colors from '../../styles/colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.regularGrey,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkerGrey,
    },
    text: {
        fontSize: 15,
        color: colors.black,
   },
});

export default styles;
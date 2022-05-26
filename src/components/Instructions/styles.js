import { StyleSheet } from "react-native";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBlue,
        height: 150,
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: colors.white,
        fontSize: fonts.regular,
        fontWeight: "bold",
        paddingBottom: 12,
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",

    },
    text: {
        fontSize: fonts.small,
        color: colors.white,
    }

});

export default styles;
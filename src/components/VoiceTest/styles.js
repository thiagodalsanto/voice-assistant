import { StyleSheet } from "react-native";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.regularGrey,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: colors.darkerGrey,
    },
    titleContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 15,
    },
    recordButton: {
        backgroundColor: colors.darkerRed,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    icon: {
        color: colors.white,
    },
    title: {
        fontSize: fonts.small,
    },
    text: {
        backgroundColor: colors.white,
        width: "80%",
        height: 70,
        borderWidth: 0.4,
        borderColor: colors.black,

    }
});

export default styles;
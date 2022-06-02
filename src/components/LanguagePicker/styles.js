import { StyleSheet } from "react-native";

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: colors.darkerGrey,
        borderBottomWidth: 1,
        backgroundColor: colors.regularGrey,
        height: 100,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    container: {
        width: "98%",
        height: "100%",
    },
    title: {
        fontSize: fonts.big,
        paddingBottom: 5,
    },
    pickerView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    picker: {
        width: "95%",
        backgroundColor: colors.lightGrey,
    }
});

export default styles;
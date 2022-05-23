import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A70AD',
        height: 150,
        borderBottomWidth: 1,
        borderColor: '#EEE',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 12,
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",

    },
    text: {
        fontSize: 14,
        color: "white",
    }

});

export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
    },
    box: {
        backgroundColor: "#2A70AD",
        height: 600,
        width: "92%",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 35,
        color: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        height: "50%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 2,
        borderColor: "#174166",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF"
    },
    touchableOpacity: {
        backgroundColor: "#174166",
        width: "50%",
        padding: 8,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#441",

    },
    textButton: {
        fontSize: 14,
        color: "#FFF",
    },
});

export default styles;
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 150,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb"
    },
    titleContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: 15,
    },
    recordButton: {
        backgroundColor: "#C00",
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    icon: {
        color: "#FFF"
    },
    title: {
        fontSize: 14,
    },
    text: {
        backgroundColor: "#FFF",
        width: "80%",
        height: 70,
        borderWidth: 0.4,
        borderColor: "#000",

    }
});

export default styles;
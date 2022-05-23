import { StyleSheet } from "react-native";
//import { fonts, colors } from '../../styles';


const styles = StyleSheet.create({
    container: {
        //backgroundColor: colors.white,
        backgroundColor: '#FFF',
        height: 80,
        paddingTop: 30,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        //borderColor: colors.lightGrey,
        borderColor: '#EEE',
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
        //color: colors.lightBlue,
        color: '#2A70AD',
        width: "10%",
    },
    title: {
        //fontSize: fonts.big,
        fontSize: 18,
        color: "#000",

    }
});

export default styles;
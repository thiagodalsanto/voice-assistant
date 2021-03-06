import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home/index';
import Configuration from '../pages/Configuration/index';
import ButtonCreation from '../pages/ButtonCreation/index';

import colors from '../styles/colors';
import styles from './styles';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ( { children, onPress } ) => (
    <TouchableOpacity style={styles.customTabBarStyle} onPress={onPress} >
        <View style={styles.customTabBarView} >
            { children }
        </View>
    </TouchableOpacity>
);

const Tabs = ( ) => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ 
                tabBarShowLabel: false,
                title: 'Aligned Center',
                headerTitleAlign: 'center',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25, left: 20, right: 20, elevation: 0,
                    backgroundColor: colors.lightBlue,
                    borderRadius: 15, height: 60,
                    ...styles.shadow },
            }}
        >
            
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.center} >
                            <Icon name="home" size={32} style={{ 
                                color: focused ? "#000" : "#FFF",
                            }}/>
                        </View>
                    ),
                    headerTitle: "Home",
                }} 
            />

            <Tab.Screen name="Add" component={ButtonCreation} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Icon name="add-sharp" size={36} style={{
                                color: focused ? colors.black : colors.white,
                            }} />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton { ...props } />
                    ),
                    headerTitle: "Add Command",
                }} 
            />

            <Tab.Screen name="Configuration" component={Configuration} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.center} >
                            <Icon name="ios-cog" size={32} style={{ 
                                color: focused ? colors.black : colors.white,
                            }}/>
                        </View>
                    ),
                    headerTitle: "Configuration",
                }}
            />
            
        </Tab.Navigator>
    );
}

export default Tabs;
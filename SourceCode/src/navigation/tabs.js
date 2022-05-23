import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/home';
import Configuration from '../pages/configuration';
import AppsForm from '../pages/appsForm';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ( { children, onPress } ) => (
    <TouchableOpacity 
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...estilo.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#174166',
        }}
        >
            { children }
        </View>
    </TouchableOpacity>
);

const Tabs = ( ) => {
    return(
        <Tab.Navigator
            screenOptions={{ 
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#2A70AD',
                    borderRadius: 15,
                    height: 60,
                    ...estilo.shadow
                }
            }}
        >

            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Icon name="home" size={24} style={{ color: focused ? "#000" : "#FFF",
                        }}/>
                        <Text style={{
                            color: focused ? "#000" : "#FFF",
                            fontSize: 14,
                        }}>Home</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Add Comando" component={AppsForm} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon name="add-sharp" size={36} style={{
                            color: focused ? "#000" : "#FFF"
                        }} />
                    </View>
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton { ...props } />
                )
            }} />

            <Tab.Screen name="Configuration" component={Configuration} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Icon name="ios-cog" size={24} style={{ color: focused ? "#000" : "#FFF",
                        }}/>
                        <Text style={{
                            color: focused ? "#000" : "#FFF",
                            fontSize: 14,
                        }}>Config</Text>
                    </View>
                ),
            }}
            />
        </Tab.Navigator>
    );
}

const estilo = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 50,   
    }
}) 

export default Tabs;
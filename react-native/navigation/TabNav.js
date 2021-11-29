import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import DrawerNav from './DrawerNav';
import TopicScreen from '../screens/Topic';
import QuoteScreen from '../screens/Quote';
import WineScreen from '../screens/Wine';
import AddScreen from '../screens/AddMore';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle: { height: 75 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-outline' : 'home';
                    } else if (route.name === 'Topic') {
                        iconName = focused
                            ? 'bulb-outline' : 'bulb';
                    } else if (route.name === 'Quote') {
                        iconName = focused
                            ? 'bookmark-outline' : 'bookmark';
                    } else if (route.name === 'Wine') {
                        iconName = focused
                            ? 'wine-outline' : 'wine';
                    } else if (route.name === 'Add') {
                        iconName = focused
                            ? 'add-circle-outline' : 'add-circle';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#595959',
                tabBarActiveBackgroundColor: '#595959',
            })} >

            <Tab.Screen name="Home" component={DrawerNav} options={{ headerShown: false }} />
            <Tab.Screen name="Topic" component={TopicScreen} options={{ headerTitle: "Topics" }} />
            <Tab.Screen name="Quote" component={QuoteScreen} options={{ headerTitle: "Quotes" }} />
            <Tab.Screen name="Wine" component={WineScreen} options={{ headerTitle: "Descriptions of Wine" }} />
            <Tab.Screen name="Add" component={AddScreen} options={{ headerTitle: "Add More" }} />
        </Tab.Navigator>
    );
};
export default TabNav;
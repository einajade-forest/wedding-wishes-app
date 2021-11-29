import * as React from 'react';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { Image } from 'react-native';

import HomeScreen from '../screens/Home';
import InfoScreen from '../screens/Info';
import CreditsScreen from '../screens/Credits';

function LogoTitle() {
    return (
        <Image
            source={require('../assets/WeddingWishes.png')}
            style={{ resizeMode: 'contain', overflow: 'hidden', width: 234, height: 65, }}
        />
    );
}

const HomeDrawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <HomeDrawer.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: { height: 75 },
                headerLeft: false,
                headerRight: () => (
                    <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />),
                drawerPosition: 'right',
                drawerActiveTintColor: '#6800A8',
                drawerActiveBackgroundColor: '#F2E5FB',
                drawerInactiveTintColor: '#595959',
            }} >
            <HomeDrawer.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, drawerLabel: "Home" }} />
            <HomeDrawer.Screen name="Info" component={InfoScreen} options={{ headerTitle: "App Info", drawerLabel: "App Info" }} />
            <HomeDrawer.Screen name="Credits" component={CreditsScreen} options={{ headerTitle: "Credits", drawerLabel: "Credits" }} />
        </HomeDrawer.Navigator>
    )
}
export default DrawerNav;
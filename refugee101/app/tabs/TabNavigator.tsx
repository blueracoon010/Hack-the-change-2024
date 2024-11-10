// tabs/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodScreen from '../screens/FoodScreen';
import ShelterScreen from '../screens/ShelterScreen';
import JobBoardScreen from '../screens/JobBoardScreen';
import HealthcareScreen from '../screens/HealthcareScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Food" component={FoodScreen} />
            <Tab.Screen name="Shelter" component={ShelterScreen} />
            <Tab.Screen name="Job Board" component={JobBoardScreen} />
            <Tab.Screen name="Healthcare" component={HealthcareScreen} />
        </Tab.Navigator>
    );
}

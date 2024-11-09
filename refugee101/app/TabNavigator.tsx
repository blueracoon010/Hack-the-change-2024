// tabs/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodScreen from '../app/screens/FoodScreen';
import ShelterScreen from '../app/screens/ShelterScreen';
import JobBoardScreen from '../app/screens/JobBoardScreen';
import HealthcareScreen from '../app/screens/HealthcareScreen';

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

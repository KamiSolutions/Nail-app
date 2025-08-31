import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TryOnScreen from './screens/TryOnScreen';
import TechListScreen from './screens/TechListScreen';
import TechProfileScreen from './screens/TechProfileScreen';
import BookingScreen from './screens/BookingScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

export type RootStackParamList = {
  TryOn: undefined;
  TechList: undefined;
  TechProfile: { id: string };
  Booking: { techId: string; serviceId?: string };
  Chat: { threadId: string };
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TryOn">
        <Stack.Screen name="TryOn" component={TryOnScreen} options={{ title: 'Try-On' }} />
        <Stack.Screen name="TechList" component={TechListScreen} options={{ title: 'Find Techs' }} />
        <Stack.Screen name="TechProfile" component={TechProfileScreen} options={{ title: 'Nail Tech' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

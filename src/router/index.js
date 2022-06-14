import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  Login,
  Home,
  Grafik,
  Setting,
  Password,
  Profile,
  Validasi,
  Lolos,
  Pembayaran,
  RekomInternal,
  RekomEksternal,
  Nim,
  SearchResult
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Grafik"
        component={Grafik}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Validasi"
        component={Validasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lolos"
        component={Lolos}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RekomInternal"
        component={RekomInternal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RekomEksternal"
        component={RekomEksternal}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Nim" component={Nim} options={{headerShown: false}} />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

import * as React from 'react';
import {Text,TouchableOpacity}from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListViewScreen from '../components/ListViewScreen';
import ImageDetailsScreen from '../components/ImageDetailsScreen';
import NextScreen from '../components/NextScreen';

const Stack = createNativeStackNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Post Card">
        <Stack.Screen
          name="Post Card"
          component={ListViewScreen}
          options={({navigation, route}) => ({
            headerTitle: 'Home',
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'lightgrey'},
            headerRight: () =>(
                <TouchableOpacity onPress={()=>navigation.navigate('New Screen')}>
                    <Text>Next</Text>
                </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Image Details" component={ImageDetailsScreen} />
        <Stack.Screen name="New Screen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;

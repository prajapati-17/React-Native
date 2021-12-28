import * as React from 'react';
import {Text,TouchableOpacity}from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListViewScreen from '../components/ListViewScreen';
import ImageDetailsScreen from '../components/ImageDetailsScreen';
import NextScreen from '../components/NextScreen';
import TabScreen1 from '../components/TabScreen1';
import TabScreen2 from '../components/TabScreen2';
import SplashScreen from '../components/SplashScreen';
import onBoarding from '../components/onBoarding';

const Tab1StackNav = createNativeStackNavigator();
const Tab2StackNav = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// function MainAppRoutes() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Post Card">
//         <Stack.Screen
//           name="Post Card"
//           component={ListViewScreen}
//           options={({navigation, route}) => ({
//             headerTitle: 'Home',
//             headerTitleAlign:'center',
//             headerStyle: {backgroundColor: 'lightgrey'},
//             headerRight: () =>(
//                 <TouchableOpacity onPress={()=>navigation.navigate('New Screen')}>
//                     <Text>Next</Text>
//                 </TouchableOpacity>
//             ),
//           })}
//         />
//         <Stack.Screen name="Image Details" component={ImageDetailsScreen} />
//         <Stack.Screen name="New Screen" component={NextScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// Adding Tabs

function Tab1Stack() {
    return (
        <Tab1StackNav.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'grey'}
            }}>
          <Tab1StackNav.Screen
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
          <Tab1StackNav.Screen name="Image Details" component={ImageDetailsScreen} />
          <Tab1StackNav.Screen name="New Screen" component={NextScreen} />
        </Tab1StackNav.Navigator>
    );
  }

function Tab2Stack(){
    return(
        <Tab2StackNav.Navigator>
            <Tab2StackNav.Screen name='Tab Screen1' component={TabScreen1}/>
            <Tab2StackNav.Screen name='Tab Screen2' component={TabScreen2}/>
        </Tab2StackNav.Navigator>
    );
}

function TabStack() {
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Image List" component={Tab1Stack}/>
                <Tab.Screen name="second Tab" component={Tab2Stack}/>
        </Tab.Navigator>
    );
}

function MainAppRoutes(){
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown:false}}>
                <MainStack.Screen name="Splash Screen" component={SplashScreen}/>
                <MainStack.Screen name="onBoaring Screen" component={onBoarding}/>
                <MainStack.Screen name="Tab Screens" component={TabStack}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppRoutes;

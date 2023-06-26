import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function RootNaviagtion() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={TabsNavigation} options={{headerShown: false}} />
            <Stack.Screen name='EditTask' component={EditTaskScreen} options={{headerShown: false}} />
            <Stack.Screen name='AddTask' component={AddTaskScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
    return (
      <Tabs.Navigator
        initialRouteName='Inicio'
        activeColor='#000' // cor do texto ativado
        inactiveColor='#000' // cor do texto inativo
        barStyle={{ backgroundColor: 'rgba(0, 194, 204, 0.1)' }}
      >
        <Tabs.Screen
          style={{ fontWeight: 'bold' }}
          name='Inicio'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={'#00c2cc'} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          style={{ fontWeight: 'bold' }}
          name='Edit Task'
          component={EditTaskScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='?' color={'#00c2cc'} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          style={{ fontWeight: 'bold' }}
          name='Add Task'
          component={AddTaskScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='?' color={'#00c2cc'} size={26} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

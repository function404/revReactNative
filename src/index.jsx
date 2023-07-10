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
        <Stack.Screen name='Home' component={TabsNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Editar Tarefa' component={EditTaskScreen} options={{ headerShown: false }} />
        <Stack.Screen name='AddTask' component={AddTaskScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName='Inicio'
      activeColor='#fff'
      inactiveColor='#000'
      tabBarOptions={{
        activeTintColor: '#3599cc',
        inactiveTintColor: '#000',
      }}
      barStyle={{
        backgroundColor: 'rgba(53, 153, 204, .2)',
      }}
    >
      <Tabs.Screen
        style={{ fontWeight: 'bold' }}
        name='Inicio'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='home' color={'#3599cc'} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        style={{ fontWeight: 'bold' }}
        name='AddTask'
        component={AddTaskScreen}
        options={{
          tabBarLabel: 'Adicionar Tarefa',
          tabBarIcon: () => (
            <MaterialCommunityIcons name='account-plus' color={'#3599cc'} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
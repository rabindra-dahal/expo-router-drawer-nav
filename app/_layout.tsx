import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Drawer screenOptions={{
        headerStyle:{ backgroundColor: '#fff'},
        headerTintColor: '#8b5cf6',
        drawerStyle: { backgroundColor: '#fff'},
        drawerActiveTintColor: '#8b5cf6',
        drawerInactiveTintColor: '#64748b',
      }}>
        <Drawer.Screen 
          name="index"
          options={{
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({color}) => ( <FontAwesome name="home" size={24} color={color} />)
          }}
        />
        <Drawer.Screen
          name='dashboard'
          options={{
            title: 'My Dashboard',
            drawerLabel: 'Dashboard',
            drawerIcon : ({color}) => (<FontAwesome name="dashboard" size={24} color={color}/>)
          }}
          />
        <Drawer.Screen
          name='settings'
          options={{
            title: 'Settings',
            drawerLabel: 'Settings',
            drawerIcon : ({color}) => (<FontAwesome name="cog" size={24} color={color}/>)
          }}
          />
      </Drawer>
    </GestureHandlerRootView>
  );
}

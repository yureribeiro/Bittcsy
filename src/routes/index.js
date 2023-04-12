import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //Tabbar-bottom
import { StackRoutes } from './stackRoutes'
import { Stars } from '../pages/stars'
import { World } from '../pages/world'
import CustomTabBar from '../components/customTabBar'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //não mostra o header nativo
        tabBarHideOnKeyboard: true, //para o TabBar esconder quando o teclado aparecer
        tabBarShowLabel: false, //oculta o texto da TabBar
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >

      <Tab.Screen
        name='WorldTab'
        component={World}
        options={{
          tabBarIcon: 'public'
        }}
      />
      <Tab.Screen
        name='HomeTab'
        component={StackRoutes}
        options={{
          tabBarIcon: 'home'
        }}
      />
      <Tab.Screen
        name='StarsTab'
        component={Stars}
        options={{
          tabBarIcon: 'star-rate'
        }}
      />
    </Tab.Navigator>
  )
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //Tabbar-bottom
import { StackRoutes } from './stackRoutes'
import { World } from '../pages/world'
import { News } from '../pages/News'
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
        name='HomeTab'
        component={World}
        options={{
          tabBarIcon: 'home'
        }}
      />

      <Tab.Screen
        name='WorldTab'
        component={StackRoutes}
        options={{
          tabBarIcon: 'timeline'
        }}
      />

      <Tab.Screen
        name='NewsTab'
        component={News}
        options={{
          tabBarIcon: 'library-books',
        }}
      />
    </Tab.Navigator>
  )
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/home'
import { Details } from '../pages/details'
import { Popular } from '../pages/popular'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { Discussion } from '../pages/discussion'
import { News } from '../pages/News'
import { Learn } from '../pages/learn'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#222831' },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white', fontSize: 23 },
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Criptomoedas',
        }}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: 'Detalhes do criptoativo'
        }}
      />
      <Stack.Screen
        name='Popular'
        component={Popular}
        options={{
          title: 'Criptos mais pesquisadas'
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Acesse sua conta Bittcsy'
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Crie sua conta na Bittscy'
        }}
      />
      <Stack.Screen
        name='DiscussionTab'
        component={Discussion}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='News'
        component={News}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/home'
import { Details } from '../pages/details'
import { Popular } from '../pages/popular'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#222831' },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' }
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
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
          title: 'Entrar'
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Registrar'
        }}
      />
    </Stack.Navigator>
  )
}
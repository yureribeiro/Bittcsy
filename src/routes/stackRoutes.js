import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/home'
import { Wallet } from '../pages/wallet'
const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Wallet'
        component={Wallet}
        options={{
          title: 'Detalhes do Criptoativo',
        }}
      />
    </Stack.Navigator>
  )
}
import 'react-native-gesture-handler'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/utils'

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  )
}

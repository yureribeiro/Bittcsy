import 'react-native-gesture-handler'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/utils'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  )
}

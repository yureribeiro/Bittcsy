import 'react-native-gesture-handler'
import { useState } from 'react'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Splash } from './src/pages/splash/splash'
import { preventAutoHideAsync } from 'expo-splash-screen'

preventAutoHideAsync()

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {
        splashComplete
          ? <Routes />
          : <Splash onComplete={setSplashComplete} />
      }
    </NavigationContainer>
  )
}

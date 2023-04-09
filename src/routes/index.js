import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //Tabbar-bottom
import { StackRoutes } from './stackRoutes'
import { Ionicons } from '@expo/vector-icons' //icones
import { View, StyleSheet } from 'react-native'
import { Details } from '../pages/details'


const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, //não mostra o header nativo
          tabBarHideOnKeyboard: true, //para o TabBar não subir quando o teclado aparecer
          tabBarShowLabel: false, //oculta o texto da TabBar

          tabBarStyle: {
            height: 65,
            backgroundColor: '#222831',
            borderTopEndRadius: 17,
            borderTopStartRadius: 17,
            borderTopWidth: .2,
            borderTopColor: 'rgba(204, 204, 204, 0.4)'
          }
        }}
      >
        <Tab.Screen
          name='HomeTab'
          component={StackRoutes}
          options={{
            //estilos dos icones em caso de foco e desfoco
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name='home' color='#fff' size={size} />
              }
              return <Ionicons name='home-outline' color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name='Details'
          component={Details}
          options={{
            //estilos dos icones em caso de foco e desfoco
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name='wallet' color='#fff' size={size} />
              }
              return <Ionicons name='wallet-outline' color={color} size={size} />
            }
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E'
  }
})
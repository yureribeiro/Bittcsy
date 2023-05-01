import { View, StyleSheet, TouchableOpacity, Platform } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttomTab}
            >
              <View style={{ alignItems: 'center', padding: 6 }}>
                <View style={{ backgroundColor: isFocused ? 'rgba(255, 211, 105, 0.20)' : 'transparent', borderRadius: 99, padding: 8 }}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={33}
                    color={isFocused ? '#FFD369' : '#EEEEEE'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? 38 : 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#222831',
    borderRadius: 99,
    gap: 18,
    // sombra no android
    elevation: 12,
    // sombra no IOS
    shadowColor: '#000',
    shadowOffSet: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.80
  },
  buttomTab: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
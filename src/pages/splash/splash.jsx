import { StyleSheet } from "react-native"
import { ResizeMode, Video } from "expo-av"
import { useState } from "react"
import { hideAsync } from "expo-splash-screen"

export function Splash({ onComplete }) {
  const [lastStatus, setStatus] = useState({})

  function onPlaybackStatusUpdate(status) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync()
      }
      if (status.didJustFinish) {
        onComplete(true)
      }
    }
  }
  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require('../../../assets/icons/splashscreenvideo.mp4')}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  )
}
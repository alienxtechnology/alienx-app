import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Animated from 'react-native-reanimated'

const splash = () => {
  return (
    <View>
     <Animated.View style={{height:100,width:100,backgroundColor:"red"}}/>
    </View>
  )
}

export default splash

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-red-300">HomeScreen</Text>
        </View>
    )
}

export default HomeScreen
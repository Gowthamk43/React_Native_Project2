import { View, Text } from 'react-native'
import React from 'react'
import NetInfo from '@react-native-community/netinfo';

const NetInfoStatus = () => {

    const unsubscribe = NetInfo.addEventListener((state) => {
        console.log('Connection type:', state);
        console.log('Is connected?', state.isConnected);
    });

    return (
        unsubscribe()
    )
}

export default NetInfoStatus
import { View, Text, SafeAreaView, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState } from 'react'
import Features from '../components/Features';

const HomeScreen = () => {
  const [messages,setMessages] = useState([])
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
        <View className='flex-row justify-center mt-8'>
          <Image 
          source={require('../../assets/images/bot.png')}
          style={{height: hp(15), width: hp(15)}}
          
          />
        </View>
        {/* features and messages */}
        {
          messages.length>0?(
            <View>

            </View>
          ):(
            <Features />
          )
        }
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
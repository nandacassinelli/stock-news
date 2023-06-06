import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import bank from './bank-machines.jpg'
import styles from './styles'

const post = {
  title: 'Título da notícia',
  publishedAt: '22:29 03/06',
  url: 'https://www.digitalspy.com/tech/a40064850/walking-dead-norman-reedus-death-stranding-2/'
}

export default function NewsCard() {
  return (
    <View>
      <TouchableOpacity activeOpacity={1} style={styles.container}>
        <Image source={bank} resizeMode="cover" style={styles.image} />
        <LinearGradient colors={['#0000', '#000A', '#000']} style={styles.titleContainer}>
          <Text style={styles.newsText}>{post?.title}</Text>
          <Text style={styles.timestamp}>{post?.publishedAt}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.view}>
        <TouchableOpacity activeOpacity={1} style={styles.areaButton}>
          <Text style={styles.labelButton}>Comprar</Text>
        </TouchableOpacity>
        <View style={styles.verticleLine} />
        <TouchableOpacity activeOpacity={1} style={styles.areaButton}>
          <Text style={styles.labelButton}>Vender</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

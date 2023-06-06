import { StyleSheet, View } from 'react-native'
import Header from '../../components/Header'
import NewsCard from '../../components/NewsCard'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fernanda Cassinelli" />
      <NewsCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

import { StyleSheet, StatusBar } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 64

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25AADA',
    paddingTop: statusBarHeight,
    paddingBottom: '5%',
    marginBottom: 20
  },
  content: {
    alignSelf: 'center'
  },
  headerName: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: '600'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})

export default styles

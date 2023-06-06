import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    borderRadius: 24
  },
  container: {
    height: 240,
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 16
  },
  imageContainer: { flex: 1 },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  newsText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 24
  },
  timestamp: {
    position: 'absolute',
    color: '#eee',
    fontSize: 12,
    fontWeight: '300',
    right: 16,
    bottom: 8
  },
  areaButton: {
    height: 40,
    width: '50%',
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center'
  },
  labelButton: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  verticleLine: {
    height: 40,
    marginTop: 16,
    width: 1.6,
    backgroundColor: '#909090'
  }
})

export default styles

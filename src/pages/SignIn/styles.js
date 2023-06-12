import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: 35
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 65,
    fontSize: 16
  },
  signInButton: {
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '55%',
    height: 45,
    alignSelf: 'center',
    marginTop: '20%'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  signUpText: {
    marginTop: '10%',
    textAlign: 'center'
  },
  signUpButton: {
    backgroundColor: '#25AADA',
    borderRadius: 50,
    paddingVertical: 8,
    width: '55%',
    height: 45,
    alignSelf: 'center',
    marginTop: '5%'
  }
})

export default styles

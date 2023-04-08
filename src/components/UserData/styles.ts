import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  welcome: {
    fontFamily: 'Poppins-Bold',
    color: '#4a46a6',
    fontSize: 32,
    marginTop: 64
  },
  container: {
    backgroundColor: '#4a46a6',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    bottom: 32,
    zIndex: 0,
    padding: 32
  },
  info: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 20
  },
  userText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,

    gap: 8
  }
})

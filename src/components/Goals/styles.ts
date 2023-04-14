import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  titleGoals: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: '#2ab823'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9db05a',
    padding: 16,
    wordbreak: 'break-all',
    width: 250,
    borderRadius: 16,
    position: 'relative'
  },
  title: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'white',
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    elevation: -1
  },
  description: {
    fontFamily: 'Poppins-Medium',
    color: 'white'
  },
  moneyAmount: {
    fontFamily: 'Poppins-Medium'
  },
  strong: {
    color: '#254522',
    fontFamily: 'Poppins-Bold'
  },
  isDoneTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#1f400a'
  },
  isDone: {
    flexDirection: 'row'
  },
  response: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold'
  }
})

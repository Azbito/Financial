import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentModal: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    height: '60%',
    borderRadius: 8
  },
  textModal: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Poppins-Regular'
  },
  isDone: {
    flexDirection: 'row',
    gap: 32
  },
  response: {
    textAlign: 'center'
  }
})

import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  wallet: {
    backgroundColor: '#52ad52',
    padding: 32,
    borderRadius: 16,
    color: 'white',
    fontSize: 16,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32
  },
  walletValue: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'Poppins-Bold'
  },
  amount: {
    flexDirection: 'row'
  },
  balance: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 24,
    bottom: 2,
    marginBottom: -16
  },
  showingValue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16
  }
})

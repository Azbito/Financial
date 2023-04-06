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
    height: '40%',
    borderRadius: 8
  },
  textModal: {
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%'
  },
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
  },
  services: {
    flexDirection: 'row',
    gap: 16
  },
  payIcon: {
    height: 20,
    width: 30
  },
  payTitle: {
    fontSize: 16,
    width: 115,
    height: 20,
    color: 'white'
  },
  cardTitle: {
    fontSize: 16,
    width: 80,
    height: 20,
    color: 'white'
  },
  titleServices: {
    fontFamily: 'Poppins-Bold',
    color: '#52ad52',
    marginTop: 16,
    fontSize: 28
  },
  service: {
    padding: 16,
    display: 'flex',
    backgroundColor: '#52ad52',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    gap: 8
  },
  serviceLogo: {
    width: 30,
    height: 30
  },
  serviceTitle: {
    color: '#fff',
    width: 60,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16
  },
  account: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 32
  },
  savings: {
    color: '#fff',
    backgroundColor: '#52ad52',
    padding: 6,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderTopLeftRadius: 16
  },
  registered: {
    backgroundColor: '#fffadb',
    textAlign: 'center'
  },
  value: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center'
  },
  withdraws: {
    color: '#fff',
    backgroundColor: '#da563f',
    padding: 8,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderTopRightRadius: 16
  }
})

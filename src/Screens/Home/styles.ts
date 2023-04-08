import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '100%'
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
  account: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 200,
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

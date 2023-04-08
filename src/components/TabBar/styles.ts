import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  tabBar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16
  },
  container: {
    backgroundColor: '#4a46a6',
    width: 300,
    height: 64,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttons: {
    flexDirection: 'row',
    gap: 16
  },
  home: {
    top: -32,
    backgroundColor: '#605bcf',
    padding: 8,
    borderRadius: 32,
    elevation: 5
  },
  settings: {
    backgroundColor: '#605bcf',
    top: -32,
    padding: 8,
    borderRadius: 32,
    elevation: 5
  },
  user: {
    backgroundColor: '#605bcf',
    top: -32,
    padding: 8,
    borderRadius: 32,
    elevation: 5
  }
})

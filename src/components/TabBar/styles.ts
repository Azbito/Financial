import { StyleSheet } from 'react-native'

export const styles: any = StyleSheet.create({
  tabBar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  container: {
    backgroundColor: '#4a46a6',
    width: '100%',
    height: 64,
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

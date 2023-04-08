import { Image, Text, View } from 'react-native';
import WalletIcon from '../../../assets/images/wallet.png';
import UnknownValue from '../../../assets/images/value.png';
import { Switch as PaperSwitch, Provider as PaperProvider, Avatar, Modal } from 'react-native-paper';
import { useState } from 'react';
import { styles } from './styles';

export default function Wallet() {
  const [isHiding, setIsHiding] = useState(false)
  const onToggleSwitch = () => setIsHiding(!isHiding);

  return (
    <View style={styles.wallet}>
      <Image source={WalletIcon} style={{ width: 80, height: 80 }}
      />
      <View>
        <Text style={styles.walletValue}>
          Balance
        </Text>
        <View style={styles.amount}>
          {!isHiding ?
            <>
              <Avatar.Icon style={{ backgroundColor: "#ffffff", bottom: -4, marginRight: 5 }} color="#000000" size={24} icon="eye-outline" />
              <Text style={styles.balance}>10USD</Text>
            </>
            :
            <>
              <Avatar.Icon style={{ backgroundColor: "#d1d1d1", bottom: -4, marginRight: 5 }} color="#000000" size={24} icon="eye-off-outline" />
              <Image source={UnknownValue} alt="Unknown" style={{ width: 20, height: 20, top: 5, marginLeft: 8 }} />
            </>
          }
        </View>
      </View>
      <PaperSwitch color='#325240' value={isHiding} onValueChange={onToggleSwitch} />
    </View>
  )
}
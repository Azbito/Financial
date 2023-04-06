import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import WalletIcon from '../../../assets/images/wallet.png';

import UnknownValue from '../../../assets/images/value.png';
import { Button as PaperButton, Switch as PaperSwitch, Provider as PaperProvider, Avatar, Modal } from 'react-native-paper';
import { useState } from 'react';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { services } from '../../utils/services';

export default function Home() {
  const [isHiding, setIsHiding] = useState(false)
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onToggleSwitch = () => setIsHiding(!isHiding);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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
        <View style={styles.buttons}>
          <PaperButton onPress={showModal} icon="piggy-bank" mode="contained" buttonColor='#52ad52' textColor='#fff'>Savings</PaperButton>
          <PaperButton onPress={showModal} icon="currency-usd-off" mode="contained" buttonColor='#da563f' textColor='#fff'>Withdraws</PaperButton>
        </View>
        <Text style={styles.titleServices}>Services</Text>
        <View style={{ height: 100, paddingHorizontal: 15 }}>
          <ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.services}>
              {services.map((item: any) =>
              (
                <View key={item.id}>
                  <Pressable onPress={showModal}>
                    <View key={item.id} style={styles[item.stylesContent]}>
                      <Image source={item.img} style={styles[item.stylesLogo]} />
                      <Text style={styles[item.stylesTitle]}>{item.title}</Text>
                    </View>
                  </Pressable>
                </View>
              )
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.account}>
          <View>
            <Text style={styles.savings}>Savings</Text>
            <View style={styles.registered}>
              <Text style={styles.value}>10USD</Text>
              <Text style={styles.value}>5USD</Text>
            </View>
          </View>
          <View>
            <Text style={styles.withdraws}>Withdraws</Text>
            <View style={styles.registered}>
              <Text style={styles.value}>2.50USD</Text>
              <Text style={styles.value}>2.50USD</Text>
            </View>
          </View>
        </View>
        <Modal style={styles.containerModal} visible={visible} onDismiss={hideModal} contentContainerStyle={styles.contentModal}>
          <Text style={styles.textModal}>Hey, ma'am! This application is in process yet. Please, try once more soon. :D</Text>
        </Modal>
      </View>
    </View>
  );
}
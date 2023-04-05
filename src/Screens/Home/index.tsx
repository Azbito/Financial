import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import WalletIcon from '../../../assets/images/wallet.png';
import FasterPayment from '../../../assets/images/faster-payment.png';
import BankSlip from '../../../assets/images/bank-slip.png';
import Phone from '../../../assets/images/phone.png';
import Card from '../../../assets/images/credit-card.png';
import UnknownValue from '../../../assets/images/value.png';
import { Button as PaperButton, Switch as PaperSwitch, Provider as PaperProvider, Avatar, Modal } from 'react-native-paper';
import { useState } from 'react';

export default function Home() {
  const [isHiding, setIsHiding] = useState(false)
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, width: "80%", height: "100%", justifyContent: "center", alignItems: "center", };

  const onToggleSwitch = () => setIsHiding(!isHiding);

  return (
    <View style={styles.container}>
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
      <View style={styles.services}>
        {/* <Pressable onPress={showModal}>
          <View style={styles.service}>
            <Image source={FasterPayment} style={{ height: 20, width: 30 }}
            />
            <Text style={{ fontSize: 16, width: 70 }}>Faster Payment</Text>
          </View>
        </Pressable> */}
        <Pressable onPress={showModal}>
          <View style={styles.service}>
            <Image source={BankSlip} style={styles.serviceLogo}
            />
            <Text style={styles.serviceTitle}>Bank Slip</Text>
          </View>
        </Pressable>
        <Pressable onPress={showModal}>
          <View style={styles.service}>
            <Image source={Phone} style={styles.serviceLogo}
            />
            <Text style={styles.serviceTitle}>Top Up</Text>
          </View>
        </Pressable>
        <Pressable onPress={showModal}>
          <View style={styles.service}>
            <Image source={Card} style={styles.serviceLogo}
            />
            <Text style={styles.serviceTitle}>Your cards</Text>
          </View>
        </Pressable>
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
    </View >
  );
}

const styles = StyleSheet.create({
  containerModal: {
    alignItems: "center",
    justifyContent: "center"
  },
  contentModal: {
    backgroundColor: 'white',
    padding: 20,
    width: "80%",
    height: "20%",
    borderRadius: 8
  },
  textModal: {
    textAlign: "center",
    fontSize: 20
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    marginTop: 32,
    height: "100%"
  },
  wallet: {
    backgroundColor: "#52ad52",
    padding: 32,
    borderRadius: 16,
    color: "white",
    fontSize: 16,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 32
  },
  walletValue: {
    fontSize: 26,
    color: "white",
    fontFamily: "Poppins-Bold"
  },
  amount: {
    flexDirection: "row"
  },
  balance: {
    fontFamily: "Poppins-Medium",
    color: "white",
    fontSize: 24,
    bottom: 2,
    marginBottom: -16
  },
  showingValue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16
  },
  services: {
    flexDirection: "row",
    width: "80%",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16
  },
  titleServices: {
    fontFamily: "Poppins-Bold",
    color: "#52ad52",
    marginTop: 16,
    fontSize: 28,
  },
  service: {
    padding: 16,
    display: "flex",
    backgroundColor: "#52ad52",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    gap: 8
  },
  serviceLogo: {
    width: 30,
    height: 30
  },
  serviceTitle: {
    color: "#fff",
    width: 60,
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16
  },
  account: {
    flexDirection: "row",
    marginTop: 32,
    gap: 32
  },
  savings: {
    color: "#fff",
    backgroundColor: "#52ad52",
    padding: 6,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderTopLeftRadius: 16
  },
  registered: {
    backgroundColor: "#fffadb",
    textAlign: "center",
  },
  value: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center"
  },
  withdraws: {
    color: "#fff",
    backgroundColor: "#da563f",
    padding: 8,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderTopRightRadius: 16
  }

});

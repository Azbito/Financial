import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Button as PaperButton, Divider, Provider as PaperProvider } from 'react-native-paper';
import PagerView from 'react-native-pager-view';


export default function App() {

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <PaperProvider>
      <View style={styles.navBar}>
        <Image style={styles.logo} source={require('./assets/images/hand-coin-outline.svg')} />
        <Image style={styles.menu} source={require('./assets/images/menu.svg')} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wallet}>
            <Image source={require('./assets/images/wallet.png')} style={{ width: 80, height: 80 }}
            />
            <View>
              <Text style={styles.walletValue}>
                Balance
              </Text>
              <Text style={styles.amount}>
                10USD
              </Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <PaperButton icon="piggy-bank" mode="contained" buttonColor='#52ad52' textColor='#fff'>Savings</PaperButton>
            <PaperButton icon="currency-usd-off" mode="contained" buttonColor='#da563f' textColor='#fff'>Withdraws</PaperButton>
          </View>
          <Text style={styles.titleServices}>Services</Text>
          <View style={styles.services}>
            <View style={styles.service}>
              <Image source={require('./assets/images/pix.svg')} style={styles.serviceLogo}
              />
              <Text style={styles.serviceTitle}>PIX</Text>
            </View>
            <View style={styles.service}>
              <Image source={require('./assets/images/bank-slip.svg')} style={styles.serviceLogo}
              />
              <Text style={styles.serviceTitle}>Bank Slip</Text>
            </View>
            <View style={styles.service}>
              <Image source={require('./assets/images/phone.svg')} style={styles.serviceLogo}
              />
              <Text style={styles.serviceTitle}>Top Up</Text>
            </View>
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
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#7cd17c",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    height: "2.5rem",
    zIndex: 2,
    boxShadow: "0 .1rem 2rem rgba(0, 0, 0, 0.2)"
  },
  logo: {
    marginLeft: ".8rem",
    width: 25,
    height: 25
  },
  menu: {
    marginRight: "1rem",
    width: 25,
    height: 25
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    marginTop: "5rem"
  },
  wallet: {
    backgroundColor: "#52ad52",
    padding: "4rem",
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
    fontFamily: "Poppins-Thin",
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  services: {
    marginTop: 16,
    flexDirection: "row",
    gap: 16
  },
  titleServices: {
    fontFamily: "Poppins-Bold",
    color: "#52ad52",
    marginTop: "1rem",
    fontSize: 28
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
    width: 40,
    height: 40
  },
  serviceTitle: {
    color: "#fff"
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
    marginTop: "1rem"
  },
  account: {
    flexDirection: "row",
    marginTop: "2rem",
    gap: 32
  },
  savings: {
    color: "#fff",
    backgroundColor: "#52ad52",
    padding: ".5rem",
    width: "10rem",
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
    marginTop: ".5rem",
    marginBottom: ".5rem",
  },
  withdraws: {
    color: "#fff",
    backgroundColor: "#da563f",
    padding: ".5rem",
    width: "10rem",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderTopRightRadius: 16
  }

});

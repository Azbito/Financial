import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { services } from '../../utils/services';
import User from '../../components/User';
import Wallet from '../../components/Wallet';
import EconomiesButtons from '../../components/EconomiesButtons';

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <User />
        <Wallet />
        <EconomiesButtons />
        <Text style={styles.titleServices}>Services</Text>
        <View style={{ height: 100, paddingHorizontal: 15 }}>
          <ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.services}>
              {services.map((item: any) =>
              (
                <View key={item.id}>
                  <Pressable onPress={() => alert("Hold on! Work is in progress yet!")}>
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
              <Text style={styles.value}>10USD</Text>
              <Text style={styles.value}>5USD</Text>
              <Text style={styles.value}>10USD</Text>
            </View>
          </View>
          <View>
            <Text style={styles.withdraws}>Withdraws</Text>
            <View style={styles.registered}>
              <Text style={styles.value}>2.50USD</Text>
              <Text style={styles.value}>2.50USD</Text>
              <Text style={styles.value}>2.50USD</Text>
              <Text style={styles.value}>2.50USD</Text>
              <Text style={styles.value}>2.50USD</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
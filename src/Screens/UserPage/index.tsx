
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import UserData from '../../components/UserData';
import YourGoals from '../../components/Goals';
import CreateGoal from '../../components/CreateGoal';
import { useContext, useState } from 'react';
import ModalCreateGoal from '../../components/ModalCreateGoal';
import { GoalsContext } from '../../contexts/goalsContext';
import usdFormater from '../../utils/usdFormater';
import Earn from '../../../assets/images/earn.png'
import Verify from '../../../assets/images/verify.png'

export default function UserPage() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const { goalsList } = useContext(GoalsContext)

  const result = goalsList.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.moneyNeeded ?? 0), 0
  );

  const format = usdFormater(result)

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <UserData />
          <CreateGoal onPressButton={showModal} />
          <View style={{ gap: 20, marginBottom: 16, marginTop: 16 }}>
            <View style={{ backgroundColor: "#4d2bac", padding: 16, borderRadius: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Image source={Verify} style={{ width: 40, height: 40 }} />
              <Text style={{ fontFamily: "Poppins-Medium", color: "white", fontSize: 20 }}>
                {goalsList.length}
              </Text>
            </View>
            <View style={{ backgroundColor: "#55b43d", padding: 16, borderRadius: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Image source={Earn} style={{ width: 40, height: 40 }} />
              <Text style={{ fontFamily: "Poppins-Medium", color: "white", fontSize: 20 }}>
                {format}
              </Text>
            </View>
          </View>
          <YourGoals />
        </View>
      </ScrollView>
      <ModalCreateGoal onDismiss={hideModal} visible={visible} />
    </View>
  );
}
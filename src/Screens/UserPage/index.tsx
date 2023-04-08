
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import UserData from '../../components/UserData';
import YourGoals from '../../components/Goals';
import CreateGoal from '../../../assets/CreateGoal';
import { useState } from 'react';
import ModalCreateGoal from '../../components/ModalCreateGoal';


export default function UserPage() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <UserData />
          <CreateGoal onPressButton={showModal} />
          <YourGoals />
        </View>
      </ScrollView>
      <ModalCreateGoal onDismiss={hideModal} visible={visible} />
    </View>
  );
}
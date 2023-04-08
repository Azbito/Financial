
import { Text, View } from 'react-native';
import { styles } from './styles';
import UserData from '../../components/UserData';
import YourGoals from '../../components/Goals';


export default function UserPage() {

  return (
    <View style={styles.container}>
      <UserData />
      <YourGoals />
    </View>
  );
}
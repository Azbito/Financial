import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import AvatarImage from '../../../assets/images/avatar.jpg'
import { styles } from "./styles";

export default function User() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarLine}>
        <Avatar.Image source={AvatarImage} size={60} />
        <Text style={styles.welcome}>Welcome!</Text>
      </View>
    </View>
  )
}
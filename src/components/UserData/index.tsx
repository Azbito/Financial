import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import AvatarImage from '../../../assets/images/avatar.jpg'
import { styles } from "./styles";

export default function UserData() {
  return (
    <View style={styles.content}>
      <Text style={styles.welcome}>Your Data</Text>
      <Avatar.Image source={AvatarImage} size={60} style={{ zIndex: 1 }} />
      <View style={styles.container}>
        <Text style={styles.info}>Name</Text>
        <Text style={styles.userText}>Alexander Caeser</Text>
        <View style={styles.contacts}>
          <View style={styles.contact}>
            <Avatar.Icon style={{ backgroundColor: "#639c31" }} size={32} color="white" icon="phone" />
            <Text style={styles.userText}>+44 20 1234 5678</Text>
          </View>
          <View style={styles.contact}>
            <Avatar.Icon style={{ backgroundColor: "#9c3831" }} size={32} color="white" icon="email" />
            <Text style={styles.userText}>alexandercsruk_44@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
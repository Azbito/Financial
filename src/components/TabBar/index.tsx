import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import Home from '../../../assets/images/home.png'
import Settings from '../../../assets/images/settings.png'
import User from '../../../assets/images/user.png'
import { Modal, Text } from "react-native-paper";
import { useState } from "react";
import { useNavigate } from "react-router-native";

export default function TabBar() {
  const navigation = useNavigate()

  return (
    <View style={styles.tabBar}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Pressable onPress={() => navigation("/user")}>
            <View style={styles.user}>
              <Image source={User} style={{ height: 25, width: 25 }} />
            </View>
          </Pressable>
          <Pressable onPress={() => navigation("/")}>
            <View style={styles.home}>
              <Image source={Home} style={{ height: 25, width: 25 }} />
            </View>
          </Pressable>
          <Pressable onPress={() => alert("Hey, ma'am! This application is in process yet. Please, try once more soon. :D")}>
            <View style={styles.settings}>
              <Image source={Settings} style={{ height: 25, width: 25 }} />
            </View>
          </Pressable>
        </View>
      </View>

    </View>

  )
}
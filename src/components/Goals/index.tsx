import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Avatar, Button, RadioButton } from "react-native-paper";
import { goals } from "../../utils/goals";
import { useContext, useState } from "react";
import { produce } from 'immer'
import { GoalsContext } from "../../contexts/goalsContext";

export default function YourGoals() {

  const { goalsList, setGoalsList } = useContext(GoalsContext)

  function delTask(index: any) {
    setGoalsList(
      produce(goalsList, draft => {
        draft.splice(index, 1)
      })
    )
  }
  return (
    <View style={styles.content}>
      <Text style={styles.titleGoals}>Your Goals</Text>
      <View style={{ gap: 32 }}>
        {goalsList.length > 0 ? goalsList.map((item, index) => (
          <View key={item.id} style={styles.container}>
            <Pressable style={{ position: "absolute", top: 8, right: 6 }} onPress={() => delTask(index)}>
              <Avatar.Icon size={32} icon="trash-can-outline" style={{ backgroundColor: "#a12f2f" }} />
            </Pressable>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.moneyAmount}>Money needed: <Text style={styles.strong}>{item.moneyNeeded}</Text></Text>
            <Text style={styles.isDoneTitle}>Is it done?</Text>
            <View style={styles.isDone}>
              <View>
                <RadioButton
                  value={item.isDone}
                  status={item.isDone === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setGoalsList(produce(goalsList, draft => {
                    draft[index].isDone = "first"
                  }))}
                  color="#3a783b"
                />
                <Text style={styles.response}>Yes</Text>
              </View>
              <View>
                <RadioButton
                  value={item.isDone}
                  status={item.isDone === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setGoalsList(produce(goalsList, draft => {
                    draft[index].isDone = "second"
                  }))}
                  color="#f55a42"
                />
                <Text style={styles.response}>No</Text>
              </View>
            </View>
          </View>
        )) :
          <View style={{ width: "80%", backgroundColor: "#d33d42", padding: 20, borderRadius: 16 }}>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16, textAlign: "center", color: "white" }}>Hey! Don't be dispirited. Create goals and you will see something wonderful in the end!</Text>
          </View>
        }

      </View>
    </View>
  )
}
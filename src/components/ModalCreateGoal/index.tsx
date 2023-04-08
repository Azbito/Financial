import { Text, View } from "react-native";
import { Button, Modal, RadioButton, TextInput } from "react-native-paper";
import { styles } from './styles'
import { useContext, useState, useId } from "react";
import { GoalsContext, GoalsProps } from "../../contexts/goalsContext";
import { produce } from "immer";

type ModalCreateGoalProps = {
  visible: boolean,
  onDismiss: () => void
}

export default function ModalCreateGoal({ visible, onDismiss }: ModalCreateGoalProps) {
  const initialGoal = {
    id: null,
    title: "",
    description: "",
    moneyNeeded: "",
    isDone: ""
  }

  const { goalsList, setGoalsList } = useContext(GoalsContext)
  const [goal, setGoal] = useState<GoalsProps>(initialGoal)

  function addGoal() {

    const id = Math.random()

    setGoalsList(
      produce(goalsList, draft => {
        draft.push({
          ...goal,
          id
        })
      })
    )

    setGoal(initialGoal)

    onDismiss()
  }

  return (
    <Modal style={styles.containerModal} visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.contentModal}>
      <View style={{ flex: 1, alignItems: "center", gap: 16 }}>
        <Text style={styles.textModal}>Register your goal</Text>
        <TextInput mode="outlined" label="Title" style={{ width: "80%" }} value={goal.title} onChangeText={(text: string) => setGoal(produce(goal, draft => {
          draft.title = text
        }))} />
        <TextInput mode="outlined" label="Description" style={{ width: "80%" }} value={goal.description} onChangeText={(text: string) => setGoal(produce(goal, draft => {
          draft.description = text
        }))} />
        <TextInput mode="outlined" label="Money needed" style={{ width: "80%" }} value={goal.moneyNeeded} onChangeText={(text: string) => setGoal(produce(goal, draft => {
          draft.moneyNeeded = text
        }))} />
        <Text style={{ fontSize: 20, fontFamily: "Poppins-Medium" }}>Is it done?</Text>
        <View style={styles.isDone}>
          <View>
            <RadioButton
              value={goal.isDone}
              status={goal.isDone === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setGoal(produce(goal, draft => {
                draft.isDone = "first"
              }))}
              color="#3a783b"
            />
            <Text style={styles.response}>Yes</Text>
          </View>
          <View>
            <RadioButton
              value={goal.isDone}
              status={goal.isDone === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setGoal(produce(goal, draft => {
                draft.isDone = "second"
              }))}
              color="#f55a42"
            />
            <Text style={styles.response}>No</Text>
          </View>
        </View>
        <Button mode="contained" onPress={addGoal}>Post Goal</Button>
      </View>
    </Modal>
  )
}
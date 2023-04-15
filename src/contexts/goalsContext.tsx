import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface GoalsContextType {
  goalsList: GoalsProps[],
  setGoalsList: Dispatch<SetStateAction<GoalsProps[]>>
}

interface GoalsContextProviderProps {
  children: ReactNode
}

export interface GoalsProps {
  id: number | null | string,
  title: string,
  description: string,
  moneyNeeded: any,
  isDone: string
}

export const GoalsContext = createContext({} as GoalsContextType)

export const GoalsContextProider = ({ children }: GoalsContextProviderProps) => {
  const [goalsList, setGoalsList] = useState<GoalsProps[]>([])

  useEffect(() => {
    AsyncStorage.getItem('@storage_goals')
      .then((res) => {
        const goals = res != null ? JSON.parse(res) : []
        setGoalsList(goals)
      })
  }, [])

  return (
    <GoalsContext.Provider value={{ goalsList, setGoalsList }}>
      {children}
    </GoalsContext.Provider>
  )
}
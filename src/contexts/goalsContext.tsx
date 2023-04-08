import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { goals } from '../utils/goals';

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
  moneyNeeded: string,
  isDone: string
}

export const GoalsContext = createContext({} as GoalsContextType)

export const GoalsContextProider = ({ children }: GoalsContextProviderProps) => {
  const [goalsList, setGoalsList] = useState<GoalsProps[]>(goals)
  return (
    <GoalsContext.Provider value={{ goalsList, setGoalsList }}>
      {children}
    </GoalsContext.Provider>
  )
}
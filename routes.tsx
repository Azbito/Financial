import { NativeRouter, Route, Routes as NativeRoutes } from 'react-router-native';

import React from "react";
import Home from "./src/Screens/Home";
import UserPage from "./src/Screens/UserPage";
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './src/components/TabBar';

export function Routes() {

  function ScreenContainer({ children }: any) {
    return (
      <>
        {children}
        <TabBar />
      </>
    )
  }

  return (
    <NativeRouter>
      <NativeRoutes>
        <Route path="/" index element={<ScreenContainer><Home />
        </ScreenContainer>} />
        <Route path="/user" element={<ScreenContainer><UserPage />
        </ScreenContainer>} />
      </NativeRoutes>
    </NativeRouter>
  );
}

import { Routes } from './routes';
import { useFonts } from 'expo-font';
import TabBar from './src/components/TabBar';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style='light' />
      <Routes />
      <TabBar />
    </>
  )
}
import { Routes } from './routes';
import { useFonts } from 'expo-font';
import TabBar from './src/components/TabBar';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoalsContextProider } from './src/contexts/goalsContext';

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
    <SafeAreaProvider>
      <GoalsContextProider>
        <StatusBar style='light' />
        <Routes />
      </GoalsContextProider>
    </SafeAreaProvider>
  )
}
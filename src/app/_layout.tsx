import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
};

const RootNavigation = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;

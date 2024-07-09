import { Tabs } from "expo-router";
import { FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const TabsNavigationLayout = () =>  {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#fff",
        tabBarActiveTintColor: "#a16207",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsNavigationLayout

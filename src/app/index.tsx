import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      className="flex-1 items-center justify-center pb-10 bg-gradient-to-bl from-gray-200 to-gray-900"
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View className="absolute bottom-14 flex flex-col items-center justify-center w-full bg-gradient-to-t from-gray-900 px-4">
        <Text className="text-4xl text-white font text-center mb-4">
          Breaking Boundaries, Breaking News
        </Text>
        <Text className="text-gray-300 text-center text-xl mb-6">
          Explore the world through our lens. Your passport to a connected and
          informed world, right at your fingertips.
        </Text>
        <Pressable
          className="bg-stone-700 rounded-full p-4 w-full items-center justify-center shadow-lg"
          onPress={() => router.push("/(tabs)/home")}
        >
          <Text className="text-white text-2xl">Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

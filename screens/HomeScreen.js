//rnfes
import React from "react";
import { StyleSheet, Image, View, SafeAreaView, StatusBar } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={(styles.container, tw`bg-white h-full`)}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

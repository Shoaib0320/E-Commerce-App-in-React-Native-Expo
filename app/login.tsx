// import { ThemedButton } from "@/components/ThemedButton";
// import { ThemedText } from "@/components/ThemedText";
// import { router } from "expo-router";
// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from 'react-native';

// export default function LoginScreen() {

//   const [text, onChangeText] = React.useState('');
//   const [email, onChangeEmail] = React.useState('');
//   const [number, onChangeNumber] = React.useState('');

//   return (
//     <View style={{ flex: 1, justifyContent: "between" }}>
//       <ThemedText type="title" align="center">
//         Login to Continue
//       </ThemedText>

//       <SafeAreaProvider>
//         <SafeAreaView>
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeText}
//             value={text}
//             placeholder="Number"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeEmail}
//             value={email}
//             placeholder="Email"
//           />
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeNumber}
//             value={number}
//             placeholder="Number"
//             keyboardType="numeric"
//           />
//         </SafeAreaView>
//       </SafeAreaProvider>

//       <ThemedButton
//         onPress={() => router.push("/(tabs)")}
//         bgColor="#c1e1c5"
//         txtColor="#194d33"
//         my={10}
//         txt="Go to Home Page"
//       />
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // alignItems: 'center',
//     margin: 'auto'
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 12
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });



import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [text, onChangeText] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <ThemedText type="title" align="center" style={styles.title}>
            Login to Continue
          </ThemedText>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Your Name"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter Your Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter Your Number"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />

          <ThemedButton
            // onPress={() => router.push("/(tabs)")}
            bgColor="gray"
            txtColor="#fff"
            my={20}
            borderRadius={30}
            txt="Login"
          />
          <ThemedButton
            // onPress={() => router.push("/(tabs)")}
            bgColor="#8e44ad"
            txtColor="#fff"
            my={20}
            borderRadius={30}
            txt="Continue With Google"
          />

          <ThemedButton
            onPress={() => router.push("/(tabs)")}
            // bgColor="linear-gradient(to right, #8e44ad, #3498db)"
            txtColor="#fff"
            my={20}
            borderRadius={30}
            txt="Go to Home Page"
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Dark background for VIP style
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    backgroundColor: "#2c2c2c",
    color: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

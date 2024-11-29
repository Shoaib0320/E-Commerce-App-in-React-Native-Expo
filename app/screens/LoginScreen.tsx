import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const [text, onChangeText] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    const router = useRouter();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Login Screen</Text>
            <SafeAreaProvider>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Number"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Number"
                        keyboardType="numeric"
                    />
                </SafeAreaView>
            </SafeAreaProvider>
            <TouchableOpacity
      onPress={() => router.push("./HomeScreen")}
      style={{
                    backgroundColor: "#c1e1c5",
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                }}
            >
                <Text style={{ color: "#194d33", textAlign: "center" }}>
                    Go to Home Page
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 'auto'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 12
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

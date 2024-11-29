import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Bykea from '../components/bykea';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            {/* <Button style={styles.container}
                title="Open Drawer"
                onPress={() => navigation.toggleDrawer()}
            /> */}
            <View>
            <Text style={styles.text}>Welcome to Home Screen</Text>
                <Bykea />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 8
    },
});

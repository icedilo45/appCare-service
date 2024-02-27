import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_bWVldC1ib2FyLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <SafeAreaView style={styles.container}>
        <View style={styles.container} >
          {/* Signed in Section */  }
          <SignedIn>
            <Text>You are signed in</Text>
          </SignedIn>
          {/* Signed out Section */}
          <SignedOut>
            <Login/>
          </SignedOut>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});

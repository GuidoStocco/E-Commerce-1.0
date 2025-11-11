import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant='bold'>Hello World! ECommerce</AppText>
      <AppText variant='medium'>Hello World! ECommerce</AppText>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

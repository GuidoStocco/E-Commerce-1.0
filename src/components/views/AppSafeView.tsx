import {SafeAreaView, View, StatusBar, Platform, StyleSheet, ViewStyle} from 'react-native';
import { AppColors } from '../../styles/colors';
import { FC } from 'react';

interface AppSafeViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}


export default function AppSafeView({children, style}: AppSafeViewProps) {
 return (
   <SafeAreaView style={styles.view}>
    <View style={[styles.container, style]}>
      {children}
    </View>
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0
    },
    container:{
        flex: 1
    }
})
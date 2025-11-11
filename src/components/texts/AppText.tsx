import { View, Text, StyleSheet, TextStyle, TextProps } from 'react-native';
import {s} from 'react-native-size-matters';
import {FC} from 'react';
import { AppColors } from '../../styles/colors';


interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: 'bold'| 'medium'
}

const AppText :FC<AppTextProps> = ({children, style, variant = 'medium', ...rest}) =>{
 return ( 
    <Text
      {...rest}
      style={[style, styles[variant]]}
    >{children}</Text>
  );
}

export default AppText;


const styles = StyleSheet.create({
  bold:{
    fontSize: s(18),
    color: AppColors.black
  },
  medium:{
    fontSize: s(16),
    color:AppColors.black
  }
})
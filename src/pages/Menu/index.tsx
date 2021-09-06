import React from 'react';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';


import styles from './styles';
import LogoMarvel from '../../assets/images/logoMarvelWhite.png'



const Status: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <LinearGradient
    start={[0, 0]}
    
    end={[1.0, 1.0]}
    colors={['#EB3030', '#520105']}
    style={[styles.container, { paddingTop: insets.top }]}
    >
    <View>
        <Text style={styles.textLogo}>Lista de Heróis</Text>
        <Image style={styles.imageLogo} source={LogoMarvel}/>
    </View>
    <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={styles.buttonList}>
        <Text style={styles.textButton}>Acessar Lista</Text>
    </TouchableOpacity>

    </LinearGradient>
  );
};
export default Status;

import React, { useState, useEffect, useCallback } from 'react';
import {
  Animated,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import styles from './styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const NewUser: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [translateY] = useState(new Animated.Value(1200));
  const [opacity] = useState(new Animated.Value(0));

  const dispatch = useDispatch();
  const setRenderDetails = useCallback(
    (boolean) => dispatch({ type: 'setRenderDetails', value: boolean }),
    [dispatch],
  );
  const detailInfo = useSelector((state) => state.detailInfo);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCloseButton = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 1200,
      duration: 350,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
    setTimeout(() => { setRenderDetails(false); }, 300);
  }, []);

  var description = detailInfo.description

  if(detailInfo.description === "") {
    description = "Descrição indisponível"
  }


  const comics = detailInfo.comics.items


  return (

  <Animated.View style={[styles.background, { opacity }]}>
    <AnimatedLinearGradient
     start={[0, 0]}
     end={[1.0, 1.0]}
     colors={['#EB3030', '#520105']}
      style={[styles.container, {
        transform: [{ translateY }]}]}>
      
        <TouchableOpacity
        onPress={() => { handleCloseButton(); }}
        style={styles.iconClose}>
            <AntDesign name='close' size={32} color='white'/>
        </TouchableOpacity>

        <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollView} >
          <Text style={styles.textTitle}>{detailInfo.name}</Text>
          <Image source={{uri: `${detailInfo.thumbnail.path}/standard_large.jpg`}}style={styles.imageAvatar}/>
          <Text style={styles.textDescription}>{description}</Text>
          <Text style={styles.textAparece}>Aparece em:</Text>
          {comics.map(item => (<Text style={styles.textComics}>{item.name}</Text>))}
        </ScrollView>

      

    </AnimatedLinearGradient>
  </Animated.View>

  );
};

export default NewUser;

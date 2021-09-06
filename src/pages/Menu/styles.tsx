
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '20%',

  },

  textLogo: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'BebasNeue_400Regular',
  },

  imageLogo: {
    resizeMode: 'contain',
    width: 300,
    height: 150,
  },

  buttonList: {
      height: 50,
      width: 300,
      backgroundColor: '#EB3030',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      elevation: 10,
  },

  textButton: {
      fontSize: 25,
      color: 'white',
      fontFamily: 'BebasNeue_400Regular',
  }

});

export default styles;

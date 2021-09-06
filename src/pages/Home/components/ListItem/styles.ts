
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft: 20,
  },

  textName: {
    fontSize: 20,
    fontFamily: 'BebasNeue_400Regular',
  },

  imageAvatar: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginRight: 20,
    marginLeft: 5,
  }

});

export default styles;

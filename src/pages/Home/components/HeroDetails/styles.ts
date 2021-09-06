import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000000cc',
    position: 'absolute',
  },

  container: {
    height: '85%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    paddingTop: 35,
    paddingHorizontal: 30,
  },

  iconClose: {
    position: 'absolute',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 5,
    top: 5,
  },

  imageAvatar: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginVertical: 20,
  },

  scrollView: {
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'BebasNeue_400Regular',
  },

  textDescription: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    alignSelf: 'flex-start',
    fontFamily: 'BebasNeue_400Regular',
  },

  textAparece: {
    fontSize: 22,
    alignSelf: 'flex-start',
    color: 'white',
    marginVertical: 20,
    fontFamily: 'BebasNeue_400Regular',
  },

  textComics: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    marginBottom: 15,
    fontFamily: 'BebasNeue_400Regular',
  },
});

export default styles;

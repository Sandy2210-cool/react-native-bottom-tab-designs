import { StyleSheet } from 'react-native';
import Color from './Color';

export const commonStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 4,
    paddingTop:10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
    backgroundColor: Color.primaryColor,
    shadowColor: Color.primaryColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
})


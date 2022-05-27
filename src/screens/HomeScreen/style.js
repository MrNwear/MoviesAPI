import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
  posterStyle: {
    width: 320,
    height: 300,
    resizeMode: 'stretch',
  },
  titleAndDateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginRight: 15,
  },
  movieDetailsWrapper: {
    flex: 1,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  overviewHeadStyle: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;

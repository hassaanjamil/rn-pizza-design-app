import {colors} from '../../assets/colors/colors';

const {StyleSheet, View, Image} = require('react-native');

export const IngredientItem = ({item, index}) => {
  return (
    <View
      style={[
        styles.dIItemImageContainer,
        index == 0 ? {marginStart: 20} : {marginStart: 0},
      ]}>
      <Image style={styles.dIItemImage} source={item.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  dIItemImageContainer: {
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginEnd: 15,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 8,
  },
  dIItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

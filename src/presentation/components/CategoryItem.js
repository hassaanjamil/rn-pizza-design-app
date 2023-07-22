import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {AppColors, colors} from '../../../assets/colors/colors';

export const CategoryItem = ({item, index}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const appColors = AppColors(isDarkMode);
  const textDarkStyle = {
    color: appColors.textDark,
  };

  return (
    <View
      style={[
        styles.categoryItemContainer,
        index == 0
          ? {
              marginStart: 20,
              backgroundColor: appColors.primary,
              shadowColor: appColors.shadowColor,
            }
          : {
              marginStart: 0,
              backgroundColor: appColors.itemsBackground,
              shadowColor: appColors.shadowColor,
            },
      ]}>
      <Image style={styles.categoryItemImage} source={item.image} />
      <Text style={[styles.categoryItemText, textDarkStyle]}>{item.title}</Text>
      <View
        style={[
          styles.categoryItemIconContainer,
          index == 0
            ? {backgroundColor: appColors.white}
            : {
                backgroundColor: appColors.secondary,
              },
        ]}>
        <Feather
          name="chevron-right"
          size={8}
          color={appColors.iconColor}
          style={styles.categoryItemArrowIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemContainer: {
    marginEnd: 20,
    borderRadius: 20,
    shadowColor: colors.textDark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 8,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 24,
    marginHorizontal: 22,
  },
  categoryItemText: {
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '600',
  },
  categoryItemIconContainer: {
    width: 26,
    height: 26,
    borderRadius: 26,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  categoryItemArrowIcon: {
    fontWeight: 'bold',
  },
});

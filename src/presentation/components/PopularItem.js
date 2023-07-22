import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../../assets/colors/colors';

export const PopularItem = ({item, index}) => {
  return (
    <View style={styles.piContainer}>
      {/* CONTENT */}
      <View style={styles.piContentContainer}>
        {/* WEEK */}
        <View style={styles.piWeekContainer}>
          <MaterialCommunityIcons
            name="crown"
            style={styles.piWeekImage}
            size={12}
            color={colors.primary}
          />
          <Text style={styles.piWeekText}>top of the week</Text>
        </View>

        {/* TITLES */}
        <View style={styles.piTitleContainer}>
          <Text style={styles.piTitle}>{item.title}</Text>
          <Text style={styles.piSubtitle}>{item.weight}</Text>
        </View>

        {/* ADD CART RATING */}
        <View style={styles.piCartRatingContainer}>
          <View style={styles.piCartContainer}>
            <Feather name="plus" size={10} color={colors.textDark} />
          </View>
          <View style={styles.piRatingContainer}>
            <MaterialCommunityIcons
              name="star"
              size={10}
              color={colors.textDark}
            />
            <Text style={styles.piRatingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
      {/* IMAGE */}
      <View style={styles.piImageContainer}>
        <Image source={item.image} style={styles.piImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  piContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: 12,
    marginStart: 20,
    marginEnd: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    marginVertical: 8,
  },
  piContentContainer: {
    width: '60%',
  },
  piWeekContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginStart: 19,
  },
  piWeekImage: {},
  piWeekText: {
    marginStart: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },
  piImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  piTitleContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  piTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },
  piSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: '500',
    color: colors.textLight,
    marginTop: 5,
  },
  piCartRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  piCartContainer: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  piRatingContainer: {
    flexDirection: 'row',
    marginStart: 20,
  },
  piRatingText: {
    marginStart: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    fontWeight: '600',
    color: colors.textDark,
  },
  piImageContainer: {
    width: '40%',
  },
  piImage: {
    width: Dimensions.get('screen').width / 2,
    height: 125,
    resizeMode: 'contain',
  },
});

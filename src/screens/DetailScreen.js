import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../assets/colors/colors';
import {IngredientItem} from '../components/IngredientItem';

export const DetailScreen = ({route, navigation}) => {
  const isDarkMode = useColorScheme === 'dark';
  const backgroundStyle = {
    backgroundStyle: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const {item} = route.params;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}>
      <View styles={[styles.root, backgroundStyle]}>
        {/* HEADER */}
        <SafeAreaView>
          <View style={styles.dHeaderContainer}>
            <Pressable
              onPress={({pressed}) => {
                navigation.goBack();
              }}>
              <View style={styles.dHeaderBackIconContainer}>
                <Feather name="chevron-left" size={8} color={colors.textDark} />
              </View>
            </Pressable>

            <View style={styles.dHeaderFavIconContainer}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* TITLES */}
        <View style={styles.dTitlesContainer}>
          <Text style={styles.dTitlesLabel}>{item.title}</Text>
          <Text style={styles.dTitlesPrice}>{item.price}</Text>
        </View>

        {/* CONTENT */}
        <View style={styles.dContentContainer}>
          <View style={styles.dContentTextsContainer}>
            <View style={styles.dContentTextContainer}>
              <Text style={styles.dContentLabel}>Size</Text>
              <Text style={styles.dContentValue}>{item.size}</Text>
            </View>
            <View style={styles.dContentTextContainer}>
              <Text style={styles.dContentLabel2}>Crust</Text>
              <Text style={styles.dContentValue}>{item.crust}</Text>
            </View>
            <View style={styles.dContentTextContainer}>
              <Text style={styles.dContentLabel2}>Delivery in</Text>
              <Text style={styles.dContentValue}>{item.delivery}</Text>
            </View>
          </View>
          <View style={styles.dContentImageContainer}>
            {/* IMAGE */}
            <Image style={styles.dContentImage} source={item.image} />
          </View>
        </View>

        {/* INGREDIENTS */}
        <View style={styles.dIContainer}>
          <Text style={styles.dITitle}>Ingredients</Text>
          <View>
            <FlatList
              style={styles.dIList}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={item.ingredients}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <IngredientItem item={item} index={index} />
              )}
            />
          </View>

          {/* PLACE ORDER BUTTON */}
          <View style={styles.dPlaceOrderContainer}>
            <Text style={styles.dPlaceOrderText}>Place an order</Text>
            <Feather name="chevron-right" size={15} color={colors.textDark} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  dHeaderContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  dHeaderBackIconContainer: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.textLight,
  },
  dHeaderFavIconContainer: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
  },
  dTitlesContainer: {
    paddingStart: 20,
    marginTop: 30,
  },
  dTitlesLabel: {
    width: Dimensions.get('screen').width / 2,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
    fontSize: 32,
    color: colors.textDark,
  },
  dTitlesPrice: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 32,
    color: colors.price,
  },
  dContentContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  dContentTextsContainer: {
    flex: 1,
  },
  dContentTextContainer: {},
  dContentLabel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '500',
    color: colors.textLight,
  },
  dContentValue: {
    marginTop: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  dContentLabel2: {
    marginTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '500',
    color: colors.textLight,
  },
  dContentImageContainer: {
    flex: 2,
  },
  dContentImage: {
    width: Dimensions.get('screen').width / 1.45,
    height: 176,
    resizeMode: 'contain',
    marginStart: Dimensions.get('screen').width / 8,
  },
  dIContainer: {
    marginTop: 60,
  },
  dITitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  dIList: {
    marginTop: 12,
  },
  dPlaceOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 22,
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  dPlaceOrderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
    marginEnd: 10,
  },
});

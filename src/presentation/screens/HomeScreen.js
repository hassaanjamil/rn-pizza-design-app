import {
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
import {AppColors, colors} from '../../../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {popularData} from '../../../assets/data/PopularData';
import {CategoryItem} from '../components/CategoryItem';
import {PopularItem} from '../components/PopularItem';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getCategoriesData} from '../../data/redux/slices/CategoriesDataSlice';
import {getPopularData} from '../../data/redux/slices/PopularDataSlice';

export const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const appColors = AppColors(isDarkMode);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const backgroundStyle = {
    backgroundColor: appColors.background,
  };
  const textDarkStyle = {
    color: appColors.textDark,
  };

  useEffect(() => {
    dispatch(getCategoriesData());
    dispatch(getPopularData());
  }, []);
  return (
    <View styles={styles.root}>
      <ScrollView
        style={[backgroundStyle]}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/images/profile.png')}
            />
            <MaterialCommunityIcons
              name="sort-reverse-variant"
              size={24}
              style={textDarkStyle}
            />
          </View>
        </SafeAreaView>

        {/* TITLES */}
        <View style={styles.titleContainer}>
          <Text style={[styles.title1, textDarkStyle]}>Food</Text>
          <Text style={[styles.title2, textDarkStyle]}>Delivery</Text>
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={16} style={textDarkStyle} />
          <View style={styles.searchTextWrapper}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={styles.categoriesContainer}>
          <Text style={[styles.categoriesTitle, textDarkStyle]}>
            Categories
          </Text>
          <View style={styles.categoriesListContainer}>
            <FlatList
              data={state.categoriesData.data}
              nestedScrollEnabled={true}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <CategoryItem item={item} index={index} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* POPULAR */}
        <View style={styles.popularContainer}>
          <Text style={[styles.popularTitle, textDarkStyle]}>Popular</Text>
          <View style={styles.popularListContainer}>
            <FlatList
              data={state.popularData.data}
              nestedScrollEnabled={true}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => {
                    navigation.navigate('detail', {
                      item: popularData[index],
                    });
                  }}>
                  <PopularItem item={item} index={index} />
                </Pressable>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title1: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: colors.textDark,
  },
  title2: {
    paddingTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '700',
    fontSize: 32,
    color: colors.textDark,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  searchTextWrapper: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: '600',
    color: colors.textLight,
    marginBottom: 5,
  },
  categoriesContainer: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  categoriesListContainer: {
    marginTop: 7,
  },
  popularContainer: {
    marginTop: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  popularListContainer: {
    marginTop: 11,
  },
});

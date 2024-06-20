import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

const HomePage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Eric Atsu</Text>
          <Text style={styles.userEmail}>eric@gmail.com</Text>
        </View>
        <Image
          source={require('./assets/profile image.jpg')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.searchBox}>
        <Image
          source={require('./assets/search-icon.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
          style={styles.searchInput}
        />
        <Image
          source={require('./assets/filter-icon.png')}
          style={styles.filterIcon}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal={true} style={styles.featuredJobsScroll} showsHorizontalScrollIndicator={true}>
        <Card containerStyle={styles.featuredJobCard}>
          <View style={styles.featuredJobContent}>
            <Image
              source={require('./assets/facebook.png')}
              style={styles.featuredJobImage}
            />
            <View style={styles.featuredJobText}>
              <Text style={styles.featuredJobTitle}>Software Engineer</Text>
              <Text style={styles.featuredJobCompany}>Facebook</Text>
              <Text style={styles.featuredJobSalary}>$180,000</Text>
              <Text style={styles.featuredJobLocation}>Accra, Ghana</Text>
            </View>
          </View>
        </Card>

        <Card containerStyle={styles.featuredJobCard}>
          <View style={styles.featuredJobContent}>
            <Image
              source={require('./assets/google.png')}
              style={styles.featuredJobImage}
            />
            <View style={styles.featuredJobText}>
              <Text style={styles.featuredJobTitle}>Software Engineer</Text>
              <Text style={styles.featuredJobCompany}>Google</Text>
              <Text style={styles.featuredJobSalary}>$160,000</Text>
              <Text style={styles.featuredJobLocation}>Mountain View, US</Text>
            </View>
          </View>
        </Card>
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <Card containerStyle={styles.popularJobCard}>
        <Image
          source={require('./assets/burgerking.png')}
          style={styles.popularJobImage}
        />
        <View style={styles.popularJobText}>
          <Text style={styles.popularJobTitle}>Jr Executive</Text>
          <Text style={styles.popularJobCompany}>Burger King</Text>
          <Text style={styles.popularJobSalary}>$96,000/y</Text>
          <Text style={styles.popularJobLocation}>Los Angeles, US</Text>
        </View>
      </Card>

      <Card containerStyle={styles.popularJobCard}>
        <Image
          source={require('./assets/productmanager1.png')}
          style={styles.popularJobImage}
        />
        <View style={styles.popularJobText}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.popularJobCompany}>Beats</Text>
          <Text style={styles.popularJobSalary}>$84,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </Card>

      <Card containerStyle={styles.popularJobCard}>
        <Image
          source={require('./assets/facebook.png')}
          style={styles.popularJobImage}
        />
        <View style={styles.popularJobText}>
          <Text style={styles.popularJobTitle}>Product Manager</Text>
          <Text style={styles.popularJobCompany}>Facebook</Text>
          <Text style={styles.popularJobSalary}>$86,000/y</Text>
          <Text style={styles.popularJobLocation}>Florida, US</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0D0D26',
  },
  userEmail: {
    fontSize: 20,
    fontWeight: '400',
    color: '#95969D',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 10,
    marginHorizontal: 24,
    marginTop: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#95969D',
  },
  filterIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D0D26',
  },
  seeAll: {
    fontSize: 14,
    color: '#95969D',
  },
  featuredJobsScroll: {
    paddingHorizontal: 24,
    marginTop: 8,
  },
  featuredJobCard: {
    borderRadius: 24,
    backgroundColor: '#395185',
    marginRight: 16,
    padding: 16,
  },
  featuredJobContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredJobImage: {
    width: 22,
    height: 24,
    marginRight: 16,
  },
  featuredJobText: {
    flex: 1,
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  featuredJobCompany: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.75,
  },
  featuredJobSalary: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  featuredJobLocation: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 24,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  popularJobImage: {
    width: 41,
    height: 43,
    marginRight: 16,
  },
  popularJobText: {
    flex: 1,
  },
  popularJobTitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0D0D26',
  },
  popularJobCompany: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0D0D26',
    opacity: 0.5,
  },
  popularJobSalary: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0D0D26',
  },
  popularJobLocation: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0D0D26',
    opacity: 0.5,
  },
});

export default HomePage;

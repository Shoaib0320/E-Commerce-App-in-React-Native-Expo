import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const categories = [
    { id: '1', name: 'Electronics', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHK5DkIKDNtuQN_gjEC4fjCjvGqMVsoLmg&s' } },
    { id: '2', name: 'Fashion', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHK5DkIKDNtuQN_gjEC4fjCjvGqMVsoLmg&s' } },
    { id: '3', name: 'Groceries', image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHK5DkIKDNtuQN_gjEC4fjCjvGqMVsoLmg&s' } },
  ];

  const featuredProducts = [
    { id: '1', name: 'Wireless Headphones', price: '$49.99', image: { uri: 'https://via.placeholder.com/120?text=Headphones' } },
    { id: '2', name: 'Smart Watch', price: '$99.99', image: { uri: 'https://via.placeholder.com/120?text=Smart+Watch' } },
    { id: '3', name: 'Gaming Console', price: '$299.99', image: { uri: 'https://via.placeholder.com/120?text=Console' } },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSkoEgnXef3G5BxcqnlFQ7pXUhII-aU-2RA&s' }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Big Discounts on Electronics!</Text>
      </View>

      {/* Categories Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="title">Shop by Categories</ThemedText>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </ThemedView>

      {/* Featured Products Section */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="title">Featured Products</ThemedText>
        <FlatList
          data={featuredProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </ThemedView>

      {/* Promotional Section */}
      <View style={styles.promoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/800x150?text=Free+Shipping+on+Orders+Over+$50!' }}
          style={styles.promoImage}
        />
        <Text style={styles.promoText}>Free Shipping on Orders Over $50!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  bannerText: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    padding: 16,
  },
  categoryCard: {
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productCard: {
    marginRight: 16,
    width: 120,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
  promoContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  promoImage: {
    width: '90%',
    height: 150,
    borderRadius: 12,
  },
  promoText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

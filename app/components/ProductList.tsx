
// // //app/(tabs)/products/Products.tsx
// // import { ThemedButton } from '@/components/ThemedButton';
// // import { ThemedText } from '@/components/ThemedText';
// // import { router } from 'expo-router';
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);
// //   const [categories, setCategories] = useState([]); // Make sure it's initialized as an array
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const navigateToDetail = (product) => {
// //     router.push({
// //       pathname: '/product-detail',
// //       params: { product: JSON.stringify(product) }, // Pass product details as a string
// //     });
// //   };

// //   // Fetching the data from products API
// //   useEffect(() => {
// //     fetch('https://attari-collection.vercel.app/api/products')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data);
// //       })
// //       .catch((err) => {
// //         setError(err);
// //       });
// //   }, []);

// //   // Fetching the data from categories API
// //   useEffect(() => {
// //     fetch('https://attari-collection.vercel.app/api/categories')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log("Fetched categories data:", data);
// //         if (data.categories && Array.isArray(data.categories)) {
// //           setCategories(data.categories);
// //         } else {
// //           setError(error);
// //         }
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError(err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   // Rendering a loader while the data is being fetched
// //   if (loading) {
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator size="large" color="#0000ff" />
// //       </View>
// //     );
// //   }

// //   // Display error message if there was an error fetching the data
// //   if (error) {
// //     return (
// //       <View style={styles.errorContainer}>
// //         <Text style={styles.errorText}>{error}</Text>
// //       </View>
// //     );
// //   }

// //   // Rendering the FlatList with product details
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.sectionTitle}>Categories</Text>
// //       <View style={styles.categoryListContainer}>
// //         <FlatList
// //           data={categories}
// //           horizontal={true}
// //           keyExtractor={(item) => item._id.toString()}
// //           renderItem={({ item }) => (
// //             <View style={styles.categoryCard}>
// //               <Text style={styles.categoryTitle}>{item.title}</Text>
// //             </View>
// //           )}
// //         />
// //       </View>
// //       <FlatList
// //         data={products}
// //         keyExtractor={(item) => item._id.toString()}
// //         renderItem={({ item }) => {
// //           // Ensure categories is an array before trying to find a category
// //           const category = categories ? categories.find((cat) => cat._id === item.categoryId) : null;

// //           return (
// //             <View style={styles.productCard}>
// //               <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
// //               <Text style={styles.productCategory}>Category: {item?.category?.title || 'N/A'}</Text>
// //               <Text style={styles.productTitle}>{item.title}</Text>
// //               <Text style={styles.productDescription}>{item.description}</Text>
// //               <View style={styles.cardBottom}>
// //                 <Text style={styles.productPrice}>PKR: {item.price}</Text>
// //                 {/* <TouchableOpacity>
// //                   <ThemedButton
// //                     style={{ paddingHorizontal: 20, backgroundColor: '#374151' }}
// //                     my={10}
// //                     onPress={() => router.push("/login")}
// //                     txt="See Detail"
// //                   />
// //                 </TouchableOpacity> */}
// //                 <TouchableOpacity>
// //                   <ThemedButton
// //                     style={{ paddingHorizontal: 20, backgroundColor: '#374151' }}
// //                     my={10}
// //                     onPress={() => router.push(`/ProductDetail/${item._id}`)} // Use correct path to navigate
// //                     txt="See Detail"
// //                   />
// //                 </TouchableOpacity>

// //               </View>
// //             </View>
// //           );
// //         }}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f8f8f8',
// //     padding: 20,
// //   },
// //   loaderContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   errorContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   errorText: {
// //     color: 'red',
// //     fontSize: 18,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginVertical: 10,
// //     color: '#333',
// //   },
// //   categoryListContainer: {
// //     flexDirection: 'row', // Arrange items in a row
// //     flexWrap: 'nowrap',    // Allow items to wrap to the next line
// //     justifyContent: 'flex-start', // Align items to the start
// //     gap: 10,            // Add space between items
// //     paddingVertical: 10,
// //     marginBottom: 20,
// //   },
// //   categoryCard: {
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 10,
// //     marginRight: 10, // Adjusted margin for spacing between cards
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 8,
// //     elevation: 5,
// //   },
// //   categoryTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   productCard: {
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 8,
// //     elevation: 5,
// //   },
// //   productImage: {
// //     width: '100%',
// //     height: 200,
// //     borderRadius: 10,
// //     marginBottom: 10,
// //   },
// //   productTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: 5,
// //   },
// //   productDescription: {
// //     fontSize: 14,
// //     color: '#777',
// //     marginBottom: 10,
// //   },
// //   productPrice: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#2E8B57',
// //   },
// //   productCategory: {
// //     fontSize: 16,
// //     color: '#9b9b9b',
// //     marginVertical: 10,
// //   },
// //   cardBottom: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   detailsButton: {
// //     backgroundColor: '#374151',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   detailsButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     textAlign: 'center',
// //   },
// // });


// // export default ProductList;







// //app/(tabs)/Products.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedButton } from '@/components/ThemedButton';

const ProductList = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching products and categories
  useEffect(() => {
    fetch('https://attari-collection.vercel.app/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  useEffect(() => {
    fetch('https://attari-collection.vercel.app/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.categories && Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          setError('Categories data is not an array or missing categories field');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryListContainer}>
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => {
          const category = categories.find((cat) => cat._id === item.categoryId);
          return (
            <View style={styles.productCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
               <Text style={styles.productCategory}>Category: {item?.category?.title || 'N/A'}</Text>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.productPrice}>PKR: {item.price}</Text>
                <TouchableOpacity>
                  <ThemedButton
                    style={{ paddingHorizontal: 20, backgroundColor: '#374151' }}
                    my={10}
                    onPress={() => navigation.navigate('ProductDetail', { product: item })}
                    txt="See Detail"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  categoryListContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: 10,
  },
  categoryCard: {
    padding: 10,
    backgroundColor: '#374151',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 18,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  productCategory: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
});

export default ProductList;



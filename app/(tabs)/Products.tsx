// // import { ThemedText } from "@/components/ThemedText";
// // import { ThemedView } from "@/components/ThemedView";
// // import { Colors } from "@/constants/Colors";
// // import { Category, Product } from "@/constants/Interfaces";
// // import React, { useCallback, useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   FlatList,
// //   Image,
// //   StyleSheet,
// //   TouchableOpacity,
// //   View,
// //   RefreshControl,
// //   useColorScheme,
// // } from "react-native";

// // export default function Products() {
// //   const [total, setTotal] = useState<number>(0);
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [categories, setCategories] = useState<Category[]>([]);
// //   const [chosenCategory, setChosenCategory] = useState<string>("");
// //   const [loading, setLoading] = useState(false);
// //   const [limit, setLimit] = useState(30);
// //   const [skip, setSkip] = useState(0);
// //   const [refreshing, setRefreshing] = useState<boolean>(false);

// //   useEffect(() => {
// //     getCategories();
// //   }, []);

// //   useEffect(() => {
// //     getProducts();
// //   }, [chosenCategory, skip, limit, refreshing]);

// //   const onRefresh = useCallback(() => {
// //     setRefreshing(true);
// //   }, []);

// //   const getCategories = useCallback(async () => {
// //     let categories: any = await fetch(
// //       "https://dummyjson.com/products/categories"
// //     );
// //     categories = await categories.json();
// //     setCategories(categories);
// //   }, []);

// //   const getProducts = async () => {
// //     // console.log("chosenCategory=>", chosenCategory);
// //     setLoading(true);
// //     let url = chosenCategory
// //       ? `https://dummyjson.com/products/category/${chosenCategory}`
// //       : `https://attari-collection.vercel.app/api/products`;
// //     let products: any = await fetch(`${url}/?limit=${limit}`);
// //     products = await products.json();
// //     setProducts(products?.products);
// //     setTotal(products?.total);
// //     setLoading(false);
// //     setRefreshing(false);
// //   };

// //   console.log("products=>", limit, products.length, total);
// //   const theme = useColorScheme() || "light";

// //   return (
// //     <ThemedView style={{ flex: 1 }}>
// //       {loading ? (
// //         <ActivityIndicator
// //           size={"large"}
// //           color={"black"}
// //           style={{
// //             alignSelf: "center",
// //             position: "absolute",
// //             width: "100%",
// //             marginVertical: 20,
// //           }}
// //         />
// //       ) : null}

// //       <FlatList
// //         data={products}
// //         stickyHeaderIndices={[0]}
// //         keyExtractor={(data) => `${data._id}`}
// //         numColumns={2}
// //         refreshControl={
// //           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
// //         }
// //         columnWrapperStyle={{ margin: 10, gap: 10 }}
// //         onEndReachedThreshold={0.8}
// //         onEndReached={() => {
// //           if (products.length < total) {
// //             setLimit(limit + 20);
// //           }
// //         }}
// //         ListHeaderComponent={
// //           <FlatList
// //             data={categories}
// //             horizontal={true}
// //             style={{
// //               padding: 10,
// //               backgroundColor:
// //                 Colors[theme].background,
// //             }}
// //             showsHorizontalScrollIndicator={false}
// //             keyExtractor={(data) => data.slug}
// //             contentContainerStyle={{ gap: 10 }}
// //             renderItem={({ item }) => {
// //               const isChosen = chosenCategory == item.slug;
// //               return (
// //                 <TouchableOpacity
// //                   style={[
// //                     styles.chip,
// //                     isChosen && { backgroundColor: "black" },
// //                   ]}
// //                   onPress={() => setChosenCategory(item.slug)}
// //                 >
// //                   <ThemedText style={{ color: isChosen ? "#fff" : "#000" }}>
// //                     {item.name}
// //                   </ThemedText>
// //                 </TouchableOpacity>
// //               );
// //             }}
// //           />
// //         }
// //         renderItem={({ item }) => {
// //           return (
// //             <View style={[styles.card, { borderColor: Colors[theme].text }]}>
// //               <Image source={{ uri: item.imageUrl }} style={styles.cardimg} />
// //               <View style={{ flex: 1, padding: 12 }}>
// //                 <ThemedText type="defaultSemiBold" numberOfLines={1}>
// //                   {item.title}
// //                 </ThemedText>
// //                 <ThemedText type="default" numberOfLines={2}>
// //                   {item.description}
// //                 </ThemedText>
// //               </View>
// //             </View>
// //           );
// //         }}
// //       />
// //     </ThemedView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     flexDirection: "column",
// //     flex: 1,
// //     borderColor: "#ccc",
// //     borderRadius: 8,
// //     overflow: "hidden",
// //     borderWidth: 1,
// //   },
// //   cardimg: { height: 120, resizeMode: "contain" },
// //   chip: {
// //     padding: 10,
// //     paddingHorizontal: 20,
// //     borderColor: "grey",
// //     borderWidth: 1,
// //   },
// // });










// import React, { useCallback, useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   RefreshControl,
//   useColorScheme,
// } from "react-native";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { Colors } from "@/constants/Colors";

// export default function Products() {
//   const [total, setTotal] = useState<number>(0);
//   const [products, setProducts] = useState<any[]>([]); // Update the type to match API response
//   const [categories, setCategories] = useState<any[]>([]);
//   const [chosenCategory, setChosenCategory] = useState<string>("");
//   const [loading, setLoading] = useState(false);
//   const [limit, setLimit] = useState(10);
//   const [skip, setSkip] = useState(0);
//   const [refreshing, setRefreshing] = useState<boolean>(false);

//   const theme = useColorScheme() || "light";

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [chosenCategory, skip, limit, refreshing]);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     setSkip(0);
//     setProducts([]);
//   }, []);

//   const fetchCategories = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "https://attari-collection.vercel.app/api/categories"
//       );
//       const data = await response.json();
//       setCategories(data); // Assuming API returns an array of categories
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const url = chosenCategory
//         ? `https://attari-collection.vercel.app/api/products?category=${chosenCategory}`
//         : `https://attari-collection.vercel.app/api/products`;

//       // const response = await fetch(`${url}&limit=${limit}&skip=${skip}`);
//       const response = await fetch(`${url}`)
//       const data = await response.json();
//       if (data?.products) {
//         setProducts((prev) => [...prev, ...data.products]); // Append new products for infinite scrolling
//         setTotal(data.total || 0);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   console.log("Products =>", products);
//   console.log("categories =>", categories);

//   return (
//     <ThemedView style={{ flex: 1 }}>
//       {loading && (
//         <ActivityIndicator
//           size="large"
//           color="black"
//           style={{
//             alignSelf: "center",
//             position: "absolute",
//             width: "100%",
//             marginVertical: 20,
//           }}
//         />
//       )}

//       <FlatList
//         data={products}
//         stickyHeaderIndices={[0]}
//         keyExtractor={(item) => item._id}
//         numColumns={2}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//         columnWrapperStyle={{ margin: 10, gap: 10 }}
//         onEndReachedThreshold={0.8}
//         onEndReached={() => {
//           if (products.length < total) {
//             setSkip(skip + limit);
//           }
//         }}
//         ListHeaderComponent={
//           <FlatList
//             data={categories}
//             horizontal
//             style={{
//               padding: 10,
//               backgroundColor: Colors[theme].background,
//             }}
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item._id}
//             contentContainerStyle={{ gap: 10 }}
//             renderItem={({ item }) => {
//               const isChosen = chosenCategory === item.title;
//               return (
//                 <TouchableOpacity
//                   style={[
//                     styles.chip,
//                     isChosen && { backgroundColor: "black" },
//                   ]}
//                   onPress={() => {
//                     setChosenCategory(item.title);
//                     setSkip(0);
//                     setProducts([]);
//                   }}
//                 >
//                   <ThemedText style={{ color: isChosen ? "#fff" : "#000" }}>
//                     {item.title}
//                   </ThemedText>
//                 </TouchableOpacity>
//               );
//             }}
//           />
//         }
//         renderItem={({ item }) => {
//           return (
//             <View style={[styles.card, { borderColor: Colors[theme].text }]}>
//               <Image source={{ uri: item.imageUrl }} style={styles.cardimg} />
//               <View style={{ flex: 1, padding: 12 }}>
//                 <ThemedText type="defaultSemiBold" numberOfLines={1}>
//                   {item.title}
//                 </ThemedText>
//                 <ThemedText type="default" numberOfLines={2}>
//                   {item.description}
//                 </ThemedText>
//                 <ThemedText type="defaultSemiBold">
//                   Rs. {item.price}
//                 </ThemedText>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "column",
//     flex: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     overflow: "hidden",
//     borderWidth: 1,
//   },
//   cardimg: { height: 120, resizeMode: "contain" },
//   chip: {
//     padding: 10,
//     paddingHorizontal: 20,
//     borderColor: "grey",
//     borderWidth: 1,
//   },
// });









import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://attari-collection.vercel.app/api/products");
      const data = await response.json();
      console.log("Fetched products:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.category}>Category: {item.category?.name || "N/A"}</Text>
            <Text style={styles.price}>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  productCard: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    color: "#555",
  },
  price: {
    fontSize: 16,
    color: "#28a745",
    fontWeight: "bold",
  },
});

export default Products;

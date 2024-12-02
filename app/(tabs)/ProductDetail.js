// //app/(tabs)/ProductDetail.tsx

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetail = () => {
    const route = useRoute();
    const { product } = route.params;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
    };

    const addToCart = () => {
        // Here, you can handle adding the product to the cart (you might use a global state or context to store the cart items)
        console.log(`Added ${quantity} of ${product.title} to the cart`);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productCategory}>Category: {product.category.title}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.productPrice}>PKR: {product.price}</Text>
                    <View style={styles.quantityContainer}>
                        <Button title="-" onPress={decreaseQuantity} />
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Button title="+" onPress={increaseQuantity} />
                    </View>
                </View>

                <TouchableOpacity onPress={addToCart}>
                    <Button title="Add to Cart" color="#374151" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    productImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productCategory:{
        fontSize: 17,
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: '#777',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E8B57',
        marginBottom: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
});

export default ProductDetail;

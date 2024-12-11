
import { Text, View } from '@/components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { Product, useMyContext } from '../../components/context/context';
const products = [
  { id: 1, name: 'Produto 1', price: 10 },
  { id: 2, name: 'Produto 2', price: 15 },
  { id: 3, name: 'Produto 3', price: 200 },
];
const HomeScreen = ({ }) => {
  const { addToCart, delToCart, cart } = useMyContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const getProductQuantity = (productId: number) => {
    const cartItem = cart.find((item: Product) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Visualizar Carrinho"
        onPress={() => {
          router.push("/two");
        }}
      />
      {products.map((product) => (
        <View key={product.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text>{product.name} - ${product.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                addToCart({ ...product, quantity: selectedQuantity });
                console.log(cart);
              }}
              style={{ padding: 10 }}
            >
              <AntDesign name="pluscircle" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                delToCart({ id: product.id, name: product.name, price: product.price, quantity: selectedQuantity });
              }}
              style={{ padding: 10 }}
            >
              <AntDesign name="minuscircleo" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Quantidade: {getProductQuantity(product.id)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default HomeScreen;
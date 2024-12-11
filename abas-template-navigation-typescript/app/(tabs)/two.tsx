
import { Text, View } from '@/components/Themed';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';

import { FlatList, TouchableOpacity } from 'react-native';
import { Product, useMyContext } from '../../components/context/context';

export default function CartScreen() {
  const { cart, addToCart, delToCart, removeFromCart } = useMyContext();
  const renderCartItem = ({ item }: { item: Product }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <Text>{item.name} - ${item.price}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            addToCart({ ...item, quantity: 1 });
            console.log(cart);
          }}
          style={{ padding: 10 }}
        >
          <AntDesign name="pluscircle" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            delToCart({ ...item, quantity: 1 });
          }}
          style={{ padding: 10 }}
        >
          <AntDesign name="minuscircleo" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeFromCart(item.id);
          }}
          style={{ padding: 10 }}
        >
          <Feather name="trash-2" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>Quantidade: {item.quantity}</Text>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', marginVertical: 20 }}>Carrinho de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import MyAuctionsScreen from "./src/screens/MyAuctionsScreen"; // Importamos la pantalla de Mis Subastas


export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    product: {
      id: number;
      name: string;
      description: string;
      price: string;
      date: string;
      time: string;
      image: any;
    };
  };
  MyAuctions: undefined; // Ruta para Mis Subastas
  CreateAuction: undefined; // Ruta para Crear Subasta
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="MyAuctions"
          component={MyAuctionsScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

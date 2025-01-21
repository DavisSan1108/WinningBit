import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

type ProductDetailsRouteProp = RouteProp<RootStackParamList, "ProductDetails">;

export default function ProductDetailsScreen() {
  const route = useRoute<ProductDetailsRouteProp>();
  const navigation = useNavigation();
  const { product } = route.params;

  // Información detallada de productos
  const detailedInfo = {
    1: {
      auctioneer: "Carlos Martínez",
      fullDescription:
        "Balón de baloncesto profesional utilizado en competiciones oficiales de la liga nacional. Fabricado con materiales de alta calidad, con un diseño ergonómico que garantiza un excelente agarre y control. Ideal para coleccionistas o atletas.",
    },
    2: {
      auctioneer: "Laura Gómez",
      fullDescription:
        "Air Jordan 1 Trophy Room en edición limitada, diseñados en colaboración con la familia de Michael Jordan. Este par exclusivo incluye detalles icónicos como acabados en dorado, materiales premium, y está limitado a 12,000 pares en todo el mundo.",
    },
    3: {
      auctioneer: "Andrés Torres",
      fullDescription:
        "Consola PlayStation 5 edición limitada Spider-Man. Incluye control DualSense personalizado y un diseño inspirado en el juego. Ideal para gamers y coleccionistas que buscan lo mejor en rendimiento y diseño.",
    },
    4: {
      auctioneer: "María Fernández",
      fullDescription:
        "Reloj Rolex Submariner con diseño clásico y funcionalidad resistente al agua. Fabricado con acero inoxidable de alta calidad y equipado con movimiento automático suizo. Perfecto para quienes buscan elegancia y durabilidad.",
    },
  };

  const { auctioneer, fullDescription } = detailedInfo[product.id] || {
    auctioneer: "Persona desconocida",
    fullDescription: "Información no disponible.",
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{fullDescription}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Tiempo Restante:</Text>
          <Text style={styles.value}>00:00:00</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Subasta por:</Text>
          <Text style={styles.value}>{auctioneer}</Text>
        </View>
      </View>

      {/* Bid History */}
      <View style={styles.bidHistoryContainer}>
        <Text style={styles.sectionTitle}>Historial de Pujas</Text>
        {[1, 2, 3].map((bid, index) => (
          <View key={index} style={styles.bidRow}>
            <Text>Puesto {index + 1}</Text>
            <Text>Puja de ${product.price}</Text>
          </View>
        ))}
      </View>

      {/* Bidding Section */}
      <View style={styles.biddingContainer}>
        <View style={styles.row}>
          <Text>Subastar: $00.00</Text>
          <Text>Valor Actual: {product.price}</Text>
        </View>
        <View style={styles.buttonRow}>
          {[100, 100, 100].map((amount, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text>+{amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.bidInputRow}>
          <TextInput placeholder="Otra Cantidad: 00.00" style={styles.input} />
          <TouchableOpacity style={styles.bidButton}>
            <Text style={styles.bidButtonText}>Pujar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 16,
  },
  backButtonText: {
    color: "#1a3b6e",
    fontSize: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a3b6e",
  },
  productDescription: {
    marginVertical: 8,
    fontSize: 16,
    color: "#6e6e6e",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "#6e6e6e",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bidHistoryContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bidRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  biddingContainer: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  bidInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  bidButton: {
    backgroundColor: "#1a3b6e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  bidButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

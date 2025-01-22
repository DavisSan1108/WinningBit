import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const products = [
    {
      id: 1,
      name: 'Basketball',
      description: 'Balón de baloncesto profesional en excelentes condiciones.',
      price: '$50.00',
      date: 'Oct 25',
      time: '04:00 PM',
      image: require('../../assets/BasketBall.png'),
    },
    {
      id: 2,
      name: 'Jordan 1 Trophy Room',
      description: 'Edición limitada de los icónicos Air Jordan 1.',
      price: '$1,200.00',
      date: 'Nov 10',
      time: '06:00 PM',
      image: require('../../assets/Jordan1TrophyRomm.png'),
    },
    {
      id: 3,
      name: 'PlayStation 5',
      description: 'Consola de videojuegos con 1TB de almacenamiento.',
      price: '$500.00',
      date: 'Nov 15',
      time: '05:00 PM',
      image: require('../../assets/PlayStation5.png'),
    },
    {
      id: 4,
      name: 'Rolex',
      description: 'Reloj de lujo con diseño elegante y exclusivo.',
      price: '$5,000.00',
      date: 'Dec 1',
      time: '07:00 PM',
      image: require('../../assets/Rolex.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WinningBid</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#1a3b6e" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={20} color="#a0a0a0" style={styles.searchIcon} />
        <TextInput placeholder="Buscar ..." style={styles.searchInput} />
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Text style={styles.sectionTitle}>Subastas Activas</Text>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedType}
              style={styles.picker}
              onValueChange={(itemValue: string) => setSelectedType(itemValue)}
            >
              <Picker.Item label="Tipo" value="" />
              <Picker.Item label="Electrónicos" value="electronics" />
              <Picker.Item label="Deporte" value="sport" />
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedCategory}
              style={styles.picker}
              onValueChange={(itemValue: string) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="Categoría" value="" />
              <Picker.Item label="Gaming" value="gaming" />
              <Picker.Item label="Relojes" value="watches" />
            </Picker>
          </View>
        </View>

        {/* Product Cards */}
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{product.name}</Text>
                <TouchableOpacity>
                  <FontAwesome name="heart-o" size={20} color="#a0a0a0" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cardDescription}>{product.description}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>Precio actual: {product.price}</Text>
                <Text style={styles.cardDate}>
                  {product.date} - {product.time}
                </Text>
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={styles.viewButton}
                    onPress={() => navigation.navigate('ProductDetails', { product })}
                  >
                    <Text style={styles.viewButtonText}>Ver</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bidButton}>
                    <Text style={styles.bidButtonText}>Subastar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a3b6e',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a3b6e',
    marginBottom: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  pickerWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    height: 48,
    justifyContent: 'center',
  },
  picker: {
    height: 48,
    fontSize: 16,
    color: '#1a3b6e',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  cardDetails: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a3b6e',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6e6e6e',
    marginVertical: 8,
  },
  cardFooter: {
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a3b6e',
  },
  cardDate: {
    fontSize: 12,
    color: '#6e6e6e',
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  viewButton: {
    flex: 1,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#1a3b6e',
    borderRadius: 4,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#1a3b6e',
  },
  bidButton: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#1a3b6e',
    borderRadius: 4,
    alignItems: 'center',
  },
  bidButtonText: {
    color: '#fff',
  },
});

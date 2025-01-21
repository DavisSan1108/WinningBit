import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyAuctionsScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<'myAuctions' | 'createAuction'>('myAuctions'); // Estado para alternar entre vistas
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [initialPrice, setInitialPrice] = useState('');
  const [duration, setDuration] = useState('');

  const auctions = [
    {
      id: 1,
      name: 'Play Station 5',
      description: 'Play Station con 1TB de almacenamiento.',
      price: '$5000.00',
      date: 'Oct 21',
      time: '07:00 PM',
      image: require('../../assets/PlayStation5.png'),
    },
    {
      id: 2,
      name: 'Play Station 5',
      description: 'Play Station con 1TB de almacenamiento.',
      price: '$5000.00',
      date: 'Oct 21',
      time: '07:00 PM',
      image: require('../../assets/PlayStation5.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1a3b6e" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis Subastas</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === 'myAuctions' && styles.activeButton, // Estilo dinámico para el botón activo
          ]}
          onPress={() => setActiveTab('myAuctions')} // Cambiar a "Mis Subastas"
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === 'myAuctions' && styles.activeButtonText,
            ]}
          >
            Mis Subastas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeTab === 'createAuction' && styles.activeButton, // Estilo dinámico para el botón activo
          ]}
          onPress={() => setActiveTab('createAuction')} // Cambiar a "Crear Subasta"
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === 'createAuction' && styles.activeButtonText,
            ]}
          >
            Crear Subasta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'myAuctions' ? (
        <>
          {/* Search */}
          <View style={styles.searchContainer}>
            <TextInput placeholder="Buscar ..." style={styles.searchInput} />
          </View>

          {/* Auctions List */}
          <ScrollView contentContainerStyle={styles.listContainer}>
            {auctions.map((auction) => (
              <View key={auction.id} style={styles.card}>
                <Image source={auction.image} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>{auction.name}</Text>
                  <Text style={styles.cardDescription}>{auction.description}</Text>
                  <Text style={styles.cardPrice}>Precio actual: {auction.price}</Text>
                  <Text style={styles.cardDate}>
                    {auction.date} - {auction.time}
                  </Text>
                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.viewButton}>
                      <Text style={styles.viewButtonText}>Ver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bidButton}>
                      <Text style={styles.bidButtonText}>Subastar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <>
          {/* Create Auction Form */}
          <View style={styles.form}>
            <TextInput
              placeholder="Nombre Producto"
              style={styles.input}
              value={productName}
              onChangeText={setProductName}
            />
            <TextInput
              placeholder="Descripción"
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TextInput
              placeholder="Fecha Inicio"
              style={styles.input}
              value={startDate}
              onChangeText={setStartDate}
            />
            <TextInput
              placeholder="Fecha Final"
              style={styles.input}
              value={endDate}
              onChangeText={setEndDate}
            />
            <TextInput
              placeholder="Precio Inicial"
              style={styles.input}
              value={initialPrice}
              onChangeText={setInitialPrice}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Duración"
              style={styles.input}
              value={duration}
              onChangeText={setDuration}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Añadir subasta</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a3b6e',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#1a3b6e',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a3b6e',
  },
  activeButtonText: {
    color: '#fff',
  },
  searchContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
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
  form: {
    flex: 1,
    marginTop: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1a3b6e',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

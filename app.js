import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Importa o container principal para navegação
import { createStackNavigator } from '@react-navigation/stack'; // Para navegação em pilha
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Para navegação por abas
import Icon from 'react-native-vector-icons/Ionicons'; // Biblioteca de ícones

// Criação das instâncias para navegação
const Stack = createStackNavigator(); // Navegação em pilha (Stack)
const Tab = createBottomTabNavigator(); // Navegação por abas (Tabs)

// Tela inicial (Login)
function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.logo}
          />
          {/* Título */}
          <Text style={styles.title}>SEJA BEM VINDO</Text>

          {/* Campos de entrada (e-mail e senha) */}
          <TextInput style={styles.input} placeholder="Seu e-mail" />
          <TextInput style={styles.input} placeholder="Sua senha" secureTextEntry />

          {/* Botão para iniciar a navegação */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Main')} // Substitui a tela atual e navega para as abas principais
          >
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Tela Home
function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Conteúdo da tela Home */}
          <Text style={styles.title}>Bem-vindo à Home!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}





// Tela Profile (Perfil)
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Conteúdo da tela Perfil */}
          <Text style={styles.title}>Esta é a tela de Perfil!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




// Tela Settings (Configurações)
function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Conteúdo da tela Configurações */}
          <Text style={styles.title}>Configurações</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




// Componente para Navegação por Abas (Tabs)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{

        // Estilo da barra de abas
        tabBarStyle: {
          backgroundColor: '#2f4f4f', // Cor de fundo da barra de abas
          borderTopWidth: 1, // Remove a borda superior, se necessário
        },
        // Estilo global para as abas
        tabBarActiveTintColor: '#fff', // Cor ativa
        tabBarInactiveTintColor: 'gray', // Cor inativa
        headerShown: false, // Oculta o cabeçalho das abas
        
      }}
    >
      {/* Aba Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Aba Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Aba Settings */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Componente principal do App
export default function App() {
  return (
    <NavigationContainer>
      {/* Configuração da navegação em pilha */}
      <Stack.Navigator initialRouteName="Login">
        {/* Tela de Login */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* Navegação principal por abas */}
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos gerais
const styles = StyleSheet.create({
  // Área segura da tela
  safeArea: {
    flex: 1,
    backgroundColor: '#6495ed',
  },
  // Estilo para conteúdo rolável
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Container principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Título das telas
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  // Logo exibida na tela de login
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  // Botão genérico
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    margin: 30,
  },
  // Texto dentro do botão
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Campo de entrada de texto
  input: {
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

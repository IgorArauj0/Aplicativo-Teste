import { StatusBar } from 'expo-status-bar'; // Importa a barra de status do Expo
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'; // Importa os componentes principais do React Native

export default function App() {
  return (
    <View style={styles.container}> {/* Container principal da tela */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Define a imagem com URL externa
        style={styles.logo} // Estilo para a imagem
      />
      <Text style={styles.title}>SEJA BEM VINDO</Text> {/* Texto principal da tela */}

      <TextInput style={styles.input} placeholder='Seu e-mail'></TextInput> {/* Campo de entrada para e-mail */}
      <TextInput style={styles.input} placeholder='Sua senha'></TextInput> {/* Campo de entrada para senha */}

      <TouchableOpacity style={styles.button} onPress={() => alert('Vamos começar!')}> {/* Botão clicável com evento */}
        <Text style={styles.buttonText}>Começar</Text> {/* Texto dentro do botão */}
      </TouchableOpacity>

      <StatusBar style="auto" /> {/* Define o estilo da barra de status */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Define que o container ocupa todo o espaço disponível
    backgroundColor: '#6495ed', // Cor de fundo azul
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },

  title: {
    fontSize: 20, // Tamanho da fonte do texto
    fontWeight: 'bold', // Define o texto como negrito
    textAlign: 'center', // Centraliza o texto horizontalmente
    color: '#fff', // Cor branca para o texto
  },

  logo: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 20, // Espaço abaixo da imagem
  },

  button: {
    backgroundColor: '#4CAF50', // Cor de fundo verde para o botão
    paddingVertical: 12, // Espaçamento interno vertical do botão
    paddingHorizontal: 25, // Espaçamento interno horizontal do botão
    borderRadius: 8, // Bordas arredondadas do botão
    shadowColor: '#000', // Cor da sombra
    margin: 30, // Margem externa do botão
  },

  buttonText: {
    color: '#fff', // Cor do texto do botão (branco)
    fontSize: 16, // Tamanho da fonte do texto do botão
    fontWeight: 'bold', // Define o texto como negrito
  },

  input: {
    marginTop: 30, // Espaço acima do campo de entrada
    width: '80%', // Largura do campo de entrada em relação à tela
    height: 50, // Altura do campo de entrada
    backgroundColor: '#fff', // Cor de fundo branca
    borderRadius: 8, // Bordas arredondadas do campo de entrada
    borderWidth: 1, // Largura da borda do campo
    borderColor: '#ccc', // Cor da borda do campo
    paddingHorizontal: 15, // Espaçamento interno horizontal
    fontSize: 16, // Tamanho da fonte do texto inserido no campo
    color: '#333', // Cor do texto inserido no campo (cinza escuro)
    marginBottom: 20, // Espaço abaixo do campo de entrada
    shadowColor: '#000', // Cor da sombra do campo
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (horizontal e vertical)
    shadowOpacity: 0.2, // Transparência da sombra
    shadowRadius: 3, // Difusão da sombra
  },
});

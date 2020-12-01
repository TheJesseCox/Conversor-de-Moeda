import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';





export function Home({ navigation }) {
  return (
    <View style={styles.layer0}>
      <View style={styles.layer1}>

        <Text style={styles.textoSuperior}>{'\t\n\n'} Armolin {'\t\n'}Converter</Text>

      </View>

          <View style={styles.layer2}>
            <View style={styles.botaoCentro}>
                <TouchableOpacity onPress={() => navigation.navigate('Conversor')}>
                    <Text style={styles.alinhaTexto}>Conversor</Text>
                </TouchableOpacity>
            </View>
          </View>

      <View style={styles.layer3}>

        <Image style={styles.confImagem} source={require("../../assets/agoravai.png")} />

        <Text style={styles.creditos}>
          {'\t\n'}        Desenvoldido por:
          {'\t\n'}Eduarda, Guilherme e Miguel
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layer0: {
    flex: 1,
    backgroundColor: '#ebeffe',
  },

  layer1: {
    backgroundColor: '#ebeffe',
    justifyContent: 'center',
  },

  layer2: {
    backgroundColor: '#ebeffe',
    justifyContent: 'center',
  },

  layer3: {
    backgroundColor: '#ebeffe',
    //justifyContent: 'center',
    alignItems:'center',
  },

  layer4: {
    backgroundColor: '#ebeffe',
    //justifyContent: 'center',
    alignItems:'center',
  },

  botaoCentro: {
    backgroundColor: '#1874cd',
    alignSelf: 'center',
    height: '35%',
    width: '90%',
    borderRadius: 90,
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.5,
    shadowColor:"#104e8b",
    shadowRadius:3,
  },

  textoSuperior: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  alinhaTexto:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:35,
    paddingTop: 22,
  },

  confImagem: {
    width:'100%', 
    height:'40%', 
    borderRadius:30,
  },

  creditos: {
    alignSelf: 'center',
    paddingTop: 15,
  },

});


//<Image style={{ width:200, height:200, borderRadius:30, marginTop: 50}} source={require("./assets/stars.gif")} />

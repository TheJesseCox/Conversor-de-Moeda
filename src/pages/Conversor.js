import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { TextInput} from 'react-native-gesture-handler';
import { Picker } from 'react-native';

IconEntypo.loadFont();

export function Conversor({ navigation }) {

    const[valor,setValor]= React.useState(0.00);
    const[picker1,setPicker1]=React.useState(0);
    const[picker2,setPicker2]=React.useState(0);
    const[teste,setTeste]=React.useState(0);

    function formulaConversao(moeda1,moeda2,formula,pmoeda,smoeda) {
        if ((picker1 == moeda1 && picker2 == moeda2)||( picker1 == moeda2 && picker2 == moeda1 )) {
            if (picker1 == moeda1) {
                setValor((valor * formula).toFixed(2));
                setTeste(pmoeda);
            }else{
                setValor((valor / formula).toFixed(2));
                setTeste(smoeda);
            }
        }
    }

    function converter() {
        if (picker1 == picker2 || picker1 == "NENHUM" || picker2 == "NENHUM") {
            setValor(valor);
        }else{
            formulaConversao("REAL","DOLLAR",0.19,"US$","R$");
            formulaConversao("REAL","EURO",0.16,"€","R$");
            formulaConversao("DOLLAR","EURO",0.84,"€","US$");
        }
    }

    return (
        <View style={styles.cabecalho}>

              <TextInput keyboardType="numeric" placeholder="Valor" style={styles.input} onChangeText={texto => setValor(texto)} value={valor}/>

            <View style={styles.layer2}>
                <Picker
                    selectedValue={picker1}
                    style={{height: 50, width: 303 , marginTop:15, marginBottom:30, color:'#1874cd', backgroundColor: '#fff0f5'}}
                    onValueChange={selected => setPicker1(selected)}
                    value={picker1}>
                    <Picker.Item label="Selecione" value="NENHUM" />
                    <Picker.Item label="Real(R$)" value="REAL" />
                    <Picker.Item label="Dolar(US$)" value="DOLLAR" />
                    <Picker.Item label="Euro(€)" value="EURO" />
                </Picker>
            </View>

            <IconEntypo name="chevron-down" size={40} color="#1874cd"/>

            <View style={styles.layer3}>
                <Picker
                    selectedValue={picker2}
                    style={{height: 50, width: 303 , marginTop:15, marginBottom:30, color:'#1874cd', backgroundColor: '#fff0f5'}}
                    onValueChange={selected => setPicker2(selected)}
                    value={picker2}>
                    <Picker.Item label="Selecione" value="NENHUM" />
                    <Picker.Item label="Real(R$)" value="REAL" />
                    <Picker.Item label="Dolar(US$)" value="DOLLAR" />
                    <Picker.Item label="Euro(€)" value="EURO" />
                </Picker>
            </View>

            <View style={styles.layer4}>
            <Text style={styles.textoTitulo}>{"\n"}{teste}{"\t\t"}{valor}{"\n\n"}</Text>
            </View>

            <View style={styles.botaoCalcular}>
                <Button title="Calcular" color="#1874cd" onPress={() => converter()}/>
            </View>
            
            <View style={{alignSelf: 'flex-start', marginLeft:30}}>
                <IconEntypo name="arrow-left" size={75} color="#1874cd" onPress={() => navigation.navigate('Home')}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    layer2: {
        marginTop: 20,
        marginBottom: 10,
    },

    layer3: {
        marginTop: 10,
    },

    layer4: {
        marginTop: 0,
        marginRight: 10,
    },

    cabecalho:{
        flex: 1,
        backgroundColor: '#ebeffe',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:'10%',
    },

    textoTitulo:{
        fontSize:30,
    },

    botaoCalcular: {
        width: '30%', 
        height: '15%',
        marginRight: 10,
    },

    input:{ 
        height: 50,
        width: '70%',
        borderColor: 'gray', 
        borderWidth: 1,
        marginVertical:15,
        fontSize:20,
        color:"#7d7d7d",
        backgroundColor:"#c6e2ff",
        paddingLeft:10,
        borderRadius:10,
        marginTop: 45,
      },
    
  });

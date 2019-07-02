import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { translate } from '../services/i18n/src/index'

export default Personagem = (props) => {
    translateUnk = (palavra) => {
        if(palavra === 'unknown') return translate(palavra);
        else return palavra;
    }

    return ( 
        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('Filmes', { filmes: props.detalhes.films })}>
            <Text style={styles.nomePersonagem}>{props.detalhes.name}</Text>
            <View style={styles.grid}>
                <Text style={styles.detalhesPersonagem}>{translate('height')}:{this.translateUnk(props.detalhes.height)}</Text>
                <Text style={styles.detalhesPersonagem}>{translate('mass')}: {this.translateUnk(props.detalhes.mass)}</Text> 
            </View>
            <View style={styles.grid}>
                <Text style={styles.detalhesPersonagem}>{translate('hairColor')}: {translate(props.detalhes.hair_color)}</Text>
                <Text style={styles.detalhesPersonagem}>{translate('skinColor')}: {translate(props.detalhes.skin_color)}</Text>
            </View> 

            <View style={styles.grid}>
                <Text style={styles.detalhesPersonagem}>{translate('eyeColor')}: {translate(props.detalhes.eye_color)}</Text>
                <Text style={styles.detalhesPersonagem}>{translate('birthYear')}: {this.translateUnk(props.detalhes.birth_year)}</Text>
            </View>
            <View style={styles.grid}>  
                <Text style={styles.detalhesPersonagem}>{translate('gender')}: {this.translateUnk(props.detalhes.gender)}</Text>
            </View> 
        </TouchableOpacity>
    ) 
}
 
const styles = StyleSheet.create({
    nomePersonagem: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 15
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 5,
        padding: 15,
        margin: 10
    },
    detalhesPersonagem: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start'
    }
})


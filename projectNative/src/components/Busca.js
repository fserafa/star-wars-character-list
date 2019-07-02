import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { translate } from '../services/i18n/src/index'


export default class Busca extends Component {
    state = {
        termo: ''
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.termo ?
                    <TouchableOpacity style={styles.buttonLimpar} onPress={() => {
                        this.setState({ termo: '' });
                        this.props.limparBusca()
                    }}>
                        <Text style={{ fontSize: 22, textAlign: 'center', color: '#000' }}>X</Text>
                    </TouchableOpacity> : null}
                <TextInput
                    style={styles.inputBusca}
                    value={this.state.termo}
                    onChangeText={(termo) => this.setState({ termo })}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder={translate('search')}
                    placeholderTextColor='#999'
                />
 
 
                <TouchableOpacity style={styles.buttonBusca} onPress={() => {
                    this.props.buscar(this.state.termo)
                }}>
                    <Text style={styles.textButton}>{translate('search')}</Text>
                </TouchableOpacity>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 1,
        padding: 5
    },
    inputBusca: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
        marginRight: 5,
        fontSize: 15
    },
    buttonBusca: {
        borderRadius: 5,
        backgroundColor: '#2196f3',
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonLimpar: {
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})

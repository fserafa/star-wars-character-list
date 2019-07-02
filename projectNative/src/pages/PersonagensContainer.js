import React, { Component } from 'react';

import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../services/api';
import Personagem from '../components/Personagem';
import Busca from '../components/Busca';
import { translate } from '../services/i18n/src/index'


export default class PersonagensContainer extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: translate('characters')
    }
  }

  state = {
    personagens: [],
    page: 1,
    isLoading: false,
    isSearch: false,
    termo: ''
  }

  componentDidMount() {
    this.carregarPersonagensPorPagina(this.state.page)

  }

  
  carregarPersonagensPorPagina = async (page) => {
    this.setState({ isLoading: true });
    let response;

    try {
      response = await api.get(`/people/?page=${page}`);
    }
    catch (error) {
      return this.setState({ isLoading: false });
    }

    await this.setState((prevState) => ({ 
      personagens: [...this.state.personagens, ...response.data.results],
      page: prevState.page + 1,
      isLoading: false,
    }));
  }

  carregarMais = (page) => {
    setTimeout(() => {
      if (!this.state.isLoading) {
        this.carregarPersonagensPorPagina(page);
      }
    }, 500);
  }

  buscar = async (termo) => {
    this.setState({ isLoading: true, isSearch: true })
    let response = await api.get(`/people/?search=${termo}`)

  
    await this.setState({
      personagens: response.data.results,
      isLoading: false,
      page: 1,
      termo: termo
    });
  }

  limparBusca = async () => {
    await this.setState({ personagens: [], isSearch: false, page: 1 });
    this.carregarPersonagensPorPagina(this.state.page);
  }

  render() {
    const buscando = (
      <View style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold' }}>
        <Text>Buscando por "{this.state.termo}"</Text>
      </View>
    )

    const semResultados = (
      <View style={{ paddingLeft: 10, paddingTop: 10, fontWeight: 'bold' }}>
        <Text style={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Sem Resultados</Text>
      </View>
    )

    return (
      <View style={styles.container}>
        <Busca buscar={this.buscar} limparBusca={this.limparBusca} />

        {this.state.isSearch && this.state.isLoading ? (
          <ActivityIndicator color="black" />
        ) : null}

        {this.state.isSearch ? buscando : null}
        {!this.state.isLoading && this.state.personagens.length === 0 ? semResultados : null}

        <FlatList
          data={this.state.personagens}
          keyExtractor={(item) => item.url}
          onEndReachedThreshold={0.01}
          onEndReached={!this.state.isSearch ? () => this.carregarMais(this.state.page) : null}
          renderItem={({ item }) => <Personagem detalhes={item} navigation={this.props.navigation} />}
        />

        {!this.state.isSearch && this.state.isLoading ? (
          <ActivityIndicator color="black" />
        ) : null}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',

  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 5,
    padding: 15,
    margin: 10
  }
})
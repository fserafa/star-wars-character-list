import React, { Component } from 'react';
import api from '../services/api';

import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { translate } from '../services/i18n/src/index'


export default class Filmes extends Component {
    static navigationOptions = () => { 
        return {
          headerTitle: translate('movies')  
        } 
      }  

    state = {
        filmes: [],
        isLoading: false
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const filmesUrl = this.props.navigation.getParam('filmes', []);

        const responseArray = filmesUrl.map(filmeUrl => api.get(filmeUrl));

        try {
            const filmes = (await Promise.all(responseArray)).map(response => response.data)

            this.setState({ filmes: filmes })

        } catch (error) {
            console.error(error)
        }

        this.setState({ isLoading: false });
    }


    render() {
        return (
            <View style={styles.container}>

                {this.state.isLoading ? <ActivityIndicator color="black" /> : null}

                <FlatList
                    data={this.state.filmes}
                    keyExtractor={(item) => item.episode_id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.filmes}>{item.title}</Text>
                        </View>
                    )} />

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
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 5,
        padding: 15,
        margin: 10
    },
    filmes: {
        fontSize: 18,
        color: '#000'
    }
})

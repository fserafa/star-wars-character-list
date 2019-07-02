import React from 'react';
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';

import PersonagensContainer from './pages/PersonagensContainer';
import Filmes from './pages/Filmes';

export default createAppContainer(
    createStackNavigator({
        PersonagensContainer,
        Filmes 
    }, {
        initialRouteName: 'PersonagensContainer',
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: "#2196f3",
            }
        },
        mode: 'modal' 
    }
    )
) 
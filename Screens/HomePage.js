import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, } from 'react-native';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { useNavigation } from '@react-navigation/native';

export default class HomePage extends Component {

    render(){
        return(
            <View>
                <Text>This is the Home Page</Text>
                <Button onPress={() => this.props.navigation.navigate('GamePage')} title="Game"/>
            </View>
            
        )
    }
};
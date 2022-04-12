import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, } from 'react-native';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class GamePage extends Component {
    render(){
        return(
            <View>
                <Text> This is the Game Page</Text>
                <Button onPress={() => this.props.navigation.navigate('HomePage')} title="Home"/>
            </View>
            

        )
    }
};
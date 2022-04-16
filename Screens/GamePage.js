import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, } from 'react-native';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';


const ListGames = `
query {
  listGames {
    items {
      id name image
    }
  }
}`;
export default class GamePage extends Component {
    state = {
        title: '',
        image: '',
        games: []
      };

    async componentDidMount() {
        try {
          const games = await API.graphql(graphqlOperation(ListGames));
          console.log('games: ', games);
          this.setState({ games: games.data.listGames.items });
        } catch (err) {
          console.log('error: ', err);
        }
      }

    render(){
        return(
            <View>
                {this.state.games.map((game, index) => (
                <View key ={index} style={styles.gameContainer}>
                    <Image style={styles.logo} source={{uri: game.image}}/>
                    <Text style={styles.gameTitle} >{game.name}</Text>
            
                </View>
                ))}
                <Button onPress={() => this.props.navigation.navigate('HomePage')} title="Home"/>
            </View>
            
        )
    }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
    },
    gameContainer: {
      height: 100,
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    logo: {
      width: 100,
      height:100,
    },
    gameTitle: {
      includeFontPadding: true,
      textAlign: 'center',
      color: '#333436',
      fontSize: 20,
      padding: 40,
    }
  
  });
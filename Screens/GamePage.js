import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, ScrollView} from 'react-native';
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
      id name image year description
    }
  }
}`;




export default class GamePage extends Component {
    
    state = {
        id: '',
        title: '',
        image: '',
        year: '',
        description: '',
        games: [],
        selectedGame: []
      };

    async componentDidMount() {
        try {
            const {passID} = this.props.route.params;
            const games = await API.graphql(graphqlOperation(ListGames));
            this.setState({ games: games.data.listGames.items});
            this.setState({selectedGame: games.data.listGames.items.find(item => item.id ==passID)})
        } catch (err) {
            console.log('error: ', err);
        }
      }
    render(){
        const {passID} = this.props.route.params;
        console.log(this.state.selectedGame)
        const game = this.state.selectedGame
        return(
            <View style={{paddingVertical: 30}}>
                <ScrollView style={styles.gameContainer}>
                    <Image style={styles.logo} source={{uri: game.image}}/>
                    <Text style={styles.gameTitle} >{game.name}</Text>
                    <Text> {game.year}</Text>
                    <Text style={{paddingBottom:20}}> {game.description}</Text>
                </ScrollView>
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
      paddingVertical: 20,
      paddingHorizontal: 20,
      paddingBottom:100
    
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
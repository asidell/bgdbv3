import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, ScrollView} from 'react-native';
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListGames = `
query {
  listGames {
    items {
      id name image
    }
  }
}`;


export default class HomePage extends Component {
    state = {
        title: '',
        image: '',
        id: '',
        games: []
      };
      async componentDidMount() {
        try {
          const games = await API.graphql(graphqlOperation(ListGames));
          this.setState({ games: games.data.listGames.items});
        } catch (err) {
          console.log('error: ', err);
        }
      }
    render(){
        return(
            <View>
                {this.state.games.map((game, index) => (
                <ScrollView key ={index}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('GamePage',{passID: game.id})}>
                        <View style={styles.gameContainer}>
                            <Image style={styles.logo} source={{uri: game.image}}/>
                            <Text style={styles.gameTitle} >{game.name}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                ))}
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
      padding:10
    },
    gameTitle: {
      includeFontPadding: true,
      textAlign: 'center',
      color: '#333436',
      fontSize: 14,
      padding: 40,
    }
  
  });
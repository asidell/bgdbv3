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
            <ScrollView>
                {this.state.games.sort}
                {this.state.games.map((game, index) => (
                <View key ={index} style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('GamePage',{passID: game.id})}>
                        <View style={styles.gameContainer}>
                            <Image style={styles.logo} source={{uri: game.image}}/>
                            <Text style={styles.gameTitle}>{game.name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                ))}
            </ScrollView>
            
        )
    }
};

const styles = StyleSheet.create({
    container: {
      padding: 5,
    },
    gameContainer: {
      height: 100,
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      flex: 4
    },
    logo: {
      width: 100,
      height:100,
      padding:10,
      flex:1
    },
    gameTitle: {
      includeFontPadding: true,
      textAlign: 'center',
      color: '#333436',
      fontSize: 16,
      padding: 10,
      flex:3, 
      flexWrap: 'wrap'
      
    }
  
  });
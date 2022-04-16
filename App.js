import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, } from 'react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import GamePage from './Screens/GamePage';
import { NavigationContainer } from '@react-navigation/native';


const ListGames = `
query {
  listGames {
    items {
      id name image
    }
  }
}`;

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    title: '',
    image: '',
    id: '',
    games: []
  };
  async componentDidMount() {
    try {
      const games = await API.graphql(graphqlOperation(ListGames));
      //console.log('games: ', games);
      this.setState({ games: games.data.listGames.items });
    } catch (err) {
      console.log('error: ', err);
    }
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage}/>
          <Stack.Screen name="GamePage" component={GamePage}/>
        </Stack.Navigator>
      </NavigationContainer>
      
      
    );
  } 
}
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
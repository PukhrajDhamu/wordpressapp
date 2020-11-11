import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeaturedNews from './app/componets/Screens/FeaturedNews/FeaturedNewss';
import NewsPost from './app/componets/Screens/FeaturedNews/NewsPost';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="FeaturedNews" component={FeaturedNews} />
          <Stack.Screen name="NewsPost" component={NewsPost} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
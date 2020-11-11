import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';
import Content from './Content';
import { getApi } from './Api';

export default class Post extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }
    
      componentDidMount() {
        fetch('/wp-json/wp/v2/posts')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json.posts });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
    
  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.news}>
              {title.rendered}</Text>
            )}
          />
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 1,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    scrollView: {
  
      marginHorizontal: 0,
    },
    news: {
      marginTop: 30,
    },
    logo: {
      width: 66,
      height: 58,
    },
    stretch: {
      width: 300,
      height: 200,
    },
  });
  
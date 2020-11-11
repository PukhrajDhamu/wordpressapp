import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';
import { getApi } from '../../Services/Api';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsData: []
    }
    this.api = getApi();
  }
  componentDidMount() {
    if (!this.api) return;
    this.api.get(`/wp-json/wp/v2/posts`)
      .then(res => this.setState({
        NewsData: res.data,
      }))
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
  
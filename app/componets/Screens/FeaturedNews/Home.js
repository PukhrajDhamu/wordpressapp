// import React from 'react';
// import { StyleSheet, Text, View, ScrollView} from 'react-native';
// import FeaturedNews from './app/componets/Screens/FeaturedNews/FeaturedNews';

// const Home = () => {
//     return (
//         <ScrollView>
//         {/* <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <FeaturedNews/>
//           </Stack.Navigator>
//         </NavigationContainer> */}
//         <FeaturedNews/>
//         </ScrollView>

//       );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

// export default Home;

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeaturedNewss from './FeaturedNewss';

export default class Home extends Component {


    render() {
        return (
            <View>
                <FeaturedNewss/>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
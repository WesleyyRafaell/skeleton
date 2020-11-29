import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

import pictureProfile from './assets/picture.jpg';

import Skeleton from './src/skeleton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    let time = setInterval(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121212" />
      <Skeleton visible={loading}>
        <View style={{margin: 10}}>
          <View style={styles.card}>
            <Image source={pictureProfile} style={styles.imageCard} />
            <View style = {styles.infoUser}>
              <Text style = {styles.nameUser}>Wesley Rafael</Text>
              <Text style = {styles.igUser}>@weslyn</Text>
            </View>
          </View>
          <Text style = {styles.descriptionUser}>is simply dummy text of the printing and typesetting 
            industry. 
            Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s
          </Text>
        </View>
      </Skeleton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 15
  },
  card: {
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  infoUser: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  nameUser: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
  igUser: {
    color: '#fff',
    fontSize: 18,
  },
  descriptionUser: {
    color: '#fff',
  }
});

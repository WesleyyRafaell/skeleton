import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');


export default function Skeleton({ visible, children }) {
  const AnimatedValue = new Animated.Value(0);

  useEffect(()=> {
    circleAnimated();

    return () => circleAnimated();
  }, []);

  const circleAnimated = () => {
    AnimatedValue.setValue(0);
    Animated.timing(
      AnimatedValue,
      {
        toValue: 1,
        duration: 400,
        useNativeDriver: false
      }
    ).start( ()=> {
      setTimeout(()=> {
        circleAnimated()
      }, 1000)
    })
  }

  const handleTranslateX = AnimatedValue.interpolate({
    inputRange: [0,1],
    outputRange: [-10, 100]
  })

  const handleTranslateX2 = AnimatedValue.interpolate({
    inputRange: [0,1],
    outputRange: [-10, 300]
  })

  const handleTranslateX3 = AnimatedValue.interpolate({
    inputRange: [0,1],
    outputRange: [-10, 600]
  })

  if(visible){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#121212" />
        <View style={{margin: 10}}>
          <View style={styles.card}>
            <View style={styles.imageCard}>
              <Animated.View style={{
                width: '30%',
                height: '100%',
                opacity: 0.5,
                backgroundColor: '#fff',
                transform: [{translateX: handleTranslateX }]
              }}>
  
              </Animated.View>
            </View>
            <View style = {styles.infoUser}>
              <View style = {styles.nameUser}>
                <Animated.View style={{
                  width: '30%',
                  height: '100%',
                  opacity: 0.5,
                  backgroundColor: '#fff',
                  transform: [{translateX: handleTranslateX2 }]
                }}>
  
                </Animated.View>
              </View>
              <View style = {styles.igUser}>
                <Animated.View style={{
                    width: '30%',
                    height: '100%',
                    opacity: 0.5,
                    backgroundColor: '#fff',
                    transform: [{translateX: handleTranslateX2 }]
                  }}>
  
                </Animated.View>
              </View>
            </View>
          </View>
          <View style = {styles.descriptionUser}>
            <Animated.View style={{
                width: '30%',
                height: '100%',
                opacity: 0.5,
                backgroundColor: '#fff',
                transform: [{translateX: handleTranslateX3 }]
              }}>
  
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }

  return(
    <>  
      {children}
    </>
  )
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
    borderRadius: 50,
    backgroundColor: '#eceff1',
    overflow: 'hidden'
  },
  infoUser: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  nameUser: {
    backgroundColor: '#eceff1',
    height: 22,
    borderRadius: 3,
    overflow: 'hidden'
  },
  igUser: {
    backgroundColor: '#eceff1',
    height: 18,
    borderRadius: 3,
    overflow: 'hidden'
  },
  descriptionUser: {
    backgroundColor: '#eceff1',
    height: 60,
    borderRadius: 3,
    overflow: 'hidden'
  }
});


import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';

const LoadingScreen = () => {
  // Animation Values
  const scaleValue = useRef(new Animated.Value(1)).current; // For the bounce
  const fadeValue = useRef(new Animated.Value(0)).current;  // For the text

  useEffect(() => {
    // 1. Start Text Fade In
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // 2. Start Bouncing Logo Loop
    Animated.loop(
      Animated.sequence([
        // Grow slightly (Bounce Up)
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 600,
          easing: Easing.out(Easing.ease), // Smooth easing
          useNativeDriver: true,
        }),
        // Shrink back (Bounce Down)
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 600,
          easing: Easing.in(Easing.ease), // Smooth easing
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Bouncing Logo */}
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </Animated.View>

      {/* Friendly Text */}
      <Animated.View style={{ opacity: fadeValue, marginTop: 20 }}>
        <Text style={styles.loadingText}>Getting your books ready...</Text>
        <Text style={styles.subText}>Almost there!</Text>
      </Animated.View>
      
      {/* Simple decorative dots at the bottom */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, { backgroundColor: '#FF6B6B' }]} />
        <View style={[styles.dot, { backgroundColor: '#4ECDC4' }]} />
        <View style={[styles.dot, { backgroundColor: '#FFE66D' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Clean white background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2', // Friendly Blue
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    gap: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6, // Perfectly round (Childish/Toy-like)
  }
});

export default LoadingScreen;
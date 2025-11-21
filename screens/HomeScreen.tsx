import React, { useEffect, useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { StudyContext } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(StudyContext);

  // Animation: Fade In Logo
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* resizeMode="cover" ensures the image fills the circle perfectly 
             without leaving empty gaps.
          */}
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo} 
            resizeMode="cover" 
          />
        </Animated.View>
        
        <Text style={styles.greeting}>Hello, {user.name}!</Text>

        <Text style={styles.title}>StudyHelper</Text>
        <Text style={styles.subtitle}>Student Learning Companion</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudyTracker')}>
            <Text style={styles.buttonText}>Track Study Hours</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Summary')}>
            <Text style={styles.buttonText}>View Summary</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Notification */}
      <Text style={styles.footerText}>~ Mokete Productions @ 2025 ~</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f5f5', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  
  // UPDATED LOGO STYLE
  logo: { 
    width: 170, 
    height: 130, 
    borderRadius: 20, // this makes the circlular shape
    marginBottom: 15,
    borderWidth: 3,   // Adds a clean border
    borderColor: '#fff',
  }, 


  greeting: {
    fontSize: 20,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 5,
  },
  
  title: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 30 },
  
  buttonContainer: { width: '100%', gap: 15 },
  button: { backgroundColor: '#4A90E2', padding: 15, borderRadius: 10, alignItems: 'center', width: '100%' },
  secondaryButton: { backgroundColor: '#7f8c8d' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },

  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#5B2C6F',
    letterSpacing: 1,
  }
});

export default HomeScreen;
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StudyContext } from '../App';

const ProfileScreen = () => {
  // 1. Get global state and update function
  const { user, updateUser } = useContext(StudyContext);

  // 2. Local state for the input fields
  const [name, setName] = useState(user.name);
  const [studentNumber, setStudentNumber] = useState(user.studentNumber);

  // Ensure inputs match global state when screen loads
  useEffect(() => {
    setName(user.name);
    setStudentNumber(user.studentNumber);
  }, [user]);

  // 3. Handle Save Logic
  const handleSave = () => {
    if (name.trim() === '' || studentNumber.trim() === '') {
      Alert.alert('Error', 'Fields cannot be empty!');
      return;
    }
    
    // Update the global app state
    updateUser(name, studentNumber);
    
    Alert.alert('Success', 'Profile details saved successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarPlaceholder}>
         {/* Display first letter of the name dynamically */}
         <Text style={styles.avatarText}>{name.charAt(0).toUpperCase()}</Text>
      </View>
      
      <Text style={styles.label}>Name</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName}
        placeholder="Enter your name" 
      />

      <Text style={styles.label}>Student Number</Text>
      <TextInput 
        style={styles.input} 
        value={studentNumber} 
        onChangeText={setStudentNumber}
        placeholder="Enter student number"
      />

      {/* 4. The Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#4A90E2', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  avatarText: { fontSize: 40, color: '#fff', fontWeight: 'bold' },
  label: { alignSelf: 'flex-start', fontSize: 14, color: '#666', marginBottom: 5, marginLeft: '10%', fontWeight: '600' },
  input: { width: '80%', borderBottomWidth: 1, borderBottomColor: '#ccc', fontSize: 18, padding: 10, marginBottom: 20, backgroundColor: '#f9f9f9', borderRadius: 5 },
  
  // Button Styles
  saveButton: { backgroundColor: '#2ecc71', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginTop: 20, elevation: 3 },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default ProfileScreen;
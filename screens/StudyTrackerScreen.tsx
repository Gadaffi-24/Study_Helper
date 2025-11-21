import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StudyContext } from '../App';
import { validateInput, getFeedbackMessage } from '../utils/logic';

const StudyTrackerScreen = () => {
  const { addSession } = useContext(StudyContext);
  
  const [moduleName, setModuleName] = useState('');
  const [hours, setHours] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Input Validation
    if (!moduleName.trim()) {
      Alert.alert("Error", "Please enter a module name.");
      return;
    }

    if (!validateInput(hours)) {
      Alert.alert("Invalid Input", "Please enter a valid numeric value for hours.");
      return;
    }

    const hoursNum = parseFloat(hours);
    
    // Save data to global state
    addSession({
      id: Date.now().toString(),
      module: moduleName,
      hours: hoursNum
    });

    // Get Conditional Feedback Logic from utils
    const message = getFeedbackMessage(hoursNum);
    setFeedback(message);

    // Clear inputs
    setModuleName('');
    setHours('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log Study Session</Text>

      <Text style={styles.label}>Module Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. PROG6112"
        value={moduleName}
        onChangeText={setModuleName}
      />

      <Text style={styles.label}>Hours Studied:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 2.5"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Conditional Rendering for Feedback */}
      {feedback ? (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackText}>{feedback}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
  submitButton: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  feedbackContainer: { marginTop: 30, padding: 15, backgroundColor: '#e8f5e9', borderRadius: 8, borderLeftWidth: 5, borderLeftColor: '#2ecc71' },
  feedbackText: { fontSize: 18, color: '#2ecc71', fontWeight: '600', textAlign: 'center' },
});

export default StudyTrackerScreen;
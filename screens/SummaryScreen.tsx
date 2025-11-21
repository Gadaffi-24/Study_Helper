import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { StudyContext } from '../App';

const SummaryScreen = () => {
  const { sessions } = useContext(StudyContext);

  // Calculate Total Hours (Iteration logic)
  const totalHours = sessions.reduce((sum, session) => sum + session.hours, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.headerTitle}>Total Hours Logged</Text>
        <Text style={styles.totalText}>{totalHours.toFixed(1)} hrs</Text>
      </View>

      <Text style={styles.sectionTitle}>History by Module:</Text>

      {/* Iteration using FlatList (efficient loop) */}
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.moduleText}>{item.module}</Text>
            <Text style={styles.hoursText}>{item.hours} hrs</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No study sessions logged yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  headerCard: { backgroundColor: '#6200ea', padding: 20, borderRadius: 12, marginBottom: 20, alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18 },
  totalText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  moduleText: { fontSize: 16, fontWeight: '500' },
  hoursText: { fontSize: 16, color: '#6200ea', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 20 },
});

export default SummaryScreen;
import React, { useState, createContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation';

// Screens
import HomeScreen from './screens/HomeScreen';
import StudyTrackerScreen from './screens/StudyTrackerScreen';
import SummaryScreen from './screens/SummaryScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type StudySession = {
  id: string;
  module: string;
  hours: number;
};

export type UserProfile = {
  name: string;
  studentNumber: string;
};

export const StudyContext = createContext<{
  sessions: StudySession[];
  addSession: (session: StudySession) => void;
  user: UserProfile;
  updateUser: (name: string, studentNum: string) => void;
}>({
  sessions: [],
  addSession: () => {},
  user: { name: 'Student', studentNumber: '' },
  updateUser: () => {},
});

export default function App() {
  //Loading State
  const [isLoading, setIsLoading] = useState(true); 

  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [user, setUser] = useState<UserProfile>({ 
    name: 'Student Name', 
    studentNumber: 'ST10012345' 
  });

  // Effect to simulate loading time (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  const addSession = (session: StudySession) => {
    setSessions((prev) => [...prev, session]);
  };

  const updateUser = (name: string, studentNumber: string) => {
    setUser({ name, studentNumber });
  };

  // Condition to show Loading Screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Normal App Flow
  return (
    <StudyContext.Provider value={{ sessions, addSession, user, updateUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'StudyHelper Dashboard' }} />
          <Stack.Screen name="StudyTracker" component={StudyTrackerScreen} options={{ title: 'Track Study' }} />
          <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'My Progress' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Student Profile' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StudyContext.Provider>
  );
}
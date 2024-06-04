import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import styles from './styles.js';
import MainNavigator from './screens/MainNavigator.js';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>
        Welcome!
      </Text>
      <Text style={styles.text}>
        I am glad you're here. Explore, enjoy!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Main Page"
          onPress={() => props.navigation.navigate('Main')}
          color='darkblue'
        />
      </View>
    </View>  
  );    
};

const Stack = createStackNavigator();

// --- App ---
const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions='headerShown: false'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Main' component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;



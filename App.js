/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FirstPage } from './Components/FirstPage';
import { Searchbar } from './Components/Searchbar';
import styled from 'styled-components/native';
import { Categories } from './Components/Categories';
import { Cards } from './Components/Cards';
import { NewCards } from './Components/NewCards';
import { BottomMenu } from './Components/BottomMenu';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'light';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.white,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.light,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };


const App= () => {
  // const isDarkMode = useColorScheme() === 'light';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  // };

  return (
    <ScrollView>
   <Component>
   <FirstPage/>
   <Searchbar/>
   <Categories/>
   {/* <Cards/> */}
   <NewCards/>
   <BottomMenu/>
   </Component>

   </ScrollView>
  );
};



// const styles = StyleSheet.create({
//   body:{
//     backgroundColor:'skyblue',
//     height:800,
//   },
  
// });

const Component = styled.View`
height:100%;
width:100%;
color: red;

background-color:white;
`;

export default App;

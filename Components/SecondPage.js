
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const SecondPage=()=>
{
    return(
    
      
      <Text>Second Page.</Text>

      )
    
}
const Text = styled.Text`

font-size: 25px;
color: black;
font-weight: 500;

`;

const CardView = styled.View`
	width: 100%;
	height: 300px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
    margin-top:-65px;
   `;

   const CardImage = styled.Image`
	width: 150px;
	height: 120px;
	border-radius: 22px;
	margin-left: 20px;
  object-fit: contain;  
`;

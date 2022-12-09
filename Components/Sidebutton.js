
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const Sidebutton=()=>
{
    return(
     <Mainview>
     <Add>__</Add>
     <Number>1</Number>
     <Minus>+</Minus>
     </Mainview>
      
     )
}

const Add = styled.Text`
font-size: 15px;
color: black;
margin-left:20px;
margin-top:8px;
`;

const Number = styled.Text`
font-size: 15px;
color: black;
margin-left:60px;
margin-top:-15px;
`;

const Minus = styled.Text`
font-size: 30px;
color: black;
margin-left:100px;
margin-top:-32px;
color:#EC5800;
`;

const Mainview = styled.View`
	width: 140px;
	height: 50px;
   
    margin-left:200px;
    margin-top :-65px;
    margin-bottom:40px;
    border-radius:15px;
    border:1px solid black;
   `;

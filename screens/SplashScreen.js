import React from 'react'
import { Box, Image, Text, VStack } from 'native-base';
import { BG_PRIMARY, PRIMARY } from '../assets/colors';
import BackgroundImage from '../components/BackgroundImage'

export default function SplashScreen() {
  return (
    <Box style={{ flex: 1 }}>
      <BackgroundImage
      />
      <Box w="100%" h="100%" position="absolute" top="0" left="0" bg={BG_PRIMARY} opacity="0.90" />
      <VStack opacity="1" flex="1" alignItems="center" justifyContent="center" space="5">
        <Image source={require('../assets/logo.png')} alt="Logo" />
        <Text color="white" fontSize="xl" fontWeight="light">SONG CHIMP</Text>
        <Text color={PRIMARY} fontSize="lg" fontWeight="light">Let the Music Speak</Text>
      </VStack>
    </Box>
  );
}
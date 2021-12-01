import { Box, VStack, Text, HStack, Image, Button, Center, Flex } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_PRIMARY, PINK_PRIMARY } from '../assets/colors';

export const WelcomeScreenFirst = ({ setPage }) => {
  return (
    <Box style={{ flex: 1 }} bg={BG_PRIMARY}>
      <SafeAreaView style={{ flex: 1 }}>
        <VStack
          alignItems="center"
          justifyContent="space-between"
          style={{ flex: 1 }}
        >
          <Flex justifyContent="center">
            <HStack space="3" justifyContent="center">
              <Text color="white" fontSize="xl" fontWeight="300">
                Listen to
              </Text>
              <Box style={{ borderBottomWidth: 1, borderBottomColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="xl" fontWeight="300">
                  Unlimited
                </Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="300">Music</Text>
            </HStack>
            <Text color="white" marginTop="17" opacity=".5" fontSize="14" textAlign="center">
              Listen to 40000+ song 1600+{"\n"}artist
            </Text>
            <Image resizeMode="contain" style={{ marginTop: 40 }} alt="Welcome Screen First" source={require('../assets/welcomescreenfirst.png')} />
          </Flex>
          <Flex align="flex-end" w="100%" style={{ marginBottom: 10 }}>
            <Center w="100%" p="10">
              <Text color="white">Skip For Now</Text>
              <Button onPress={() => setPage(prevState => prevState + 1)} style={{ width: '100%', marginTop: 10, backgroundColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="16" fontWeight="semibold">
                  CONTINUE
                </Text>
              </Button>
            </Center>
          </Flex>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}

export const WelcomeScreenSecond = ({ setPage }) => {
  return (
    <Box style={{ flex: 1 }} bg={BG_PRIMARY}>
      <SafeAreaView style={{ flex: 1 }}>
        <VStack
          alignItems="center"
          justifyContent="space-between"
          style={{ flex: 1 }}
        >
          <Flex justifyContent="center">
            <HStack space="3" justifyContent="center">
              <Text color="white" fontSize="xl" fontWeight="300">
                Unlimited
              </Text>
              <Box style={{ borderBottomWidth: 1, borderBottomColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="xl" fontWeight="300">
                  Download
                </Text>
              </Box>
            </HStack>
            <Text color="white" marginTop="17" opacity=".5" fontSize="14" textAlign="center">
              Download Unlimited song anytime+{"\n"}for free
            </Text>
            <Image resizeMode="contain" style={{ marginTop: 40 }} alt="Welcome Screen Second" source={require('../assets/welcomescreensecond.png')} />
          </Flex>
          <Flex align="flex-end" w="100%" style={{ marginBottom: 10 }}>
            <Center w="100%" p="10">
              <Text color="white">Skip For Now</Text>
              <Button onPress={() => setPage(prevState => prevState + 1)} style={{ width: '100%', marginTop: 10, backgroundColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="16" fontWeight="semibold">
                  CONTINUE
                </Text>
              </Button>
            </Center>
          </Flex>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}

export const WelcomeScreenThird = ({ setPage }) => {
  return (
    <Box style={{ flex: 1 }} bg={BG_PRIMARY}>
      <SafeAreaView style={{ flex: 1 }}>
        <VStack
          alignItems="center"
          justifyContent="space-between"
          style={{ flex: 1 }}
        >
          <Flex justifyContent="center">
            <HStack space="3" justifyContent="center">
              <Text color="white" fontSize="xl" fontWeight="300">
                Search
              </Text>
              <Box style={{ borderBottomWidth: 1, borderBottomColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="xl" fontWeight="300">
                  With
                </Text>
              </Box>
              <Text color="white" fontSize="xl" fontWeight="300">Voice</Text>
            </HStack>
            <Text color="white" marginTop="17" opacity=".5" fontSize="14" textAlign="center">
              Service will identify any music playing{"\n"}aroun you
            </Text>
            <Image resizeMode="contain" style={{ marginTop: 40 }} alt="Welcome Screen Third" source={require('../assets/welcomescreenthird.png')} />
          </Flex>
          <Flex align="flex-end" w="100%" style={{ marginBottom: 10 }}>
            <Center w="100%" p="10">
              <Button style={{ width: '100%', marginTop: 10, backgroundColor: PINK_PRIMARY }}>
                <Text color="white" fontSize="16">
                  GET STARTED
                </Text>
              </Button>
            </Center>
          </Flex>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}

export default function WelcomeScreen() {

  const [page, setPage] = useState(1);

  return page === 1 ?
    <WelcomeScreenFirst setPage={setPage} /> : page === 2 ?
      <WelcomeScreenSecond setPage={setPage} /> : page === 3 ?
        <WelcomeScreenThird setPage={setPage} /> : null;
}
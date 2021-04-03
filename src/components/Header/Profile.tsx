import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Leonardo Thomaz</Text>
        <Text color='gray.300' fontSize='small'>
          leonardo.thomaz@hotmail.com
        </Text>
      </Box>
      <Avatar
        size='md'
        name='Leonardo Thomaz'
        src='https://github.com/LMThomaz.png'
      />
    </Flex>
  );
}

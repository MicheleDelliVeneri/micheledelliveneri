import { Box, Heading, Link, Text, useColorModeValue, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GitLabActivity = () => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.300')

  return (
    <Box
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      p={6}
      bg={bgColor}
      transition="all 0.2s"
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
    >
      <Heading as="h4" fontSize={18} mb={2}>
        GitLab Activity
      </Heading>
      <Text fontSize={14} mb={4} color={useColorModeValue('gray.600', 'gray.400')}>
        View my contribution activity and projects on GitLab
      </Text>
      <Box
        borderRadius="md"
        border="1px solid"
        borderColor={borderColor}
        p={6}
        bg={useColorModeValue('white', 'gray.800')}
        textAlign="center"
        minH="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={4}>
          <Text fontSize={16} fontWeight="medium" mb={2}>
            GitLab Profile
          </Text>
          <Text fontSize={14} color={useColorModeValue('gray.600', 'gray.400')}>
            @MicheleDelliVeneri
          </Text>
        </Box>
        <Button
          as={Link}
          href="https://gitlab.com/MicheleDelliVeneri"
          isExternal
          colorScheme="orange"
          rightIcon={<ExternalLinkIcon />}
          size="md"
          _hover={{ bg: hoverBg }}
        >
          View Activity Matrix on GitLab
        </Button>
      </Box>
      <Box mt={4} textAlign="center">
        <Link
          href="https://gitlab.com/MicheleDelliVeneri"
          isExternal
          color={useColorModeValue('blue.600', 'blue.400')}
          fontSize={14}
          _hover={{ textDecoration: 'underline' }}
        >
          Visit full profile <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  )
}

export default GitLabActivity


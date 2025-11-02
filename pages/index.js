import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin, IoLogoGitlab } from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })


const Home = () => {
    return (
        <Container> 
            <Box 
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello I`m a Data Operation Software Developer at the SKA Observatory! 
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant="page-title">
                        Michele Delli Veneri
                    </Heading>
                    <p> Astrophysicist, DevOps, Data Scientist</p>
                </Box>   
            
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >

            <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow='hidden'
            >
                <ProfileImage
                src="/images/MicheleDelliVeneri.jpg"
                alt="Profile image"
                borderRadius='full'
                width={100}
                height={100}
                />
            </Box>
            </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant='section-title'>
                Work
            </Heading>
            <Paragraph>
                Hi, I'm Michele, a Data Operation Software Developer at the Square Kilometre Array Observatory.
                My work today focuses on the developement of the SKA Regional Centers API Stack.
                I'm also a passionate Deep Learning developer, and my PhD thesis focused on the development of a Deep 
                Learning model for the resoultion of the deconvolution of the radio interferometric cubes and source detection
                in ALMA and SKA data. 
            </Paragraph>
            <Box align="center" my={4}>
            <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
            >
                My portfolio
            </Button>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
            Bio
            </Heading>
            <BioSection>
            <BioYear>1993</BioYear>
            Born in Naples (Napoli), Italy.
            </BioSection>
            <BioSection>
            <BioYear>2016</BioYear>
            Bachelor Degree in Physics, University of Naples Federico II.
            Thesis: Characterisation of Outliers in the Quasar Photometric Redshift Space.
            </BioSection>
            <BioSection>
            <BioYear>2018</BioYear>
            Master Degree in Physics, University of Naples Federico II.
            Thesis: Star Formation Rates Estimation via Machine Learning methods (110/110 cum laude).
            </BioSection>
            <BioSection>
            <BioYear>2019</BioYear>
            Research Scholarship at INAF Astronomical Observatory of Capodimonte, Naples.
            Title: Conceptualisation and development of data-driven models for data analysis in astrophysics and other fields.
            </BioSection>
            <BioSection>
            <BioYear>2022-2023</BioYear>
            Research Grant at Istituto Nazionale di Fisica Nucleare, Section of Naples.
            Study of Distributed Data Storage System within the Scientific Field.
            </BioSection>
            <BioSection>
            <BioYear>2023</BioYear>
            PhD in Information Technology and Electrical Engineering, University of Naples Federico II.
            Thesis: Resolution of Inverse Problems in Astrophysics through Deep Learning.
            </BioSection>
            <BioSection>
            <BioYear>2023-2025</BioYear>
            Technologist at Istituto Nazionale di Fisica Nucleare, Section of Naples, Italy.
            </BioSection>
            <BioSection>
            <BioYear>2025 to present</BioYear>
            Data Operation Software Developer at SKAO
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥
            </Heading>
            <Paragraph>
            RPGs, Flight Simulation, Strategy,
            Physics, Astronomy, Astrophysics,
            History, Sociology,
            Programming, AI
            </Paragraph>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
        <ListItem>
            <Link href="https://gitlab.com/MicheleDelliVeneri" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGitlab />}
              >
                GitLab
              </Button>
            </Link>
            </ListItem>
          <ListItem>
            <Link href="https://github.com/micheledelliveneri" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://www.linkedin.com/in/michele-delli-veneri-a8987215b" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
            </ListItem>
        </List>
        </Section>
        </Container>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import GitLabActivity from '../components/gitlab-activity'
import { GridItem } from '../components/grid-item'

// Placeholder images - replace with actual project images/gifs
// You can download images from the GitLab projects and place them in public/images/works/
const thumbFTS = '/images/works/fts-deployment.gif'
const thumbIndigoIAM = '/images/works/indigo-iam-deployment.gif'
const thumbRucioDeployment = '/images/works/rucio-deployment.gif'
const thumbDIngestor = '/images/works/di-ingestor.png'
const thumbIntegrationEnv = '/images/works/integration-environment.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Section>
        <GitLabActivity />
      </Section>

      <Heading as="h3" fontSize={20} mb={4} mt={8}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            title="File Transfer Service Deployment"
            thumbnail={thumbFTS}
            href="https://gitlab.com/ska-telescope/src/src-dm/ska-src-dm-file-transfer-service-deployment"
          >
            A dockerised version of FTS.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            title="Indigo IAM Deployment"
            thumbnail={thumbIndigoIAM}
            href="https://gitlab.com/ska-telescope/src/src-ugm/ska-src-ugm-indigo-iam-deployment"
          >
            A dockerised/ k8s version of Indigo IAM. This may not currently reflect the deployed version within SRCNet.
          </GridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
            title="Rucio Deployment"
            thumbnail={thumbRucioDeployment}
            href="https://gitlab.com/ska-telescope/src/src-dm/ska-src-dm-rucio-deployment"
          >
            A dockerised version of Rucio. This may not currently reflect the deployed version within SRCNet.
          </GridItem>
        </Section>

        <Section delay={0.2}>
          <GridItem
            title="Data Ingestor Service"
            thumbnail={thumbDIngestor}
            href="https://gitlab.com/ska-telescope/src/src-dm/ska-src-dm-di-ingestor"
          >
            A service for ingesting data into the SRCNet.
          </GridItem>
        </Section>

        <Section delay={0.3}>
          <GridItem
            title="Integration Environment"
            thumbnail={thumbIntegrationEnv}
            href="https://gitlab.com/ska-telescope/src/src-api/ska-src-api-integration-environment"
          >
            Integration environment for the SRCNet API ecosystem and dependent services.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
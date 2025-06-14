'use client'

import { CNLink } from '@/components/chakra-next'
import { siteConfig } from '@/libs/configs/site.config'
import { projectsData } from '@/libs/data/project.data'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { AiOutlineOpenAI } from 'react-icons/ai'
import {
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsFill } from 'react-icons/ri'
import { SiExpress, SiPrisma } from 'react-icons/si'

export default function Home() {
  return (
    <>
      <title>{siteConfig.profile.name}</title>
      <meta name="description" content={siteConfig.profile.about} />

      <Flex
        gap={4}
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          width={{
            base: '100%',
            lg: '40%',
          }}
        >
          <About />
        </Box>
        <Stack gap={10} flex={1}>
          <TechStack />
          <Projects />

          <Contact />
        </Stack>
      </Flex>
    </>
  )
}

const About = () => {
  const socials: {
    Icon: IconType
    href: string
    title: string
  }[] = [
      {
        Icon: FaGithub,
        href: siteConfig.social.githubHref,
        title: 'Github',
      },
      {
        Icon: FaXTwitter,
        href: siteConfig.social.twitterHref,
        title: 'Twitter',
      },
      {
        Icon: FaLinkedin,
        href: siteConfig.social.linkedinHref,
        title: 'LinkedIn',
      },
    ]
  return (
    <Stack
      p={6}
      gap={4}
      borderWidth="1px"
      borderColor="gray.subtel"
      borderRadius="md"
      height={'fit-content'}
      position={{ md: 'sticky' }}
      top={{ md: 24 }}
    >
      <Heading as={'h1'} fontSize={'xl'} color={'brand'}>
        {siteConfig.profile.name}
      </Heading>
      <Text fontSize={'sm'} color={'brand.secondary'}>
        {siteConfig.profile.about}
      </Text>
      <Center>
        {socials.map((item) => (
            <Button key={item.title} variant={'outline'} p={2} borderRadius={'full'} border={0}>
            <CNLink href={item.href} color={'Brand'} target="_blank" rel="noopener noreferrer">
              <item.Icon />
            </CNLink>
            </Button>
        ))}
      </Center>
      <Flex direction={'column'} gap={4} justifyContent={'space-between'}>
        <Flex justifyContent={'space-between'} gap={2}>
          <Flex direction="column" flex={1}>
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              {siteConfig.profile.experience}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Experience
            </Text>
          </Flex>
          <Flex direction="column" flex={1} textAlign={'right'}>
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              {siteConfig.profile.location}
            </Heading>
            <Text fontSize="xs" color="brand.secondary">
              Location
            </Text>
          </Flex>
        </Flex>

        <CNLink href={siteConfig.Resume} color={'Brand'} target="_blank" rel="noopener noreferrer">
          <Button borderRadius={'md'} width={'100%'}>
            Resume
          </Button>
        </CNLink>


      </Flex>
    </Stack>
  )
}

const TechStack = () => {
  const items = [
    {name: 'HTML', badge: <FaHtml5 />},
    { name: 'CSS', badge: <FaCss3 /> },
    { name: 'TypeScript', badge: <BiLogoTypescript /> },
    { name: 'JavaScript', badge: <IoLogoJavascript /> },
    { name: 'React JS', badge: <FaReact /> },
    { name: 'Next JS', badge: <RiNextjsFill /> },
    { name: 'Tailwind', badge: <BiLogoTailwindCss /> },
    { name: 'Redux', badge: <BiLogoRedux /> },
    { name: 'Node JS', badge: <FaNodeJs /> },
    { name: 'Express', badge: <SiExpress /> },
    { name: 'MongoDB', badge: <BiLogoMongodb /> },
    { name: 'OpenAI', badge: <AiOutlineOpenAI /> },
    { name: 'Firebase', badge: <BiLogoFirebase /> },
    { name: 'Git', badge: <FaGitAlt /> },
    { name: 'Prisma', badge: <SiPrisma /> },

  ]

  return (
    <Stack gap={4} id="home">
      <Heading as={'h2'} fontSize={'xl'} color={'brand'}>
        Tech Stack
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3 }} gap={4}>
        {items.map((tech, index) => {
          return (
            <Button
              key={index}
              variant={'outline'}
              _hover={{ bg: 'brand.muted' }}
              color={'brand'}
              borderColor={'gray.subtel'}
            >
              {tech.badge}
              {tech.name}
            </Button>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

const Projects = () => {
  return (
    <Stack gap={4} id="projects">
      <Heading as={'h2'} fontSize={'2xl'} color={'brand'}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projectsData.map((project, index) => (
          <Box
            key={index}
            borderWidth={'1px'}
            borderColor={'gray.subtel'}
            borderRadius={'md'}
            p={6}
            display="flex"
            flexDirection="column"
            gap={4}

          >
            <Heading as="h3" fontSize="lg" color={'brand'} fontWeight="bold" textAlign="start">
              {project.title}
            </Heading>
            {project.image && (

              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                width="100%"
                maxHeight="180px"
                objectFit="cover"
                mb={2}
              />
            )}
            <Text color="brand.secondary" fontSize={'sm'}>
              {project.description}
            </Text>
            {project.techStack && (
              <Flex wrap="wrap" gap={2} mt={2}>
                {project.techStack.map((tech: string, i: number) => (
                  <Box
                    key={i}
                    px={2}
                    py={1}
                    bg="brand.muted"
                    borderRadius="md"
                    fontSize="xs"
                    color="brand"
                  >
                    {tech}
                  </Box>
                ))}
              </Flex>
            )}
            <Separator />
            <CNLink href={project.href} target="_blank" rel="noopener noreferrer">
              <Button
                colorScheme="brand"
                variant="solid"
                width="full"
                mt={2}
              >
                <TbWorld />
                Live URL
              </Button>
            </CNLink>

          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  )
}


const Contact = () => {
  return (
    <Stack gap={6} marginBottom={10} id="contact">
      <Heading as={'h2'} fontSize={{ base: 'xl', md: '2xl' }} color={'brand'}>
        Contact
      </Heading>
      <Box borderWidth={'1px'} p={5} borderRadius={'lg'} borderColor={'gray.subtel'}>
        <Text textAlign={'center'} fontSize={'sm'} color={'brand.secondary'}>
          Wanna connect with me? Drop me a message on my:{' '}
          <CNLink
            _hover={{ color: 'brand' }}
            color={'blue.400'}
            _focus={{ boxShadow: 'none' }}
            href={siteConfig.social.twitterHref}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Twitter
          </CNLink>
        </Text>

      </Box>
    </Stack>
  )
}
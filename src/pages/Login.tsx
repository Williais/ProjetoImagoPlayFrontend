import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { Mail, Lock, ArrowRight } from "lucide-react"
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
      console.log("Fazendo login: " + email + " " + password)
      navigate('/home')
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      position="relative"
      bg="#0a0510"
      overflow="hidden"
      px={4}
    >
      <Box
        position="absolute"
        inset="0"
        bgImage="url('https://images.unsplash.com/photo-1541819661448-422891316b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        bgSize="cover"
        backgroundPosition="center"
        opacity={0.15}
        zIndex="0"
      />
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="50vw"
        h="50vw"
        bg="fuchsia.800"
        filter="blur(150px)"
        opacity={0.3}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-20%"
        right="-10%"
        w="50vw"
        h="50vw"
        bg="orange.700"
        filter="blur(150px)"
        opacity={0.2}
        borderRadius="full"
      />

      <Box
        w="full"
        maxW="md"
        bg="whiteAlpha.50"
        backdropFilter="blur(24px)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        borderRadius="3xl"
        p={{ base: 8, md: 10 }}
        zIndex="1"
        boxShadow="0 25px 50px rgba(0,0,0,0.6)"
      >
        <VStack gap={1} mb={10} align="center">
          <Heading display="flex" alignItems="baseline">
            <Text
              as="span"
              fontFamily="'Londrina Solid', cursive"
              backgroundImage="linear-gradient(to right, #ed8936, #ed64a6)"
              backgroundClip="text"
              color="transparent"
              fontSize="5xl"
              letterSpacing="widest"
              py={1}
              px={1}
              lineHeight="normal"
              style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.4))" }}
            >
              IMAGO
            </Text>
            <Text
              as="span"
              fontFamily="sans-serif"
              fontWeight="light"
              color="whiteAlpha.700"
              fontSize="2xl"
              letterSpacing="tighter"
            >
              PLAY
            </Text>
          </Heading>
          <Text color="whiteAlpha.500" fontSize="sm" fontWeight="light">
            O cinema da nossa terra, numa única tela.
          </Text>
        </VStack>

        <VStack gap={4} w="full">
          <Box position="relative" w="full">
            <Box
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              color="whiteAlpha.400"
              zIndex="2"
            >
              <Mail size={20} />
            </Box>
            <Input
              type="email"
              placeholder="O seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pl={12}
              py={6}
              bg="whiteAlpha.100"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              _placeholder={{ color: "whiteAlpha.300" }}
              _focus={{
                borderColor: "orange.500",
                bg: "whiteAlpha.200",
                ring: 0,
              }}
            />
          </Box>

          <Box position="relative" w="full">
            <Box
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              color="whiteAlpha.400"
              zIndex="2"
            >
              <Lock size={20} />
            </Box>
            <Input
              type="password"
              placeholder="Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pl={12}
              py={6}
              bg="whiteAlpha.100"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              _placeholder={{ color: "whiteAlpha.300" }}
              _focus={{
                borderColor: "fuchsia.500",
                bg: "whiteAlpha.200",
                ring: 0,
              }}
            />
          </Box>

          <Box w="full" textAlign="right">
            <Text
              fontSize="xs"
              color="whiteAlpha.400"
              cursor="pointer"
              _hover={{ color: "orange.400" }}
            >
              Esqueceu-se da palavra-passe?
            </Text>
          </Box>

          <Button
            onClick={handleLogin}
            w="full"
            backgroundImage="linear-gradient(to right, #f97316, #f43f5e)"
            color="white"
            fontWeight="bold"
            size="lg"
            h="55px"
            borderRadius="xl"
            mt={2}

            boxShadow="0 10px 20px rgba(249, 115, 22, 0.2)"
            _hover={{
              transform: "translateY(-1px)",
              boxShadow: "0 15px 25px rgba(249, 115, 22, 0.4)",
            }}
          >
            Entrar <ArrowRight size={20} />
          </Button>
        </VStack>

        <HStack my={8} w="full">
          <Box flex={1} h="1px" bg="whiteAlpha.200" />
          <Text
            fontSize="xs"
            color="whiteAlpha.400"
            fontWeight="medium"
            textTransform="uppercase"
          >
            Ou
          </Text>
          <Box flex={1} h="1px" bg="whiteAlpha.200" />
        </HStack>

        <VStack gap={4} w="full">
          <Button
          onClick={() => navigate("/register")}
            w="full"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            color="white"
            h="55px"
            borderRadius="xl"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Criar Perfil Gratuito
          </Button>

          <Text
            color="whiteAlpha.500"
            fontSize="sm"
            fontWeight="light"
            cursor="pointer"
            _hover={{ color: "white" }}
            transition="all 0.2s"
          >
            Explorar catálogo como visitante
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

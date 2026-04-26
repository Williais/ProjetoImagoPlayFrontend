import { Flex, Heading, VStack, Text, Input, Button, Box } from '@chakra-ui/react';
import { User, Mail, Lock } from 'lucide-react';
import type { RegisterForm } from '../interfaces/registerForm';
import { useState } from 'react';


export default function Register(){

    const [formData, setFormData] = useState<RegisterForm>({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setFormData((prevState: RegisterForm) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        if(formData.senha !== formData.confirmarSenha){
            alert("As Senhas Não Coincidem")
            return
        }

        try{

            const payload = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            }

            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            if(response.ok){
                const data = await response.json()
                console.log("Sucesso! O Java devolveu:", data);
                alert("Conta Criada com Sucesso!")
            }else{
                alert("Falha ao criar conta. Talvez este e-mail já esteja em uso.");
            }

        }catch(e){
            console.error("Erro na conexão:", e);
            alert("Não foi possível conectar ao servidor. Verifique se o Java está rodando.");
        }
    }

    return(
        <Flex minH="100vh" align="center" justify="center" position="relative" bg="#0a0510" overflow="hidden" px={4}>

            <Box
                position="absolute"
                inset="0"
                bgImage="url('https://images.unsplash.com/photo-1541819661448-422891316b24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                bgSize="cover"
                backgroundPosition="center"
                opacity={0.15}
                filter="grayscale(50%)"
                zIndex="0"
            />

            <Box position="absolute" top="-20%" left="-10%" w="50vw" h="50vw" bg="fuchsia.800" filter="blur(150px)" opacity={0.3} borderRadius="full" zIndex="0" />
            <Box position="absolute" bottom="-20%" right="-10%" w="50vw" h="50vw" bg="orange.700" filter="blur(150px)" opacity={0.2} borderRadius="full" zIndex="0" />

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
                boxShadow="0 20px 50px rgba(0,0,0,0.5)"
            >

                <VStack gap={1} mb={8} align="center">
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
                        <Text as="span" fontFamily="sans-serif" fontWeight="light" color="whiteAlpha.600" fontSize="2xl" letterSpacing="tighter">
                            PLAY
                        </Text>
                    </Heading>
                    <Text color="whiteAlpha.500" fontSize="sm" fontWeight="light">O cinema da nossa terra, numa única tela.</Text>
                </VStack>

                <VStack gap={4} w="full">

                    <Box position="relative" w="full">
                        <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="whiteAlpha.400" zIndex="2">
                            <User size={20} />
                        </Box>
                        <Input 
                            name='nome' 
                            placeholder="Nome Completo"
                            value={formData.nome} 
                            onChange={handleChange} 
                            pl={12}
                            py={6}
                            bg="whiteAlpha.100" 
                            color="white" 
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            borderRadius="xl"
                            _placeholder={{ color: "whiteAlpha.300" }}
                            _focus={{ borderColor: "orange.500", bg: "whiteAlpha.200", ring: 0 }}
                        />
                    </Box>

                    <Box position="relative" w="full">
                        <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="whiteAlpha.400" zIndex="2">
                            <Mail size={20} />
                        </Box>
                        <Input 
                            name='email' 
                            type="email"
                            placeholder="O seu e-mail"
                            value={formData.email} 
                            onChange={handleChange} 
                            pl={12}
                            py={6}
                            bg="whiteAlpha.100" 
                            color="white" 
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            borderRadius="xl"
                            _placeholder={{ color: "whiteAlpha.300" }}
                            _focus={{ borderColor: "orange.500", bg: "whiteAlpha.200", ring: 0 }}
                        />
                    </Box>

                    <Box position="relative" w="full">
                        <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="whiteAlpha.400" zIndex="2">
                            <Lock size={20} />
                        </Box>
                        <Input 
                            name='senha' 
                            type="password"
                            placeholder="Crie uma senha"
                            value={formData.senha} 
                            onChange={handleChange} 
                            pl={12}
                            py={6}
                            bg="whiteAlpha.100" 
                            color="white" 
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            borderRadius="xl"
                            _placeholder={{ color: "whiteAlpha.300" }}
                            _focus={{ borderColor: "fuchsia.500", bg: "whiteAlpha.200", ring: 0 }}
                        />
                    </Box>

                    <Box position="relative" w="full">
                        <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="whiteAlpha.400" zIndex="2">
                            <Lock size={20} />
                        </Box>
                        <Input 
                            name='confirmarSenha' 
                            type="password"
                            placeholder="Repita a senha"
                            value={formData.confirmarSenha} 
                            onChange={handleChange} 
                            pl={12}
                            py={6}
                            bg="whiteAlpha.100" 
                            color="white" 
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            borderRadius="xl"
                            _placeholder={{ color: "whiteAlpha.300" }}
                            _focus={{ borderColor: "fuchsia.500", bg: "whiteAlpha.200", ring: 0 }}
                        />
                    </Box>

                    <Button 
                        onClick={handleSubmit}
                        w="full"
                        backgroundImage="linear-gradient(to right, #f97316, #f43f5e)"
                        color="white" 
                        fontWeight="bold"
                        size="lg"
                        h="55px"
                        borderRadius="xl"
                        mt={2}
                        border="none"
                        boxShadow="0 4px 14px 0 rgba(249, 115, 22, 0.39)" 
                        _hover={{ 
                            opacity: 0.9,
                            transform: "translateY(-1px)",
                            boxShadow: "0 6px 20px rgba(249, 115, 22, 0.23)"
                        }}
                        transition="all 0.2s"
                    >
                        Criar Conta
                    </Button>

                </VStack>

                <Flex align="center" gap={4} my={6} w="full">
                    <Box flex={1} h="1px" bg="whiteAlpha.200" />
                    <Text fontSize="xs" color="whiteAlpha.400" fontWeight="medium" letterSpacing="widest" textTransform="uppercase">
                        Ou
                    </Text>
                    <Box flex={1} h="1px" bg="whiteAlpha.200" />
                </Flex>

                <VStack gap={4} w="full">
                    <Button 
                        w="full" 
                        bg="transparent" 
                        border="1px solid" 
                        borderColor="whiteAlpha.200" 
                        color="white" 
                        h="55px"
                        borderRadius="xl"
                        fontWeight="medium"
                        _hover={{ bg: "whiteAlpha.100" }}
                    >
                        Já tem uma conta? Entrar
                    </Button>
                    
                    <Text color="whiteAlpha.500" fontSize="sm" fontWeight="light" cursor="pointer" _hover={{ color: "white" }} transition="colors 0.2s">
                        Explorar catálogo como visitante
                    </Text>
                </VStack>

            </Box>
        </Flex>
    )
}
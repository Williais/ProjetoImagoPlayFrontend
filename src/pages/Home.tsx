import { Box, Heading, Flex, Text, VStack, Button} from "@chakra-ui/react";

export default function Home(){

    const filmesDestaque = [
        { id: 1, titulo: "Vidas Secas: O Retorno", capa: "https://images.unsplash.com/photo-1518118014377-ce94f1db1df9?auto=format&fit=crop&w=400&q=80" },
        { id: 2, titulo: "Sons do Agreste", capa: "https://images.unsplash.com/photo-1533555541673-982eb8f395ba?auto=format&fit=crop&w=400&q=80" },
        { id: 3, titulo: "O Poço e a Sede", capa: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?auto=format&fit=crop&w=400&q=80" },
        { id: 4, titulo: "Luz de Lampião", capa: "https://images.unsplash.com/photo-1493665313175-99dce23e98b4?auto=format&fit=crop&w=400&q=80" },
        { id: 5, titulo: "Cordel Encantado", capa: "https://images.unsplash.com/photo-1533159981446-277dc05b22b1?auto=format&fit=crop&w=400&q=80" }
    ];

    return(
        <Box minH="100vh" bg="#0a0510" color="white" overflowX="hidden">

            <Flex 
                as="nav" 
                w="full" 
                position="absolute" 
                top={0} 
                zIndex={10} 
                p={{ base: 4, md: 8 }} 
                justify="space-between" 
                align="center"
                backgroundImage="linear-gradient(to bottom, rgba(10,5,16,0.9), transparent)"
            >
                <Heading display="flex" alignItems="baseline">
                    <Text as="span" fontFamily="'Londrina Solid', cursive" backgroundImage="linear-gradient(to right, #ed8936, #ed64a6)" backgroundClip="text" color="transparent" fontSize="3xl" letterSpacing="widest" py={1} px={1} lineHeight="normal" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }}>
                        IMAGO
                    </Text>
                    <Text as="span" fontFamily="sans-serif" fontWeight="light" color="whiteAlpha.700" fontSize="lg" letterSpacing="tighter">
                        PLAY
                    </Text>
                </Heading>
                
                <Box w="40px" h="40px" borderRadius="full" border="2px solid" borderColor="orange.400" overflow="hidden" cursor="pointer">
                    <img src="https://ui-avatars.com/api/?name=Usuario&background=f97316&color=fff" alt="Perfil" />
                </Box>
            </Flex>

            <Box position="relative" h="80vh" w="full">
                <Box position="absolute" inset={0} backgroundImage="url('https://images.unsplash.com/photo-1541819661448-422891316b24?auto=format&fit=crop&w=1920&q=80')" backgroundSize="cover" backgroundPosition="center" opacity={0.6} />

                <Box position="absolute" inset={0} backgroundImage="linear-gradient(to top, #0a0510 5%, transparent 60%)" />
                <Box position="absolute" inset={0} backgroundImage="linear-gradient(to right, #0a0510 5%, transparent 80%)" />

                <Flex position="relative" zIndex={1} h="full" align="flex-end" p={{ base: 6, md: 16 }} pb={{ base: 12, md: 24 }}>
                    <VStack align="flex-start" gap={6} maxW="2xl">
                        <Text color="orange.400" fontSize="sm" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">
                            Lançamento Exclusivo
                        </Text>
                        <Heading fontFamily="'Londrina Solid', cursive" fontSize={{ base: "5xl", md: "7xl" }} lineHeight="0.9" textShadow="2px 4px 10px rgba(0,0,0,0.8)">
                            O CANTO DO SEMIÁRIDO
                        </Heading>
                        <Text fontSize={{ base: "md", md: "xl" }} color="whiteAlpha.800" fontWeight="300" textShadow="1px 1px 4px rgba(0,0,0,0.8)">
                            Uma jornada visual e poética pela resistência da cultura popular no coração do Nordeste. Descubra as vozes esquecidas.
                        </Text>
                        
                        <Flex gap={4} mt={2}>
                            <Button bg="white" color="black" size="lg" h="50px" px={8} borderRadius="full" fontWeight="bold" _hover={{ bg: "orange.400", color: "white", transform: "scale(1.05)" }} transition="all 0.2s">
                                Assistir Agora
                            </Button>
                            <Button bg="whiteAlpha.200" color="white" border="1px solid" borderColor="whiteAlpha.400" size="lg" h="50px" px={8} borderRadius="full" backdropFilter="blur(10px)" _hover={{ bg: "whiteAlpha.300" }}>
                                Mais Informações
                            </Button>
                        </Flex>
                    </VStack>
                </Flex>
            </Box>

            <Box px={{ base: 6, md: 16 }} py={8} position="relative" zIndex={2} mt="-10vh">
                <Text fontSize="xl" fontWeight="medium" mb={6} color="whiteAlpha.900">
                    Obras Nordestinas em Destaque
                </Text>
                
                <Flex 
                    gap={6} 
                    overflowX="auto" 
                    pb={8} 
                    css={{
                        '&::-webkit-scrollbar': { height: '8px' },
                        '&::-webkit-scrollbar-track': { background: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px' },
                        '&::-webkit-scrollbar-thumb': { background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' },
                    }}
                >
                    {filmesDestaque.map((filme) => (
                        <Box 
                            key={filme.id} 
                            minW={{ base: "140px", md: "200px" }} 
                            cursor="pointer"
                            role="group"
                        >
                            <Box 
                                h={{ base: "210px", md: "300px" }} 
                                borderRadius="lg" 
                                overflow="hidden" 
                                position="relative"
                                boxShadow="0 10px 20px rgba(0,0,0,0.5)"
                                transition="all 0.3s"
                                _groupHover={{ transform: "translateY(-10px)", boxShadow: "0 15px 30px rgba(249, 115, 22, 0.3)" }}
                            >
                                <Box 
                                    position="absolute" 
                                    inset={0} 
                                    backgroundImage={`url(${filme.capa})`} 
                                    backgroundSize="cover" 
                                    backgroundPosition="center"
                                    transition="transform 0.5s"
                                    _groupHover={{ transform: "scale(1.1)" }}
                                />
                                <Box position="absolute" inset={0} backgroundImage="linear-gradient(to top, rgba(10,5,16,0.9), transparent)" opacity={0} transition="opacity 0.3s" _groupHover={{ opacity: 1 }} />
                            </Box>
                            <Text mt={3} fontSize="sm" fontWeight="medium" color="whiteAlpha.800" _groupHover={{ color: "orange.400" }} transition="colors 0.2s">
                                {filme.titulo}
                            </Text>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}
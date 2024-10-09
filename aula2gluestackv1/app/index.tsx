import {
  Avatar, AvatarFallbackText, AvatarImage,
  Box,
  Button, ButtonText, Input, InputField,
  SafeAreaView,
  ScrollView, Text
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView backgroundColor="$black" style={{ flex: 1 }}>
      
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap:5}}
      >
        <Box width="100%" alignItems="center">
          <Avatar bgColor="$amber600" size="2xl" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            <AvatarImage
              alt="Sandeep Srivastava"
              source={require('../assets/images/avatar.png')}
            />
          </Avatar>
        </Box>
        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          style={{width: "80%"}}
        >
          <InputField type="text" placeholder="Email..." />
        </Input>
        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          style={{width: "80%"}}
        >
          <InputField type="password" placeholder="Senha" />
        </Input>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          style={{width: "80%"}}
        >
          <ButtonText>Login</ButtonText>
        </Button>
        <Link href="/cadastro" asChild>
        
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          style={{width: "80%"}}
        >
          <ButtonText>Cadastre-se</ButtonText>
        </Button>

        </Link>
        <Link href="/esqueceu"><Text>Esqueceu a senha</Text></Link>
      </ScrollView>
    </SafeAreaView>
  );
}

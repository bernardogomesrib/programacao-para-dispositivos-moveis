import CustomHeader from "@/components/header";
import {
    Button, ButtonText, Input, InputField,
    SafeAreaView,
    ScrollView
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function Cadastro() {
    return (
        <SafeAreaView backgroundColor="$black" style={{ flex: 1 }}>
            <CustomHeader   title="Cadastro"/>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: 5 }}
            >
                <Input
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    style={{ width: "80%" }}
                >
                    <InputField type="text" placeholder="Nome" />
                </Input>
                <Input
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    style={{ width: "80%" }}
                >
                    <InputField type="text" placeholder="Email..." />
                </Input>
                <Input
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    style={{ width: "80%" }}
                >
                    <InputField type="password" placeholder="Senha" />
                </Input>
                <Link href="/" asChild>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={{ width: "80%" }}
                >
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
                </Link>
            </ScrollView>
        </SafeAreaView>
    );
}
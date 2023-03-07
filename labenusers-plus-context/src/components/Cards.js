import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function UserCard(props) {
  const context = useContext(GlobalContext);
  const { selectedId, selectCard } = context;

  return (
    <Card
      maxW="sm"
      border={
        selectedId === props.user.id
          ? "5px solid orange"
          : "5px solid transparent"
      }
      onClick={() => selectCard(props.user.id)}
    >
      <CardBody>
        <Image
          src={`https://i.pravatar.cc/200?u=${props.user.name}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.user.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}

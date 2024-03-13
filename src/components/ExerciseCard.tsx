import { Box, Card, CardBody, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { FaCirclePlay } from "react-icons/fa6";

const ExerciseCard = ({
  exercise,
}: {
  exercise: { [key: string]: string };
}) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} paddingBottom="80px">
      {Object.entries(exercise).map(([key, value]) => (
        <Card
          key={key}
          backgroundColor="white"
          marginBottom="10px"
          marginX="20px"
          borderRadius="10px"
          padding="20px 30px"
        >
          <CardBody>
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text margin="0px 0px 20px 0px" as="b" fontSize="18px">
                  {key}
                </Text>
                <Text margin="0px">{value}</Text>
              </Box>
              <FaCirclePlay color="var(--play-circle-color)" size="20px" />
            </Flex>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ExerciseCard;

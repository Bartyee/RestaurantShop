import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  CardSection,
} from "@mantine/core";

interface RestaurantCard {
  name: string;
  description: string;
  imageSrc: string;
}
const RestaurantCard = (props: RestaurantCard) => {
  const { name, description, imageSrc } = props;
  const imageUrl = `http://localhost:1337${imageSrc}`;
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <CardSection>
        <Image src={imageUrl} height={160} alt={name} />
      </CardSection>
      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{name}</Text>
        <Badge color="red" variant="light">
            Popular
          </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {description}
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Make an order
      </Button>
    </Card>
  );
};

export default RestaurantCard;

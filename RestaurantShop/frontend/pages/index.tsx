import type { NextPage } from "next";
import RestaurantsList from "../components/restaurantsList";
import { Container } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Container>
      Witamy na stronie głównej
      <RestaurantsList />
    </Container>
  );
};

export default Home;

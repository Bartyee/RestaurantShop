import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import RestaurantsList from "../components/RestaurantList/RestaurantList";
import { gql, useQuery } from "@apollo/client";

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      data{
        id
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  return (
    <div className={styles.container}>
      <RestaurantsList />
    </div>
  );
};

export default Home;

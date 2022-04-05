import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import styles from "/styles/RestaurantsList.module.scss";

import React from "react";
import { Restaurant } from "../../types/Restaurant";
import RestaurantCard from "../restaurantCard";
import { Grid, LoadingOverlay } from "@mantine/core";

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          name
          description
        }
      }
    }
  }
`;

interface RestaurantsList {}

const RestaurantsList = (props: RestaurantsList) => {
  const { loading, data } = useQuery(GET_RESTAURANTS);

  if (loading) {
    return <LoadingOverlay visible={loading} />;
  }

  return (
    <Grid>
      {data.restaurants.data.map((el: Restaurant) => (
        <Grid.Col xs={12} sm={6} md={4}>
          <RestaurantCard
            name={el.attributes.name}
            description={el.attributes.description}
            imageSrc={el.attributes.image.data.attributes.url}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default RestaurantsList;

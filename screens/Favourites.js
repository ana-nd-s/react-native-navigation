import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const Favourites = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default Favourites;
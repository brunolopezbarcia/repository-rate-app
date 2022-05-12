import react from "react";
import { View, Text, FlatList } from "react-native";
import Repository from "../data/repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
  return (
    <FlatList
      data={Repository}
      renderItem={({ item: repo }) => <RepositoryItem {... repo} />}
    />
  )
}

export default RepositoryList;

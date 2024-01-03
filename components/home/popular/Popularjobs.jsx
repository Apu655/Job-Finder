import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { router, useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularjobsCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hooks";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text stylr={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View styler={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => {
              return (
                <PopularjobsCard
                  item={item}
                  handleCardPress={handleCardPress}
                  selectedJob={selectedJob}
                />
              );
            }}
            keyExtractor={(item) => item?.job_id}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;

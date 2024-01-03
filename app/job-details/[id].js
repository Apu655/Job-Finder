import { useCallback, useEffect, useState } from "react";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useFetch } from "../../hooks";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import { ScreenStack } from "react-native-screens";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import { Text, View } from "react-native";

const JobDetails = () => {
  const params = useLocalSearchParams();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  useEffect(() => {
    // console.log("Before router calle:")
    // router.back();
    // console.log("Use router");
  }, []);
  console.log("Data: 1", data);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="100%"
              handlePress={() => {
                router.back();
              }}
            />
          ),
          headerTitle: "This is a title",
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;

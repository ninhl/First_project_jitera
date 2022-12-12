/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type HomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function HomePage(props: HomePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container12}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper12}>
          <Box className={styles.header_wrapper6}>
            <Text className={styles.text5} textType={"Text"}>
              Note list
            </Text>
            <Text className={styles.text6} textType={"Text"}>
              Create new note
            </Text>
          </Box>
          <Box className={styles.card8}>
            <Text className={styles.text8} textType={"Text"}>
              Init step
            </Text>
          </Box>
          <Box className={styles.card10}>
            <Text className={styles.text10} textType={"Text"}>
              Recommendation for next step
            </Text>
          </Box>
          <Box className={styles.card12}>
            <Text className={styles.text12} textType={"Text"}>
              Success_probability
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default HomePage;

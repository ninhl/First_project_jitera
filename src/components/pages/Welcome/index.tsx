/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Property1active from "@components/molecules/Property1active";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type WelcomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function WelcomePage(props: WelcomePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container7}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper7}>
          <Text className={styles.text4} textType={"Text"}>
            Awesome Note
          </Text>
          <Box className={styles.card7}>
            <Text className={styles.text6} textType={"Text"}>
              Welcome to our take note application
            </Text>
            <Property1active className={styles.common_button1} />
            <Text className={styles.text7} textType={"Text"}>
              Already a member? Log in
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default WelcomePage;

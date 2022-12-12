/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Wrapper from "@components/molecules/Wrapper";
import Property1active from "@components/molecules/Property1active";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type SignUpPageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function SignUpPage(props: SignUpPageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container9}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper9}>
          <Text className={styles.text4} textType={"Text"}>
            Hello
          </Text>
          <Box className={styles.card9}>
            <Text className={styles.text6} textType={"Text"}>
              Sign up
            </Text>
            <Box className={styles.sign_up_form8}>
              <Wrapper className={styles.text_field1} />
              <Wrapper className={styles.text_field2} />
              <Wrapper className={styles.text_field3} />
              <Text className={styles.text8} textType={"Text"}>
                By registering, you agree to the privacy policy and membership agreement.
              </Text>
              <Property1active className={styles.common_button1} />
            </Box>
            <Text className={styles.text9} textType={"Text"}>
              Already a member? Log in
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default SignUpPage;

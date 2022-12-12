/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Wrapper from "@components/molecules/Wrapper";
import Property1active from "@components/molecules/Property1active";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type ContainerMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function ContainerMolecule(props: ContainerMoleculeProps): JSX.Element {
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.wrapper6}>
        <Text className={styles.text3} textType={"Text"}>
          Welcome back!
        </Text>
        <Box className={styles.card6}>
          <Text className={styles.text5} textType={"Text"}>
            Login
          </Text>
          <Box className={styles.login_form6}>
            <Wrapper className={styles.text_field1} />
            <Wrapper className={styles.text_field2} />
            <Property1active className={styles.common_button1} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ContainerMolecule;

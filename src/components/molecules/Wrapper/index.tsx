/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type WrapperMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function WrapperMolecule(props: WrapperMoleculeProps): JSX.Element {
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.title15}>
        <Text className={styles.text15} textType={"Text"}>
          Label
        </Text>
      </Box>
      <Box className={styles.input17}>
        <Text className={styles.text17} textType={"Text"}>
          Placeholder
        </Text>
      </Box>
    </Box>
  );
}
export default WrapperMolecule;

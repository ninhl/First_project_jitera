/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import CommonBtn from "@components/molecules/CommonBtn";
import { useNavigateService } from "@services/navigate";
import { Box,Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type Property1activeMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  label?: string;
  onClick?: () => any;
};
function Property1activeMolecule(props: Property1activeMoleculeProps): JSX.Element {
  const handleBox0 = async () => {
    try {
      const { onClick } = props;
      return onClick && onClick();
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.box_0} onClick={handleBox0}>
        <Text className={styles.text_0} textType={"Text"}>
          {get(props, "label")}
        </Text>
      </Box>
    </Box>
  );
}
export default Property1activeMolecule;

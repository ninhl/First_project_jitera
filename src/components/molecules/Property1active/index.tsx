/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import CommonBtn from "@components/molecules/CommonBtn";
import { useNavigateService } from "@services/navigate";
import { Box } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type Property1activeMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  label?: string;
  onClick?: () => any;
};
function Property1activeMolecule(props: Property1activeMoleculeProps): JSX.Element {
<<<<<<< HEAD
  const navigateService = useNavigateService();

  const handleOnClickCommonbtn1 = async () => {
    try {
      navigateService.navigate("/signup");
=======
  const handleBox0 = async () => {
    try {
      const { onClick } = props;
      return onClick && onClick();
>>>>>>> 2c130ce7e5cdac5ca7869bb22746912af0aacd76
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
<<<<<<< HEAD
      <CommonBtn
        className={styles.commonbtn_1}
        label={"Sign Up"}
        onClick={handleOnClickCommonbtn1}
      />
=======
      <Box className={styles.box_0} onClick={handleBox0}>
        <Text className={styles.text_0} textType={"Text"}>
          {get(props, "label")}
        </Text>
      </Box>
>>>>>>> 2c130ce7e5cdac5ca7869bb22746912af0aacd76
    </Box>
  );
}
export default Property1activeMolecule;

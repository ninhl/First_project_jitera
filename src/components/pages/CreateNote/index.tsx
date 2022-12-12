/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import Wrapper from "@components/molecules/Wrapper";
import StateDefaultPostIconFALSETagFALSEPreIconFALSE from "@components/molecules/StateDefaultPostIconFALSETagFALSEPreIconFALSE";
import Property1active from "@components/molecules/Property1active";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CreateNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function CreateNotePage(props: CreateNotePageProps): JSX.Element {
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background1} />
      <Box className={styles.container8}>
        <Box className={styles.wrapper8}>
          <Box className={styles.info_header5}>
            <Iconssafarichevronbackward className={styles.iconssafarichevronbackward1} />
            <Text className={styles.text5} textType={"Text"}>
              Back
            </Text>
          </Box>
          <Box className={styles.card8}>
            <Text className={styles.text7} textType={"Text"}>
              Edit note
            </Text>
            <Box className={styles.form8}>
              <Wrapper className={styles.text_field1} />
              <StateDefaultPostIconFALSETagFALSEPreIconFALSE className={styles.input1} />
              <Property1active className={styles.common_button1} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default CreateNotePage;

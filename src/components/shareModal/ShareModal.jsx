import React from "react";
import { Modal } from "@mantine/core";
import PostShare from "../postShare/PostShare";

const ShareModal = ({ modalOpened, setModalOpened }) => {
  return (
    <>
      <Modal
        className="fullscreen"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size={"65%"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}>
        <PostShare />
      </Modal>
    </>
  );
};
export default ShareModal;

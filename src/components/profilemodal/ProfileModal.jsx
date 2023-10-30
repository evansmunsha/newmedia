import React from "react";
import "./profilemodal.css";
import { Modal } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  // const [modalOpened, { close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Edit"
        size={"55%"}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}>
        <form className="form forminfo">
          <h3>Your Info</h3>

          <div>
            <input type="text" name="FirstName" placeholder="First Name" className="input" />

            <input type="text" name="LastName" placeholder="Last Name" className="input" />
          </div>

          <div>
            <input type="text" name="WorksAt" placeholder="Works at" className="input" />
          </div>

          <div>
            <input type="text" name="LivesIn" placeholder="Lives In" className="input" />

            <input type="text" name="Country" placeholder=" Country" className="input" />
          </div>

          <div>
            <input type="text" placeholder="RelationShip Status" className="input" />
          </div>

          <div>
            <span>
              Image For Profile
              <input style={{ display: "" }} type="file" name="profileImg" id="" />
            </span>

            <span>
              Back Cover Image
              <input style={{ display: "" }} type="file" name="coverImage" id="" />
            </span>
          </div>

          <button className="button UpdatesButton">Save Your Updates</button>
        </form>
        {/* Modal content */}
      </Modal>
    </>
  );
};
export default ProfileModal;

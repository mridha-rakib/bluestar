import Modals from "./Modals";

const ConnectBtn = ({ closeModal }) => {
  const handleOverlayClick = (e) => {
    // Close modal if click is outside the modal content
    if (e.target === e.currentTarget) {
      closeModal();
      console.log(e, "overlay clicked");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative">
        <Modals closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ConnectBtn;

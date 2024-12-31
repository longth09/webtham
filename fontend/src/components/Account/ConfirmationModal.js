import React from "react";
import PropTypes from "prop-types";

function ConfirmationModal({ isOpen, title, message, onClose, onConfirm }) {
  if (!isOpen) return null; // Không hiển thị modal nếu chưa mở

  return (
    <div
      className="modal"
      style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Hủy
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

ConfirmationModal.defaultProps = {
  title: "Xác nhận",
  message: "Bạn có chắc chắn muốn thực hiện hành động này?",
};

export default ConfirmationModal;

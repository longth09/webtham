import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CouponModal({ isOpen, onClose, onApply }) {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    onApply(couponCode);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nhập mã giảm giá</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="couponCode">
            <Form.Label>Mã giảm giá</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập mã giảm giá của bạn"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Hủy
            </Button>
            <Button variant="dark" onClick={handleApplyCoupon}>
              Áp dụng
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CouponModal;

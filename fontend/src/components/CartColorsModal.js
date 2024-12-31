import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CartColorsModal({
  isOpen,
  onClose,
  onSubmit,
  title = "Cập nhật thông tin",
  size = "lg",
  formFields = [],
  initialData = {},
}) {
  const [formData, setFormData] = useState(initialData);

  // Reset form data when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const renderFormControl = (field) => {
    switch (field.type) {
      case "radio":
        return (
          <div className="radio-buttons-group">
            {field.options?.map((option) => (
              <div
                className="radio-button"
                key={`${field.name}-${option.value}`}
              >
                <input
                  type="radio"
                  className="btn-check"
                  name={field.name}
                  id={`${field.name}-${option.value}`}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={handleChange}
                />
                <label
                  className="btn btn-outline-dark"
                  htmlFor={`${field.name}-${option.value}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      case "textarea":
        return (
          <Form.Control
            as="textarea"
            rows={field.rows || 3}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        );
      default:
        return (
          <Form.Control
            type={field.type || "text"}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        );
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} size={size} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <Form.Group key={field.id} className="mb-3" controlId={field.id}>
              <Form.Label>{field.label}</Form.Label>
              {renderFormControl(field)}
            </Form.Group>
          ))}
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Hủy
            </Button>
            <Button variant="dark" type="submit">
              Lưu thay đổi
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CartColorsModal;

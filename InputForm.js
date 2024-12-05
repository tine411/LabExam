import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const InputForm = ({ onAddData }) => {
  const [semester, setSemester] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [totalStudents, setTotalStudents] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData({
      semester,
      courseCode,
      totalStudents: parseInt(totalStudents),
    });
    setSemester('');
    setCourseCode('');
    setTotalStudents('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Semester</Form.Label>
        <Form.Control
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          placeholder="e.g., 2024-2"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Course Code</Form.Label>
        <Form.Control
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="e.g., ITE102"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Total Students Enrolled</Form.Label>
        <Form.Control
          type="number"
          value={totalStudents}
          onChange={(e) => setTotalStudents(e.target.value)}
          placeholder="e.g., 90"
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add Data
      </Button>
    </Form>
  );
};

export default InputForm;

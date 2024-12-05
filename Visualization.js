import React from 'react';
import { Bar } from 'react-chartjs-2';

const Visualization = ({ predictions }) => {
  const data = {
    labels: predictions.map((p) => p.courseCode),
    datasets: [
      {
        label: 'Predicted Enrollment',
        data: predictions.map((p) => p.predictedEnrollment),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="mt-4">
      <h3>Enrollment Visualization</h3>
      <Bar data={data} />
    </div>
  );
};

export default Visualization;

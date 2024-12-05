import React, { useState } from 'react';
import InputForm from './components/InputForm';
import TrainModelButton from './components/TrainModelButton';
import PredictionTable from './components/PredictionTable';
import Visualization from './components/Visualization';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement);

const App = () => {
  const [data, setData] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const maxStudentsPerSection = 30;

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  const handleModelTrained = (predictedValues) => {
    const updatedPredictions = data.map((d, index) => ({
      semester: d.semester,
      courseCode: d.courseCode,
      totalStudents: d.totalStudents,
      predictedEnrollment: Math.round(predictedValues[index]),
    }));
    setPredictions(updatedPredictions);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Course Section Forecasting</h1>
      
      {/* Input Section */}
      <div className="mt-4">
        <h3>Input Section</h3>
        <InputForm onAddData={handleAddData} />
        <div className="mt-4">
          <h4>Input Data</h4>
          <PredictionTable predictions={data} maxStudents={maxStudentsPerSection} isInputTable />
          <TrainModelButton data={data} onModelTrained={handleModelTrained} />
        </div>
      </div>

      {/* Output Section */}
      <div className="mt-5">
        <h3>Output: Predicted for 2024-2</h3>
        <PredictionTable predictions={predictions} maxStudents={maxStudentsPerSection} />
        <Visualization predictions={predictions} />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import * as tf from '@tensorflow/tfjs';

const TrainModelButton = ({ data, onModelTrained }) => {
  const handleTrainModel = async () => {
    if (data.length < 2) {
      alert('Please provide at least two data points to train the model.');
      return;
    }

    const inputs = data.map((d) => d.totalStudents);
    const labels = inputs.map((x) => x + 20); // Dummy future prediction logic

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1], units: 1 }));
    model.compile({
      optimizer: tf.train.adam(),
      loss: 'meanSquaredError',
    });

    await model.fit(inputTensor, labelTensor, { epochs: 50 });

    const predictions = inputs.map((x) =>
      model.predict(tf.tensor2d([x], [1, 1])).dataSync()[0]
    );

    onModelTrained(predictions);

    tf.dispose([inputTensor, labelTensor, model]);
  };

  return (
    <button onClick={handleTrainModel} className="btn btn-primary mt-3">
      Train Model
    </button>
  );
};

export default TrainModelButton;

import React from 'react';

const PredictionTable = ({ predictions, maxStudents, isInputTable }) => {
  return (
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          {isInputTable ? (
            <>
              <th>Semester</th>
              <th>Course Code</th>
              <th>Total Students</th>
            </>
          ) : (
            <>
              <th>Course Code</th>
              <th>Predicted Enrollment</th>
              <th>Predicted Sections</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {predictions.map((p, index) => (
          <tr key={index}>
            {isInputTable ? (
              <>
                <td>{p.semester}</td>
                <td>{p.courseCode}</td>
                <td>{p.totalStudents}</td>
              </>
            ) : (
              <>
                <td>{p.courseCode}</td>
                <td>{Math.round(p.predictedEnrollment)}</td>
                <td>{Math.ceil(p.predictedEnrollment / maxStudents)}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PredictionTable;

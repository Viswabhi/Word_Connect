import React from "react";
import "./ConfigPanel.css";

const ConfigPanel = ({
  groupSize,
  setGroupSize,
  itemCount,
  setItemCount,
  columns,
  setColumns,
}) => {
  return (
    <div className="config-panel">
      <div>
        <label>Group Size: </label>
        <input
          type="number"
          min="2"
          max="4"
          value={groupSize}
          onChange={(e) => setGroupSize(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Item Count: </label>
        <input
          type="number"
          min="8"
          max="16"
          value={itemCount}
          onChange={(e) => setItemCount(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Columns: </label>
        <input
          type="number"
          min="2"
          max="5"
          value={columns}
          onChange={(e) => setColumns(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ConfigPanel;

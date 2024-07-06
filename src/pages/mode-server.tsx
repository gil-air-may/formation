import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./ModeServer.css";
import { useState } from "react";
import GridLayout from "react-grid-layout";

// const ResponsiveGridLayout = WidthProvider(Responsive);

const ModeServer: React.FC = () => {
  const initialLayout = [
    { i: "a", x: 2, y: 2, w: 1, h: 1, static: true },
    { i: "b", x: 2, y: 2, w: 1, h: 1 },
    { i: "c", x: 2, y: 2, w: 1, h: 1 },
  ];

  const [layout, setLayout] = useState<GridLayout.Layout[]>(initialLayout);

  const changeLayout = () => {
    setLayout([
      ...layout,
      { i: "a", x: 1, y: 2, w: 1, h: 1, static: true },
      { i: "b", x: 1, y: 2, w: 1, h: 1 },
      { i: "c", x: 1, y: 2, w: 1, h: 1 },
    ]);
  };

  const validateLayout = (layout: GridLayout.Layout[]) => {
    console.log(layout);
    changeLayout();
  };

  return (
    <div className="ModeServer">
      <div className="left-panel">
        <div className="setup-layout">
          <h2>Formation</h2>
          <button onClick={() => changeLayout()}>move</button>
        </div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={40}
          width={500}
          maxRows={6}
          isResizable={false}
          onLayoutChange={(layout) => validateLayout(layout)}
          isDroppable={true}
          compactType={null}
        >
          <div className="grid-item" key="a">
            a
          </div>
          <div className="grid-item" key="b">
            b
          </div>
          <div className="grid-item" key="c">
            c
          </div>
        </GridLayout>
        <div className="connected-devices">
          <h2>Connected Devices</h2>
          <table>
            <thead>
              <tr>
                <th>Device Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Device 1</td>
                <td>Connected</td>
                <td>
                  <button>Configure</button>
                  <button>Disconnect</button>
                </td>
              </tr>
              <tr>
                <td>Device 2</td>
                <td>Disconnected</td>
                <td>
                  <button>Configure</button>
                  <button>Disconnect</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-panel">
        <h2>Logs</h2>
        <div className="logs">
          <p>Log entry 1</p>
          <p>Log entry 2</p>
          <p>Log entry 3</p>
        </div>
      </div>
    </div>
  );
};

export default ModeServer;

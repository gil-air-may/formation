import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./ModeServer.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ModeServer: React.FC = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 0, y: 0, w: 1, h: 1 },
    { i: "c", x: 0, y: 0, w: 1, h: 1 },
  ];

  return (
    <div className="ModeServer">
      <div className="left-panel">
        <div className="setup-layout">
          <h2>Formation</h2>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 64, md: 64, sm: 12, xs: 16, xxs: 1 }}
            autoSize={true}
            rowHeight={30}
            width={30}
            isResizable={false}
          >
            <div key="a" className="grid-item">
              Item 1
            </div>
            <div key="b" className="grid-item">
              Item 2
            </div>
            <div key="c" className="grid-item">
              Item 3
            </div>
          </ResponsiveGridLayout>
        </div>
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

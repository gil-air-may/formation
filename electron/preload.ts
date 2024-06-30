// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

interface ElectronAPI {
  writeFile: (filename: string, content: string) => void;
  onWriteFileResponse: (
    callback: (response: { success: boolean; error?: string }) => void
  ) => void;
}

contextBridge.exposeInMainWorld("electron", {
  writeFile: (filename: string, content: string) => {
    ipcRenderer.send("write-file", { filename, content });
  },
  onWriteFileResponse: (
    callback: (response: { success: boolean; error?: string }) => void
  ) => {
    ipcRenderer.on("write-file-response", (event, response) =>
      callback(response)
    );
  },
} as ElectronAPI);

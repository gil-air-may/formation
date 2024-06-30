// src/global.d.ts
interface ElectronAPI {
  writeFile: (filename: string, content: string) => void;
  onWriteFileResponse: (
    callback: (response: { success: boolean; error?: string }) => void
  ) => void;
}

interface Window {
  electron: ElectronAPI;
}

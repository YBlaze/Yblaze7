const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI',{
	close: () => {
		ipcRenderer.send("close-app");
	},
	minimize: () => {
		ipcRenderer.send("min-app");
	},
    maximize: () => {
		ipcRenderer.send("max-app");
	},
	siteSafe: (URL) => {
		ipcRenderer.send("get-cer", URL);
	}
});
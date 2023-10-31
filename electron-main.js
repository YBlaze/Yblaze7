'use strict';
const { app, BrowserWindow, Menu, shell, screen, dialog, ipcMain, remote } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 788,
    height: 688,
    minWidth: 788,
    minHeight: 688,
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
    },
  })

  win.loadFile('index.html');

  ipcMain.on("close-app", (event) => {
        app.quit();
  });
  ipcMain.on("min-app", (event) => {
        win.minimize();
  });
  ipcMain.on("max-app", (event) => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
  });
}

app.whenReady().then(() => {
  createWindow()
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});
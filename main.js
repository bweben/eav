const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const {ipcMain} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secWindow;
let hasSended = false;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});
    secWindow = new BrowserWindow({width: 400, height: 600, frame: false});
    let electScreen = electron.screen;

    // and load the beamer.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    secWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
    //secWindow.webContents.openDevTools();

    ipcMain.once('init-done', (arg) => {
        mainWindow.webContents.send('all-displays', electScreen.getAllDisplays());
        if (!hasSended) {
            secWindow.webContents.send('elect-redirect-to', '/beamer');
            hasSended = true;
        }
    });

    ipcMain.on('selected-display', (event, arg) => {
        secWindow.setPosition(arg.bounds.x + 50, arg.bounds.y + 50);
    });

    ipcMain.on('brightness-changed', (event, arg) => {
        secWindow.webContents.send('brightness-changed', arg);
    });

    ipcMain.on('media-changed', (event, arg) => {
        secWindow.webContents.send('media-changed', arg);
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
        secWindow = null;
        app.quit();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
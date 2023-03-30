const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let sum = "";

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "main.html"),
            protocol: "file",
            slashes: true
        })
    );

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    ipcMain.on("sum", (err,data)=>{
        sum = data;
        mainWindow.webContents.send("show", sum);
    })
})

const mainMenuTemplate=[
    {
        label: "File",
        submenu: [
            {
                label: "Exit",
                role: "quit"
            }
        ]
    },
    {
        label: "Dev Tools",
        submenu: [
            {
                label: "Inspect",
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    }
]

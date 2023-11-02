var isSearch = false;
var engine = "Google";
var webview = document.getElementById('wv');

function insert() {
    webview.insertCSS(`
::-webkit-scrollbar{width:16px}::-webkit-scrollbar:horizontal{height:17px}::-webkit-scrollbar-corner{background:#eee} ::-webkit-scrollbar-track:vertical{background:linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)} ::-webkit-scrollbar-track:horizontal{background:linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)} ::-webkit-scrollbar-thumb{background-color:#eee;border:1px solid #8e8f8f;border-radius:3px;box-shadow:solid 0 -1px 1px hsla(0,0%,100%,.8),solid 0 1px 1px #fff} ::-webkit-scrollbar-thumb:vertical{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(90deg,#eee 45%,#ddd 0,#bbb)}::-webkit-scrollbar-thumb:horizontal{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(180deg,#eee 45%,#ddd 0,#bbb)} ::-webkit-scrollbar-thumb:hover:vertical{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(90deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-thumb:hover:horizontal{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(180deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-thumb:active:vertical{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(90deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab} ::-webkit-scrollbar-thumb:active:horizontal{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC") no-repeat 50%,linear-gradient(180deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab}::-webkit-scrollbar-button:horizontal:end:decrement, ::-webkit-scrollbar-button:horizontal:start:increment, ::-webkit-scrollbar-button:vertical:end:decrement, ::-webkit-scrollbar-button:vertical:start:increment{display:none} ::-webkit-scrollbar-button{border:1px solid transparent} ::-webkit-scrollbar-button:vertical{height:17px} ::-webkit-scrollbar-button:vertical:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}::-webkit-scrollbar-button:vertical:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)} ::-webkit-scrollbar-button:horizontal{width:16px} ::-webkit-scrollbar-button:horizontal:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)} ::-webkit-scrollbar-button:horizontal:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)} ::-webkit-scrollbar-button:hover{background-color:#eee;border-color:#8e8f8f;border-radius:3px;box-shadow:solid 0 -1px 1px hsla(0,0%,100%,.8),solid 0 1px 1px #fff} ::-webkit-scrollbar-button:hover:vertical{height:17px} ::-webkit-scrollbar-button:hover:vertical:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-button:hover:vertical:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-button:hover:horizontal{width:16px} ::-webkit-scrollbar-button:hover:horizontal:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="),linear-gradient(180deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-button:hover:horizontal:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(180deg,#e5f4fd 45%,#b3e0f9 0);border-color:#3c7fb1} ::-webkit-scrollbar-button:active{background-color:#eee;border-color:#8e8f8f;border-radius:3px;box-shadow:solid 0 -1px 1px hsla(0,0%,100%,.8),solid 0 1px 1px #fff} ::-webkit-scrollbar-button:active:vertical{height:17px} ::-webkit-scrollbar-button:active:vertical:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab} ::-webkit-scrollbar-button:active:vertical:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(90deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab} ::-webkit-scrollbar-button:active:horizontal{width:16px} ::-webkit-scrollbar-button:active:horizontal:start{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="),linear-gradient(180deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab} ::-webkit-scrollbar-button:active:horizontal:end{background:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+"),linear-gradient(180deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab}
/*# sourceMappingURL=scrollbar.css.map */
`);
}
webview.addEventListener('dom-ready', insert);

setInterval(function() {
    if (webview.isLoadingMainFrame() === false) {
        document.getElementById('spinner').style.width = "0px";
        document.getElementById('spinner').style.opacity = "0";
    } else {
        document.getElementById('spinner').style.width = "20px";
        document.getElementById('spinner').style.opacity = "1";
    }
    if (webview.canGoBack() === false) {
        document.getElementById('backward').style.opacity = "0.5";
    } else {
        document.getElementById('backward').style.opacity = "1";
    }
    if (webview.canGoForward() === false) {
        document.getElementById('forward').style.opacity = "0.5";
    } else {
        document.getElementById('forward').style.opacity = "1";
    }
    if (isSearch) {
        document.getElementById('sBox').style.width = "187px";
        document.getElementById('sBox').style.opacity = "1";
        document.getElementById('sBoxBtn').style.width = "26px";
        document.getElementById('sBoxBtn').style.opacity = "1";
        document.getElementById('wBox').style.width = "0px";
        document.getElementById('wBox').style.opacity = "0";
        document.getElementById('wBoxBtn').style.width = "0px";
        document.getElementById('wBoxBtn').style.opacity = "0";
        document.getElementById('wBoxBtn').style.display = "none";
        document.getElementById('sBoxBtn').style.display = "block";
        document.getElementById('sBoxBtn').style.transition = "0.5s";
        document.getElementById('sBox').style.transition = "0.5s";
        document.getElementById('wBoxBtn').style.transition = "0s";
        document.getElementById('wBox').style.transition = "0s";
        document.getElementById('urlbtn').innerHTML = "URL";
    } else {
        document.getElementById('wBox').style.width = "187px";
        document.getElementById('wBox').style.opacity = "1";
        document.getElementById('wBoxBtn').style.width = "26px";
        document.getElementById('wBoxBtn').style.opacity = "1";
        document.getElementById('sBox').style.width = "0px";
        document.getElementById('sBox').style.opacity = "0";
        document.getElementById('sBoxBtn').style.width = "0px";
        document.getElementById('sBoxBtn').style.opacity = "0";
        document.getElementById('sBoxBtn').style.display = "none";
        document.getElementById('wBoxBtn').style.display = "block";
        document.getElementById('wBoxBtn').style.transition = "0.5s";
        document.getElementById('wBox').style.transition = "0.5s";
        document.getElementById('sBoxBtn').style.transition = "0s";
        document.getElementById('sBox').style.transition = "0s";
        document.getElementById('urlbtn').innerHTML = "Search";
    }
    document.getElementById('title').innerHTML = 'Y7 - ' + webview.getTitle().split(" ")[0];
    document.getElementById('search').placeholder = "Search " + engine + '...';
    document.title = 'YBlaze7 - ' + webview.getTitle();
    document.getElementById('zoomDis').innerHTML = `<b>Zoom ${webview.getZoomFactor()*100}%</b>`;
    if (engine === 'Bing'){
        document.getElementById('Bing').style.borderWidth = "2.5px";
        document.getElementById('Bing').style.borderStyle = "solid";
        document.getElementById('Bing').style.backgroundImage = "linear-gradient(0deg, #89f7fe5f 0%, #66a6ff5f 100%)";
        document.getElementById('Google').style.borderWidth = "0px";
        document.getElementById('Google').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Google').style.borderStyle = "solid";
        document.getElementById('Yahoo').style.borderWidth = "0px";
        document.getElementById('Yahoo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('DuckDuckGo').style.borderWidth = "0px";
        document.getElementById('DuckDuckGo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('DuckDuckGo').style.borderStyle = "solid";
    }else if (engine === 'Google'){
        document.getElementById('Bing').style.borderWidth = "0px";
        document.getElementById('Bing').style.borderStyle = "solid";
        document.getElementById('Bing').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Google').style.borderWidth = "2.5px";
        document.getElementById('Google').style.backgroundImage = "linear-gradient(0deg, #89f7fe5f 0%, #66a6ff5f 100%)";
        document.getElementById('Google').style.borderStyle = "solid";
        document.getElementById('Yahoo').style.borderWidth = "0px";
        document.getElementById('Yahoo').style.borderStyle = "solid";
        document.getElementById('Yahoo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('DuckDuckGo').style.borderWidth = "0px";
        document.getElementById('DuckDuckGo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('DuckDuckGo').style.borderStyle = "solid";
    }else if (engine === 'Yahoo'){
        document.getElementById('Bing').style.borderWidth = "0px";
        document.getElementById('Bing').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Bing').style.borderStyle = "solid";
        document.getElementById('Yahoo').style.borderWidth = "2.5px";
        document.getElementById('Yahoo').style.backgroundImage = "linear-gradient(0deg, #89f7fe5f 0%, #66a6ff5f 100%)";
        document.getElementById('Yahoo').style.borderStyle = "solid";
        document.getElementById('Google').style.borderWidth = "0px";
        document.getElementById('Google').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Google').style.borderStyle = "solid";
        document.getElementById('DuckDuckGo').style.borderWidth = "0px";
        document.getElementById('DuckDuckGo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('DuckDuckGo').style.borderStyle = "solid";
    }else{
        document.getElementById('Bing').style.borderWidth = "0px";
        document.getElementById('Bing').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Bing').style.borderStyle = "solid";
        document.getElementById('DuckDuckGo').style.borderWidth = "2.5px";
        document.getElementById('DuckDuckGo').style.backgroundImage = "linear-gradient(0deg, #89f7fe5f 0%, #66a6ff5f 100%)";
        document.getElementById('DuckDuckGo').style.borderStyle = "solid";
        document.getElementById('Google').style.borderWidth = "0px";
        document.getElementById('Google').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Google').style.borderStyle = "solid";
        document.getElementById('Yahoo').style.borderWidth = "0px";
        document.getElementById('Yahoo').style.backgroundImage = "linear-gradient(45deg, #93a5cf3f 0%, #e4efe93f 100%)";
        document.getElementById('Yahoo').style.borderStyle = "solid";
    }
}, 98);

function reloWv() {
    webview.reload();
}

function back() {
    if (webview.canGoBack() === true) {
        webview.goBack();
    }
}

function exitFull() {
    document.exitFullscreen();
}

function closeMenu() {
    document.getElementById('cBck').style.display = "none";
    document.getElementById('cSaveBtn').style.opacity = "0.5";
    document.getElementById('cLinkBtn').style.opacity = "0.5";
}

function openMenu() {
    document.getElementById('cBck').style.display = "block";
}

function forward() {
    if (webview.canGoForward() === true) {
        webview.goForward();
    }
}

function zoomIn() {
    closeMenu();
    webview.setZoomFactor(webview.getZoomFactor() + 0.1);
}

function zoomOut() {
    closeMenu();
    webview.setZoomFactor(webview.getZoomFactor() - 0.1);
}

function zoomReset() {
    closeMenu();
    webview.setZoomFactor(1);
}

function ccopy() {
    closeMenu();
    webview.focus();
    webview.copy();
}

function cpaste() {
    closeMenu();
    webview.focus();
    webview.paste();
}

function ccut() {
    closeMenu();
    webview.focus();
    webview.cut();
}

function csave() {
    if (document.getElementById('cSaveBtn').style.opacity === '1'){
        closeMenu();
        webview.downloadURL(localStorage.getItem('mediaURL'));
    }
}

function clink() {
    if (document.getElementById('cLinkBtn').style.opacity === '1'){
        closeMenu();
        webview.loadURL(localStorage.getItem('URL'));
    }
}

function cdev() {
    closeMenu();
    webview.openDevTools();
}

function getCer() {
    webview.executeJavaScript(`
    if (location.protocol === 'https:') {
        // page is secure
    }else{
       if (confirm("The following page is insecure. Loading the page may pose a security risk. Pressing cancel will return to a secure site(Google)")) {
        // Load page
       }else{
        location.href = "https://www.google.com";
       }
    }
    `);
}

function search() {
    if (document.getElementById('wBoxBtn').style.opacity == '1') {
        if (document.getElementById("search").value != "" && document.getElementById("search").value != "+" && document.getElementById("search").value != " ") {
            if (engine === 'Google'){
                webview.loadURL("https://google.com/search?q=" + document.getElementById("search").value.replaceAll(' ', '+'));
            }
            if (engine === 'Yahoo'){
                webview.loadURL("https://search.yahoo.com/search?q=" + document.getElementById("search").value.replaceAll(' ', '+'));
            }
            if (engine === 'Bing'){
                webview.loadURL("https://bing.com/search?q=" + document.getElementById("search").value.replaceAll(' ', '+'));
            }
            if (engine === 'DuckDuckGo'){
                webview.loadURL("https://duckduckgo.com/?q=" + document.getElementById("search").value.replaceAll(' ', '+'));
            }
        }
    }
}

function fadeOut(element) {
    document.getElementById("tooltip").style.marginTop = (parseInt(document.getElementById("tooltip").style.marginTop.replace("px",""))+5.525)+"px";
    document.getElementById("tooltip").style.opacity = "0";
    document.getElementById("tooltip").style.innerHTML = "";
    document.getElementById("tooltip").style.pointerEvents = "none";
}

function fadeOut2(element) {
    document.getElementById("qtip").style.marginTop = (parseInt(document.getElementById("qtip").style.marginTop.replace("px",""))+5.525)+"px";
    document.getElementById("qtip").style.opacity = "0";
    document.getElementById("qtip").style.innerHTML = "";
    document.getElementById("bBck").style.display = "none";
}

function aniTip(text){
    document.getElementById('tooltip').style.display = "block";
    document.getElementById("tooltip").style.marginLeft = "0px";
    document.getElementById("tooltip").style.marginTop = "0px";
    document.getElementById("tooltip").style.opacity = "1";
    document.getElementById("tooltip").innerHTML = text;
}

function tip(text) {
    document.getElementById("tooltip").style.transitionDuration = "0.1s";
    document.getElementById("tooltip").style.marginTop = (parseInt(document.getElementById("tooltip").style.marginTop.replace("px",""))+5.525)+"px";
    document.getElementById("tooltip").style.opacity = "0";
    setTimeout(function () {
        aniTip(text);
    }, 101);
}

function setEngine(newEngine){
    engine = newEngine;
}

function displaySearchEngines(){
    document.getElementById('qtip').style.display = "block";
    document.getElementById("qtip").style.marginLeft = "277px";
    document.getElementById("bBck").style.display = "block";
    document.getElementById("qtip").style.marginTop = "0px";
    document.getElementById("qtip").style.opacity = "1";
    document.getElementById("qtip").innerHTML = `
    <span style="font-weight: 700;">Search Engine</span>
    <div>Pick the search engine you want to use to search the web.</div>
    <img src="./glyphs/google.png" style="width: 25px; height: 25px;" id="Google" onclick="setEngine('Google')" class='engine'></img>
    <span> </span>
    <img src="./glyphs/bing.png" style="width: 25px; height: 25px;" id="Bing" onclick="setEngine('Bing')" class='engine'></img>
    <span> </span>
    <img src="./glyphs/yahoo.png" style="width: 25px; height: 25px;" id="Yahoo" onclick="setEngine('Yahoo')" class='engine'></img>
    <span> </span>
    <img src="./glyphs/duck.png" style="width: 25px; height: 25px;" id="DuckDuckGo" onclick="setEngine('DuckDuckGo')" class='engine'></img>
    </div>
    <div onclick="fadeOut()" style="opacity: 0.5;">Search, click [Here], or click anywhere outside to hide</div>
    `;
}

function begin() {
    webview.loadURL('https://github.com/YBlaze/Yblaze7');
}

function aniCabout() {
    document.getElementById("tooltip").style.marginTop = "0px";
    document.getElementById("tooltip").style.opacity = "1";
    document.getElementById("tooltip").innerHTML = `
    <div class="active" style="background-image: none;">
                <div class="title-bar" style="background-image: none; background-color: #000000000; background: none; border: none; box-shadow: none;">
                    <div class="title-bar-text" style="background-image: none; background-color: #000000000; background: none; border: none;box-shadow: none;"></div>
                    <div class="title-bar-controls">
                        <button aria-label="Close" onclick="fadeOut();"></button>
                    </div>
                </div>
            </div>
<h4>YBlaze7</h4>
<div>Build 1</div>
<div>Made with <img src="./glyphs/love.png" style="width: 12px; height: 12px;" style="heart"></img> by YBlaze Team.  <a onclick="begin()">Check for updates on github</a></div>
`;
}

function cabout() {
    closeMenu();
    document.getElementById("tooltip").style.transitionDuration = "0.1s";
    document.getElementById("tooltip").style.marginTop = (parseInt(document.getElementById("tooltip").style.marginTop.replace("px",""))+5.525)+"px";
    document.getElementById("tooltip").style.opacity = "0";
    setTimeout(function () {
        aniCabout();
    }, 101);
}

function sites() {
    if (document.getElementById('sBoxBtn').style.opacity == 1) {
        if (document.getElementById("site").value.indexOf('https://') !== 0 && document.getElementById("site").value.indexOf('mailto:') !== 0 && document.getElementById("site").value.indexOf('file:') !== 0 && document.getElementById("site").value.indexOf('view-source:') !== 0) {
            tip(`
            <div class="active" style="background-image: none;">
                <div class="title-bar" style="background-image: none; background-color: #000000000; background: none; border: none; box-shadow: none;">
                    <div class="title-bar-text" style="background-image: none; background-color: #000000000; background: none; border: none;box-shadow: none;"></div>
                    <div class="title-bar-controls">
                        <button aria-label="Close" onclick="fadeOut();"></button>
                    </div>
                </div>
            </div>
            <div>Please enter a valid URL!</div><div>(Make sure that the url starts with https://)!</div>`);
        } else {
            webview.loadURL(document.getElementById("site").value);

        }
    }
}

document.getElementById("search").addEventListener("search", () => {
    search();
});

document.getElementById("site").addEventListener("search", () => {
    sites();
});

function clamp(min, max) {
    return Math.min(Math.max(this, min), max);
};

function trunc(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
}

webview.addEventListener("context-menu", (e) => {
    document.getElementById('cMenu').style.position = "absolute";
    document.getElementById('cMenu').style.marginLeft = e.params.x + "px";
    document.getElementById('cMenu').style.marginTop = e.params.y + "px";
    if (e.params.mediaType == 'image' || e.params.mediaType == 'video' || e.params.mediaType == 'audio') {
        document.getElementById('cSaveBtn').innerHTML = `Save ${e.params.mediaType} as`;
        document.getElementById('cSaveBtn').style.opacity = "1";
        localStorage.setItem('mediaURL', e.params.srcURL);
    }
    document.getElementById('cLinkBtn').style.opacity = "0.5";
    if (e.params.linkURL !== ""){
        document.getElementById('cLinkBtn').innerHTML = `Open ${trunc(e.params.linkURL, 17)}`;
        document.getElementById('cLinkBtn').style.opacity = "1";
        localStorage.setItem('URL', e.params.linkURL);
    }
    if (e.params.x > document.getElementById('windo').offsetWidth - 200) {
        document.getElementById('cMenu').style.marginLeft = document.getElementById('windo').offsetWidth - 212 + "px";
    }
    if (e.params.y > document.getElementById('windo').offsetHeight - 252) {
        document.getElementById('cMenu').style.marginTop = document.getElementById('windo').offsetHeight - 252 + "px";
    }
    if (e.params.y > -1 * (341 - document.getElementById('windo').offsetHeight)) {
        document.getElementById('cMenu').style.marginTop = -1 * (341 - document.getElementById('windo').offsetHeight) + "px";
    }
    openMenu();
});

function tglSearch() {
    isSearch = !isSearch;
}
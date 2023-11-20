@echo off
set size=0
chcp 65001
echo [33m■ [ [37mFinding Cache[] [101;97;1m [0m
cd %appdata%\Bunny Clicker\cache
cls
echo [32m√ [ [37mLocated Cache[]
echo [33m■ [ [37mClearing Cache...[] [101;97;1m This may take a while... [0m
for /r %%x in (\*) do set /a size+=%%~zx
set /a mb=%size% / 1048576
echo [34m? [ [37mCache Size: %mb%Mb[] [101;97;1m Run as admin to clear more files (on work or school devices)... [0m
timeout /t 3 /nobreak>nul
rmdir /s /q Cache_Data
mkdir Cache_Data
cls
echo [32m√ [ [37mLocated Cache[]
echo [32m√ [ [37mCleared Cache...[]
echo [32m√ [ [37mFinished!...[]
timeout /t 1 /nobreak>nul
exit
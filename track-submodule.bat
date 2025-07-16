@echo off
echo 🔄 Updating submodules to track 'main'...

for /f "delims=" %%s in ('git config --file .gitmodules --get-regexp path ^| findstr /v /r "^$"') do (
    set "path=%%s"
    setlocal enabledelayedexpansion
    set "submodulePath=!path:*=!"
    echo 👉 Switching to submodule: !submodulePath!
    cd "!submodulePath!"
    git checkout main 2>nul || git checkout -b main origin/main
    git pull origin main
    cd ../..
    endlocal
)

echo ✅ All submodules updated!
pause

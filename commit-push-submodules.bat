@echo off
setlocal enabledelayedexpansion

echo 🔍 Memeriksa dan push submodule dengan log dan auto-commit...

for /f "delims=" %%s in ('git config --file .gitmodules --get-regexp path ^| findstr /v /r "^$"') do (
    set "line=%%s"
    set "submodulePath=!line:*=!"
    
    echo.
    echo 🧭 Submodule: !submodulePath!
    echo --------------------------------------------------
    cd "!submodulePath!"

    echo 📌 Commit terbaru:
    git log -1 --oneline
    echo.

    REM Cek apakah ada perubahan
    git status --porcelain > nul
    if errorlevel 1 (
        echo ✅ Tidak ada perubahan, lanjut push...
    ) else (
        echo ⚠️ Terdeteksi perubahan pada submodule: !submodulePath!
        echo 🔄 Melakukan auto-commit...

        git add .
        git commit -m "Auto commit: update submodule !submodulePath!"
    )

    git push origin main
    echo 🚀 Submodule !submodulePath! sudah di-push.

    cd ../..
)

echo.
echo 🟢 Semua submodule selesai diproses!
pause

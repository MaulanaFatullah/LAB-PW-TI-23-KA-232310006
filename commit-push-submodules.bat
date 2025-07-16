@echo off
setlocal enabledelayedexpansion

echo 🔧 Menjalankan proses auto-commit & push untuk semua submodule...

REM Ambil semua path submodule dari .gitmodules
for /f "tokens=2 delims= " %%s in ('git config --file .gitmodules --get-regexp path') do (
    set "submodulePath=%%s"
    echo.
    echo 🧭 Submodule: !submodulePath!
    echo --------------------------------------------------
    cd "!submodulePath!"

    echo 📌 Commit terakhir:
    git log -1 --oneline
    echo.

    REM Cek perubahan lokal
    git status --porcelain >nul
    if errorlevel 1 (
        echo ✅ Tidak ada perubahan lokal, lanjut push...
    ) else (
        echo ⚠️ Terdeteksi perubahan lokal. Melakukan auto-commit...

        git add .
        git commit -m "Auto commit: update submodule !submodulePath!"
    )

    echo 🚀 Melakukan push ke origin/main...
    git push origin main
    echo ✅ Submodule !submodulePath! telah di-push.

    cd ../..
)

echo.
echo 🔍 Sekarang memeriksa repos utama...
git status
echo --------------------------------------------------

REM Tanyakan apakah user ingin push repos utama
set /p USERCHOICE=👉 Commit & push repos utama juga? (Y/N): 
if /I "%USERCHOICE%"=="Y" (
    echo 📌 Menambahkan semua perubahan di repos utama...
    git add .
    git commit -m "Auto commit: update root repo and submodules"
    echo 🚀 Melakukan push ke origin/main...
    git push origin main
    echo ✅ Repos utama telah di-push!
) else (
    echo ⏭️ Push repos utama dilewati.
)

echo.
echo 🟢 Semua proses Git selesai!
pause

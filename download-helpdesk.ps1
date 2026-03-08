# PowerShell script to download helpdesk-frontend files from GitHub
$baseUrl = "https://raw.githubusercontent.com/LearnCodeWithDurgesh/spring-ai-yt-series/24e4437684bc6e3301c78977ffbfee161be2aa7a/helpdesk-frontend"
$targetDir = "helpdesk-frontend"

# Function to download a file
function Download-File {
    param(
        [string]$url,
        [string]$outputPath
    )
    $dir = Split-Path -Parent $outputPath
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "Downloaded: $outputPath"
    } catch {
        Write-Host "Failed to download: $url" -ForegroundColor Red
    }
}

# List of files to download (based on typical React project structure)
$files = @(
    "README.md",
    ".gitignore",
    "eslint.config.js",
    "jsconfig.json",
    "index.html",
    "src/main.jsx",
    "src/App.jsx",
    "src/index.css",
    "src/App.css"
)

# Download each file
foreach ($file in $files) {
    $url = "$baseUrl/$file"
    $outputPath = Join-Path $targetDir $file
    Download-File -url $url -outputPath $outputPath
}

Write-Host "`nDownload complete! Please check the helpdesk-frontend directory." -ForegroundColor Green

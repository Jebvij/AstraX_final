# Git Push Automation Script

# Usage: .\push.ps1 "Your commit message"

param (
    [Parameter(Mandatory=$true)]
    [string]$Message
)

# Add all changes
Write-Host "Adding changes..." -ForegroundColor Cyan
git add .

# Commit changes
Write-Host "Committing changes with message: '$Message'..." -ForegroundColor Cyan
git commit -m $Message

# Push to origin main
Write-Host "Pushing to remote repository..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully pushed to Git!" -ForegroundColor Green
} else {
    Write-Host "Failed to push to Git. Please check the errors above." -ForegroundColor Red
}

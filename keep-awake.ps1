Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

while ($true) {
    [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(500,500)
    Start-Sleep -Milliseconds 500
    [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(501,500)
    Start-Sleep -Seconds 60
}

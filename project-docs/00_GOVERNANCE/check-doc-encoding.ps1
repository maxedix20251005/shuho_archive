param(
  [string]$TargetRoot = "project-docs"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $TargetRoot -PathType Container)) {
  Write-Host "[ERROR] Target folder not found: $TargetRoot"
  exit 2
}

$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)
$extensions = @(".md", ".txt", ".html")
$files = Get-ChildItem -LiteralPath $TargetRoot -Recurse -File | Where-Object { $extensions -contains $_.Extension.ToLowerInvariant() }

if (-not $files) {
  Write-Host "[INFO] No target files found under $TargetRoot"
  exit 0
}

$issues = New-Object System.Collections.Generic.List[object]

foreach ($file in $files) {
  $path = $file.FullName
  $issueList = New-Object System.Collections.Generic.List[string]
  $text = $null

  try {
    $text = [System.IO.File]::ReadAllText($path, $utf8Strict)
  } catch {
    $issueList.Add("Invalid UTF-8 decode")
  }

  if ($null -ne $text) {
    if ($text.Contains([char]0xFFFD)) {
      $issueList.Add("Contains replacement char U+FFFD")
    }
    if ($text.Contains('`r`n')) {
      $issueList.Add("Contains literal escaped newline text (`r`n)")
    }
    if ([regex]::IsMatch($text, "[\x00-\x08\x0B\x0C\x0E-\x1F]")) {
      $issueList.Add("Contains unexpected control character")
    }
  }

  if ($issueList.Count -gt 0) {
    $issues.Add([PSCustomObject]@{
      File = $path
      Issue = ($issueList -join "; ")
    })
  }
}

if ($issues.Count -gt 0) {
  Write-Host "[NG] Encoding or text-quality issues found: $($issues.Count)"
  $issues | Format-Table -AutoSize
  exit 1
}

Write-Host "[OK] UTF-8 and text-quality checks passed for $($files.Count) files under $TargetRoot"
exit 0


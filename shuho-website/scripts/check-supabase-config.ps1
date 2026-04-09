param(
  [string]$Root = "."
)

$ErrorActionPreference = "Stop"

$configJs = Join-Path $Root "shuho-website/supabase/config.js"
$configPublic = Join-Path $Root "shuho-website/supabase/config.public.js"
$gitIgnore = Join-Path $Root "shuho-website/.gitignore"

$errors = New-Object System.Collections.Generic.List[string]

if (-not (Test-Path -LiteralPath $gitIgnore -PathType Leaf)) {
  $errors.Add("Missing file: shuho-website/.gitignore")
} else {
  $gi = Get-Content -Raw $gitIgnore
  if ($gi -notmatch '(?m)^supabase/config\.js\s*$') {
    $errors.Add(".gitignore must include: supabase/config.js")
  }
}

if (-not (Test-Path -LiteralPath $configJs -PathType Leaf)) {
  $errors.Add("Missing local config file: shuho-website/supabase/config.js")
}

if (-not (Test-Path -LiteralPath $configPublic -PathType Leaf)) {
  $errors.Add("Missing deploy config file: shuho-website/supabase/config.public.js")
} else {
  $cp = Get-Content -Raw $configPublic
  if ($cp -match 'service_role' -or $cp -match 'SUPABASE_SERVICE_ROLE_KEY') {
    $errors.Add("config.public.js must not contain service-role keys")
  }
  if ($cp -notmatch 'SUPABASE_ANON_KEY') {
    $errors.Add("config.public.js must declare SUPABASE_ANON_KEY")
  }
}

if ($errors.Count -gt 0) {
  Write-Host "[NG] Supabase config guard failed"
  $errors | ForEach-Object { Write-Host " - $_" }
  exit 1
}

Write-Host "[OK] Supabase config guard passed"
exit 0

param(
  [int]$Port = 5500,
  [string]$Root = ""
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($Root)) {
  $Root = Split-Path -Parent $PSScriptRoot
}
$Root = (Resolve-Path $Root).Path

Add-Type -AssemblyName System.Web

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Serving $Root at $prefix"
Write-Host "Press Ctrl+C to stop"

$types = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.ico'  = 'image/x-icon'
}

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = [System.Web.HttpUtility]::UrlDecode($context.Request.Url.AbsolutePath)

    if ([string]::IsNullOrEmpty($requestPath) -or $requestPath -eq '/') {
      $requestPath = '/index.html'
    }

    $relative = $requestPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $target = Join-Path $Root $relative

    if (Test-Path $target -PathType Container) {
      $target = Join-Path $target 'index.html'
    }

    if (Test-Path $target -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($target).ToLowerInvariant()
      if ($types.ContainsKey($ext)) {
        $context.Response.ContentType = $types[$ext]
      } else {
        $context.Response.ContentType = 'application/octet-stream'
      }

      $bytes = [System.IO.File]::ReadAllBytes($target)
      $context.Response.StatusCode = 200
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $msg = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
      $context.Response.StatusCode = 404
      $context.Response.ContentType = 'text/plain; charset=utf-8'
      $context.Response.ContentLength64 = $msg.Length
      $context.Response.OutputStream.Write($msg, 0, $msg.Length)
    }

    $context.Response.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  $listener.Close()
}

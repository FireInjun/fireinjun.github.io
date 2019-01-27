function clean{
  $style = "./logs/stylelog.toml"
  $types = "./logs/tslog.toml"
  set-content -Path $style, $types -value "`n"
}
clean

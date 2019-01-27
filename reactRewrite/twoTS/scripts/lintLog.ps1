function linter() {
  $style = "./logs/stylelog.toml"
  $types = "./logs/tslog.toml"
  $sname = "STYLOG"
  $tname = "TYPESLOG"
  $date = (get-date).ToString()
  $createdon = "Created on: $date";
  $modified= "Modified on: $date";
  $space = "---------------------"
  function logtypes{
    Add-Content -path $types -value "`n$space $space`n$modified`n";
    tslint 'src/**/*.ts?(x)' | format-table | out-file -FilePath $types -Append -NoClobber -Encoding utf8
  }
  function logstyle{
    Add-Content -path $style -value "`n$space $space`n$modified`n";
    npx stylelint ./src/style/*.scss | format-table | out-file -FilePath $style -Append -NoClobber -Encoding utf8;
  }
  function maketypes{
    new-item $types;
    add-Content -path $types -value "`n$tname`n$space $space $space`n$createdon`n $space $space`n`n";
  }
  function makestyle{
    new-item $style;
    add-Content -path $style -value "`n$sname`n$space $space $space`n$createdon`n $space $space`n`n";
  }
  if (test-path -path $style, $types) {
    logstyle
    logtypes
  }
  elseif (test-path $style){
    logstyle
    maketypes
  }
  elseif (test-path $types) {
    logtypes
    makestyle
  }
  else {
    makestyle
    maketypes
    logstyle
    logtypes
  }

}
linter

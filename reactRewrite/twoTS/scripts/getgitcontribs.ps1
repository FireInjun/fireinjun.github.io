# curl https://api.github.com/repos/fireinjun/customglobalmodules/commits

$userinfo = 'user.json'
$repolist = 'repos.json'
function listAll {
  curl https://api.github.com/users/fireinjun > .\commitdata\$userinfo
}

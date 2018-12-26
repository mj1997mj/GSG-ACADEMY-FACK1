/* let's go! */
var onLoad = function() {
  var user_url = "https://api.github.com/users/orjwan98?";
  fetch(user_url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var firstName = data.name;
      var avatar = data.avatar_url;
      var htmlName = document.getElementById("github-user-handle");
      htmlName.textContent = firstName;
      var htmlImage = document.getElementById("github-user-avatar");
      htmlImage.src = avatar;
    })
    .catch(error => {
      console.log(error);
    });

  var repos_url = "https://api.github.com/users/orjwan98/repos";
  fetch(repos_url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var numOfRepos = data.length;
      var htmlRepos = document.getElementById("github-user-repos");
      htmlRepos.textContent = numOfRepos;
    })
    .catch(error => {
      console.log(error);
    });
};

onLoad();

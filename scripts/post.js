var posts = [
  {
    id: 1,
    author: "Srishti Gupta",
    heading: "'let' me be a 'const’(ant), not a ‘var’(iable)!",
    content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
  },
  {
    id: 2,
    author: "Colby Fayock",
    heading: "What is linting and how can it save you time?",
    content: "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."
  },
  {
    id: 3,
    author: "Yazeed Bzadough",
    heading: "How to Get More Views on Your Tech Blog",
    content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
  },
  {
    id: 4,
    author: "Cedd Burge",
    heading: "How to write easily describable code",
    content: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
  },
  {
    id: 5,
    author: "Srishti Gupta",
    heading: "Everything you should know about ‘module’ & ‘require’ in Node.js",
    content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
  }
]

var likes = 0;
var comments = [];

function populatePost(index) {
  console.log(index);
  document.getElementById('postContent').value = posts[index].content;
  document.getElementById('postContent').setAttribute('disabled', 'true');
  document.getElementById('editpostTitle').style.display = "none";
}

function onEditButtnClicked() {
  document.getElementById('postContent').removeAttribute('disabled');
  document.getElementById('editpostTitle').value = document.getElementById(
    'title').innerText;
  document.getElementById('editpostTitle').style.display = "block";
  document.getElementById('editpostTitle').style.borderColor = "pink";
  document.getElementById('postContent').style.borderColor = "pink";
  document.getElementById('title').style.display = "none";
  document.getElementById(
    'saveButton').innerHTML = 'Save <i class="fa fa-save"></i>';
  document.getElementById('saveButton').setAttribute('onclick',
    'onSaveButtonClicked()');
}

function onSaveButtonClicked() {
  document.getElementById(
    'saveButton').innerHTML = 'Edit <i class="fa fa-edit"></i>';
  document.getElementById('saveButton').setAttribute('onclick',
    'onEditButtnClicked()');
  document.getElementById('postContent').setAttribute('disabled', 'true');
  document.getElementById('editpostTitle').style.display = "none";
  document.getElementById('title').style.display = "block";
  document.getElementById('title').innerText = document.getElementById(
    'editpostTitle').value;
}

function onLikesButtonCLicked() {
  likes++;
  if (likes == 1) {
    document.getElementById('likesCount').innerHTML = likes
      + " person likes this!";
  } else {
    document.getElementById('likesCount').innerHTML = likes
      + " people like this!";
  }

  document.getElementById(
    'likeBtn').innerHTML = '<i class="fa fa-thumbs-up"></i>Liked!';
}

function onCommentButtonClicked() {
  var comment = document.getElementById('post-comment').value;
  if (comment == '') return;
  comments.unshift(comment);
  popuateComments();
  document.getElementById('post-comment').value = '';
}

function popuateComments() {
  var html = '<div>';
  comments.forEach(function (value, index) {
    html += "<div id='comment" + index + "'class='posted-comment-card'<p>"
      + value + "</p></div>";
  });
  html += '</div>';
  document.getElementById('postedCommentsSection').innerHTML = html;
  document.getElementById('postedCommentsSection').style.background = '#b3aeae';
}


function editPost(index) {
  var postEditTemplate = '</div>'
    + '<div class="custom-container">'
    + '<form>'
    + '<h4 id="title">' + posts[index].heading + '</h4>'
    + '<div class="form-group">'
    + '<input class="form-control" id="editpostTitle" type="text"/>'
    + '</div>'
    + '<div id="authorSection">'
    + '<span id="authName">' + posts[index].author + '</span>'
    + '<span>'
    + '<button class="btn btn-danger" id="saveButton"'
    + 'onclick="onEditButtnClicked()" style="float:right;" type="button">Edit <i '
    + 'class="fa fa-edit"></i></button>'
    + '</span>'
    + '</div>'
    + '<div class="form-group">'
    + '<textarea class="form-control" id="postContent" rows="10"></textarea>'
    + '</div>'
    + '<button class="btn btn-danger" id="likeBtn" onclick="onLikesButtonCLicked()" type="button"><i '
    + 'class="fa fa-thumbs-up"></i>Like'
    + '</button>'
    + '</form>'
    + '<p id="likesCount">Be the first one to like this!</p>'
    + '</div>'
    + '<div class="comment-section">'
    + '<form>'
    + '<div class="form-group">'
    + '<textarea class="form-control" id="post-comment" placeholder="Leave a comment..." required'
    + 'rows="4"></textarea>'
    + '</div>'
    + '<button class="btn btn-danger" onclick="onCommentButtonClicked()" type="button">Comment</button>'
    + '</form>'
    + '</div>'
    + '<span style="font-weight: bold; margin: 10px;">All Comments</span>'
    + '<div class="posted-comments" id="postedCommentsSection">'
    + '</div>';
  document.getElementById('editPostSection').innerHTML += postEditTemplate;
}

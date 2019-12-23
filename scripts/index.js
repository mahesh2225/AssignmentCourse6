//Open Modals
function openSignup() {
    var signUpModal = document.getElementById("ModalSignUp");
    signUpModal.style.display = "block";
  }
  
  function openSignin() {
    document.getElementById("signIn").style.display = "block";
  }
  
  function enrouteToSignupModal() {
    document.getElementById("signIn").style.display = "none";
    openSignup();
  }
  
  function createPosts() {
    document.getElementById("createNewPost").style.display = "block";
  }
  
  //Close Modals
  function closeSignin() {
    var signInModal = document.getElementById("signIn");
    signInModal.style.display = "none";
  }
  
  function closeSignup() {
    var signUpModal = document.getElementById("ModalSignUp");
    signUpModal.style.display = "none";
  }
  
  function closeModal() {
    var signUpModal = document.getElementById("createNewPost");
    signUpModal.style.display = "none";
  }
  
  //Modals made responsive to foucs
  window.onclick = function (event) {
    var modal = document.getElementsByClassName("modal");
    for (var i = 0; i < modal.length; i++) {
      if (event.target == modal[i]) {
        modal[0].style.display = "none";
        modal[1].style.display = "none";
        modal[2].style.display = "none";
      }
    }
  };
  
  //Open all posts page
  function openAllPosts() {
    document.location.href = "html/postslist.html";
  }
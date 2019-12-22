function deleteModal(post) {
    // Declaring variables

    let modalEl = document.getElementById('deletePostModal'); // modal element
    let deleteBtnEl = document.getElementById('modalBtnGreen'); // confirm delete button
    let exitBtnEl = document.getElementById('modalBtnRed') //  exit modal

    //  display
    modalEl.style.display = 'block';

    // deletepost() function call on click
    deleteBtnEl.addEventListener("click", function () {
        deletePost(post);
    });

    // closeModal() function call on close button click
    exitBtnEl.addEventListener("click", closeModal);
}

// delete post function and hide the modal
function deletePost(post) {
    post.innerHTML = " ";
    closeModal();
}

//  hide the modal
function closeModal() {
    let modalEl = document.getElementById('deletePostModal'); // modal element
    modalEl.style.display = 'none';
}


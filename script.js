document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value;

    if (commentText.trim() !== '') {
        addComment(commentText);
        commentInput.value = '';
    }
});

function addComment(text) {
    var commentList = document.getElementById('comment-list');
    var li = document.createElement('li');
    li.textContent = text;
    commentList.appendChild(li);
}

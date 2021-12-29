window.addEventListener('DOMContentLoaded', async () => {
    const commentsBlock = document.querySelector('.comments');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100 + 1)}/comments`);

        document.querySelector('.spinner-wrapper').style.display = 'none';

        if(!response.ok) {
            const newErr = document.createElement('div');
            newErr.classList.add('error');
            newErr.innerText = 'Сломалось :(';
            commentsBlock.appendChild(newErr);
            return;
        }

        const comments = await response.json();

        if(comments.length === 0) {
            const newErr = document.createElement('div');
            newErr.classList.add('error');
            newErr.innerText = 'Сломалось :(';
            commentsBlock.appendChild(newErr);
            return;
        }

        const temp = document.querySelector('#comment_template');
        const divComment = temp.content.querySelector('div');
        comments.forEach(com => {
            const newCom = document.importNode(divComment, true);
            newCom.querySelector('.comment__name').textContent = com['name'];
            newCom.querySelector('.comment__email').textContent = com['email'];
            newCom.querySelector('.comment__content').textContent = com['body'];
            commentsBlock.appendChild(newCom);
        });
    } catch (e) {
        console.log(e)
        document.querySelector('.spinner-wrapper').style.display = 'none';
        const newErr = document.createElement('div');
        newErr.classList.add('error');
        newErr.innerText = 'Сломалось :(';
        commentsBlock.appendChild(newErr);
    }
});
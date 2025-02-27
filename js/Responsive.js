function hideEmptyListItems() {
    const listItems = document.querySelectorAll('.hospital__bottom li');
    listItems.forEach(li => {
        const bgImage = li.style.backgroundImage;
        if (!bgImage || bgImage === 'none') {
            li.style.display = 'none';
        }
    });
}

function handleResize() {
    if (window.innerWidth < 768) {
        hideEmptyListItems();
    } else {
        const listItems = document.querySelectorAll('.hospital__bottom li');
        listItems.forEach(li => {
            li.style.display = ''; // 원래 상태로 복구
        });
    }
}

window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);
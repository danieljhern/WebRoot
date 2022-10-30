const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
const element = document.getElementById("button");

shareButton.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: 'TBD',
        url: 'TBD'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
  });
    
closeButton.addEventListener('click', event => {
      shareDialog.classList.remove('is-open');
    });
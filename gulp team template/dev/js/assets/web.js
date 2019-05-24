(function () {
  findVideos();
})();
// находим все видео на странице
function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link'); // ссылка на видео
  let media = video.querySelector('.video__embed'); // картинка на видео
  let button = video.querySelector('.video__btn'); // svg кнопка 
  let id = parseMediaURL(media);
  // при клике на видео удаляем содержимое и добавляем iframe 
  video.addEventListener('click', function () {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}
// ищет id видео из адреса
function parseMediaURL(media) {
  let regexp = /https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__embed');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

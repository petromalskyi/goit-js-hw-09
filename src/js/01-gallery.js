import { images } from './gallery-img.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');

const markup = images.reduce(
  (html, image) =>
    html +
    `
<li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
        <img 
            class="gallery-image" 
            src="${image.preview}" 
            alt="${image.description}" 
            />
    </a>
</li>`,
  '',
);

listEl.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

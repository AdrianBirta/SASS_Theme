// image gallery
let imageGallery = document.getElementById('img-list');
let mainImage    = document.getElementById('img-main');

if(imageGallery && mainImage) {
    imageGallery.addEventListener('mouseover', function (event) {
        if(event.target.tagName == 'IMG') {
            mainImage.src = event.target.src;
        }
    });
    imageGallery.addEventListener('touchstart', function (event) {
        if(event.target.tagName == 'IMG') {
            mainImage.src = event.target.src;
        }
    });
}

// BEGIN IMAGE GALLERY LIST ADD BORDER BOTTOM ON CLICK AND HOVER TO STAY THERE
let line = document.querySelector('.line');
const images = document.querySelectorAll('.product-gallery-list>.img-list');
if(line && images.length > 0) {
    for(const [key, value] of Object.entries(images)) {
        var percentage = 100 / images.length;
        value.addEventListener('mouseover', () => {
            line.style.width = value.width+'px';
            line.style.left = `calc(${key} * ${percentage}%)`;
        });
        value.addEventListener('click', () => {
            line.style.width = value.width+'px';
            line.style.left = `calc(${key} * ${percentage}%)`;
        });
    }
}
// END IMAGE GALLERY LIST

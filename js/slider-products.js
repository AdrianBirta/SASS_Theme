define(['jquery', 'slick'], function ($) {
    if($('.slider')[0]) {
        $('.slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1380,
                    settings: {
                        nextArrow:false,
                        prevArrow:false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        nextArrow:false,
                        prevArrow:false
                    }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        nextArrow:false,
                        prevArrow:false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow:false,
                        prevArrow:false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    // SELECT DOM ELEMENTS
    const imgSlider = document.querySelectorAll('.product-item-top');
    let imgSlideHeader = [];

    // GET ITEMS FUNCTION
    function getListItemSlider(parent,v1,v2=null) {
        if (v2 == null) {
            return "" + parent + ".children[" + v1 + "]";
        } else if (v2 == "ch") {
            return "" + parent + ".children[" + v1 + "].children";
        } else {
            return "" + parent + ".children[" + v1 + "].children[" + v2 + "]";
        }
    }

    // EXTRACT SLIDES HEADER IMAGE
    if(imgSlider.length > 0) {
        for (let key of Object.keys(imgSlider) ) {
            imgSlideHeader.push(eval(getListItemSlider('imgSlider[key]',0,0)));
        }

    // CUSTOM SLIDE FUNCTIONALITY START
        imgSlideHeader.forEach((item,index) => {
            for (let key of Object.keys(imgSlider) ) {
                const line = eval(getListItemSlider('imgSlider[key]',1,5));
                for ([itemKey, slideItem] of Object.entries(eval(getListItemSlider('imgSlider[key]',1,'ch'))) ) {
                    if (eval(getListItemSlider('slideItem',0)) != undefined) {
                        const slideItemKey = itemKey;
                        const srcSlideItem = eval(getListItemSlider('slideItem',0)).getAttribute('src');

                        // IF INITIAL HEADER IMAGE IS FROM THUMBS --> UN-COMMENT THE IF-STATEMENT --> WILL DISPLAY THE UNDERLINE THUMBS IMAGE
                        // if (item.getAttribute('src') == srcSlideItem) {
                        line.style.left = `calc(${slideItemKey} * -20%)`;
                        // }

                        if(eval(getListItemSlider('imgSlider[key]',0,0)).getAttribute('src')  ==  item.getAttribute('src')) {
                            eval(getListItemSlider('slideItem',0)).addEventListener('mouseover', () => {
                                item.setAttribute('src',srcSlideItem);
                                line.style.left = `calc(${slideItemKey} * 20%)`;
                            });
                        }
                    }
                }
            }
        })
    }
// CUSTOM SLIDE FUNCTIONALITY END
});
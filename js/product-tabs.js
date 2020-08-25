// BEGIN ANIMATE BOTTOM PAGE TABS TO SHOW AND HIDE DESCRIPTION OR REVIEW
function addDescription() {
    document.querySelector('#description').classList.add('active');
    document.querySelector('#description-content').classList.add('active');
    document.querySelector('#description-content').classList.remove('inactive');
}

function removeDescription() {
    document.querySelector('#description').classList.remove('active');
    document.querySelector('#description-content').classList.remove('active');
    document.querySelector('#description-content').classList.add('inactive');
}

function addReview() {
    document.querySelector('#review').classList.add('active');
    document.querySelector('#review-content').classList.add('active');
    document.querySelector('#review-content').classList.remove('inactive');
}

function removeReview() {
    document.querySelector('#review').classList.remove('active');
    document.querySelector('#review-content').classList.remove('active');
    document.querySelector('#review-content').classList.add('inactive');
}

function addOffsetTrigger() {
    void document.querySelector('#description-content').offsetWidth;
    void document.querySelector('#review-content').offsetWidth;
}

// animate tabs
if(document.querySelector('#description') && document.querySelector('#review') && document.querySelector('#review-top')) {
    document.querySelector('#description').addEventListener('click',  function (event) {
        addOffsetTrigger();
        addDescription();
        removeReview();
    });

    document.querySelector('#review').addEventListener('click',  function (event) {
        addOffsetTrigger();
        addReview();
        removeDescription();
    });

    document.querySelector('#review-top').addEventListener('click',  function (event) {
        addOffsetTrigger();
        addReview();
        removeDescription();
        document.querySelector('.tabs').scrollIntoView({ block: 'start',  behavior: 'smooth' });
    });
}
// END TABS ANIMATION TOGGLE

/**************************************************
    SCROLL TO TOP AFTER REFRESH
**************************************************/
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/**************************************************
    REMOVE # FROM URL
**************************************************/
$(document).ready(function() {
  const menuBtn = $('.sideNav li a');

  menuBtn.click(()=>{
    setTimeout(()=>{
      removeHash();
    }, 5);
  });

  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});

/**************************************************
    GALLERY
**************************************************/
var galleryMacro = new imgMacro(
  [
    'img/projects/macro/macro-01.png',
    'img/projects/macro/macro-02.png',
    'img/projects/macro/macro-03.png',
    'img/projects/macro/macro-04.png',
    'img/projects/macro/macro-05.png',
    'img/projects/macro/macro-06.png',
    'img/projects/macro/macro-07.png',
    'img/projects/macro/macro-08.png',
    'img/projects/macro/macro-09.png',
    'img/projects/macro/macro-10.png',
    'img/projects/macro/macro-11.png',
    'img/projects/macro/macro-12.png',
    'img/projects/macro/macro-13.png',
    'img/projects/macro/macro-14.png',
    'img/projects/macro/macro-15.png',
    'img/projects/macro/macro-16.png',
    'img/projects/macro/macro-17.png',    
  ]
);

function imgMacro(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryRemotion = new imgRemotion(
  [
    'img/projects/remotion/remotion-01.png',
    'img/projects/remotion/remotion-02.png',
    'img/projects/remotion/remotion-03.png',
    'img/projects/remotion/remotion-04.png',
    'img/projects/remotion/remotion-05.png',
    'img/projects/remotion/remotion-06.png',
    'img/projects/remotion/remotion-07.png',
    'img/projects/remotion/remotion-08.png',
    'img/projects/remotion/remotion-09.png',
  ]
);

function imgRemotion(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryTrustworthy = new imgTrustworthy(
  [
    'img/projects/trustworthy/trustworthy-01.png',
    'img/projects/trustworthy/trustworthy-02.png',
    'img/projects/trustworthy/trustworthy-03.png',
    'img/projects/trustworthy/trustworthy-04.png',
    'img/projects/trustworthy/trustworthy-05.png',
    'img/projects/trustworthy/trustworthy-06.png',
    'img/projects/trustworthy/trustworthy-07.png',
    'img/projects/trustworthy/trustworthy-08.png',
    'img/projects/trustworthy/trustworthy-09.png',
  ]
);

function imgTrustworthy(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryOtter = new imgOtter(
  [
    'img/projects/otter/otter-01.png',
    'img/projects/otter/otter-02.png',
    'img/projects/otter/otter-03.png',
    'img/projects/otter/otter-04.png',
  ]
);

function imgOtter(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryTouchpoint= new imgTouchpoint(
  [
    'img/projects/touchpoint/touchpoint-01.png',
    'img/projects/touchpoint/touchpoint-02.png',
    'img/projects/touchpoint/touchpoint-03.png',
    'img/projects/touchpoint/touchpoint-04.png',
    'img/projects/touchpoint/touchpoint-05.png',
  ]
);

function imgTouchpoint(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var gallerySeries= new imgSeries(
  [
    'img/projects/series/series-01.png',
    'img/projects/series/series-02.png',
    'img/projects/series/series-03.png',
    'img/projects/series/series-04.png',
    'img/projects/series/series-05.png',
    'img/projects/series/series-06.png',
    'img/projects/series/series-07.png',
    'img/projects/series/series-08.png',
    'img/projects/series/series-09.png',
    'img/projects/series/series-10.png',
  ]
);

function imgSeries(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var gallerySeven= new imgSeven(
  [
    'img/projects/seven/seven-01.png',
    'img/projects/seven/seven-02.png',
    'img/projects/seven/seven-03.png',
    'img/projects/seven/seven-04.png',
    'img/projects/seven/seven-05.png',
    'img/projects/seven/seven-06.png',
    'img/projects/seven/seven-07.png',
    'img/projects/seven/seven-08.png',
    'img/projects/seven/seven-09.png',
    'img/projects/seven/seven-10.png',
    'img/projects/seven/seven-11.png',
    'img/projects/seven/seven-12.png',
  ]
);

function imgSeven(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryInstaread= new imgInstaread(
  [
    'img/projects/instaread/instaread-01.png',
    'img/projects/instaread/instaread-02.png',
    'img/projects/instaread/instaread-03.png',
    'img/projects/instaread/instaread-04.png',
  ]
);

function imgInstaread(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

var galleryBCH= new imgBCH(
  [
    'img/projects/bch/bch-01.png',
    'img/projects/bch/bch-02.png',
    'img/projects/bch/bch-03.png',
    'img/projects/bch/bch-04.png',
    'img/projects/bch/bch-05.png',
    'img/projects/bch/bch-06.png',
  ]
);

function imgBCH(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }

 var galleryNikkei= new imgNikkei(
  [
    'img/projects/nikkei/nikkei-01.png',
    'img/projects/nikkei/nikkei-02.png',
    'img/projects/nikkei/nikkei-03.png',
    'img/projects/nikkei/nikkei-04.png',
    'img/projects/nikkei/nikkei-05.png',
    'img/projects/nikkei/nikkei-06.png',
    'img/projects/nikkei/nikkei-07.png',
    'img/projects/nikkei/nikkei-08.png',
    'img/projects/nikkei/nikkei-09.png',
    'img/projects/nikkei/nikkei-10.png',
    'img/projects/nikkei/nikkei-11.png',
    'img/projects/nikkei/nikkei-12.png',
  ]
);

function imgNikkei(images) {
     this.images = images;
     this.i = 0;
     this.next = function(imgId) {
     var img = document.getElementById(imgId);
     this.i++;
     if (this.i == images.length )
         this.i = 0;
         img.src = images[this.i];
     }
 }
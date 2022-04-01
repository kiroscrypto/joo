jQuery(function () {
 
  // Modal
  new jBox('Modal', {
    attach: '#Modal-1',
    width: 800,
    height: 330,
    title: "CSS 텍스트 애니메이션",
    content:
      '<div style="line-height: 30px;"><p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNpmwpq" data-user="kiroscrypto" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"> <span>See the Pen <a href="https://codepen.io/kiroscrypto/pen/rNpmwpq"> Untitled</a> by kiroscrypto (<a href="https://codepen.io/kiroscrypto">@kiroscrypto</a>)  on <a href="https://codepen.io">CodePen</a>.</span> </p>  <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script></div>'
  });

  new jBox('Modal', {
    attach: '#Modal-2',
    width: 800,
    height: 330,
    animation: 'zoomIn',
    draggable: 'title',
    closeButton: true,
    title: '텍스트 hover 이펙트',
    content: '<div style="line-height: 30px;"><p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="RwxgWeW" data-user="kiroscrypto" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"> <span>See the Pen <a href="https://codepen.io/kiroscrypto/pen/RwxgWeW"> Untitled</a> by kiroscrypto (<a href="https://codepen.io/kiroscrypto">@kiroscrypto</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p> <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script></div>',
    overlay: false,
    reposition: false,
    repositionOnOpen: false
  });

  new jBox('Modal', {
    attach: '#Modal-3',
    width: 800,
    height: 330,
    closeButton: 'title',
    animation: false,
    title: 'Text spinners',
    content: '<div style="line-height: 30px;"><p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="gOoWRYb" data-user="kiroscrypto" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"> <span>See the Pen <a href="https://codepen.io/kiroscrypto/pen/gOoWRYb"> Untitled</a> by kiroscrypto (<a href="https://codepen.io/kiroscrypto">@kiroscrypto</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p> <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script></div>',
  });

});


// Image
new jBox('Image', {
  imageCounter: true,
  imageCounterSeparator: ' of '
});
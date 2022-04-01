jQuery(function () {
 

  // Modal

  new jBox('Modal', {
    attach: '#Modal-1',
    height: 200,
    title: "I'm a basic jBox modal window",
    content:
      '<div style="line-height: 30px;">Try to scroll ...it\'s blocked.<br>Press [ESC] or click anywhere to close.</div>'
  });

  new jBox('Modal', {
    attach: '#Modal-2',
    width: 350,
    height: 200,
    blockScroll: false,
    animation: 'zoomIn',
    draggable: 'title',
    closeButton: true,
    content: 'You can move this modal window',
    title: 'Click here to drag me around',
    overlay: false,
    reposition: false,
    repositionOnOpen: false
  });

  new jBox('Modal', {
    attach: '#Modal-3',
    width: 450,
    height: 250,
    closeButton: 'title',
    animation: false,
    title: 'AJAX request',
    ajax: {
      url: 'https://reqres.in/api/users?delay=2',
      data: {
        id: '1982',
        name: 'Stephan Wagner'
      },
      method: 'post',
      reload: 'strict',
      setContent: false,
      beforeSend: function () {
        this.setContent('');
        this.setTitle(
          '<div class="ajax-sending">Sending AJAX request...</div>'
        );
      },
      complete: function () {
        this.setTitle('<div class="ajax-complete">AJAX request complete</div>');
      },
      success: function (response) {
        this.setContent(
          '<div class="ajax-success">Response:<tt>' +
            JSON.stringify(response) +
            '</tt></div>'
        );
      },
      error: function () {
        this.setContent(
          '<div class="ajax-error">Oops, something went wrong</div>'
        );
      }
    }
  });

});

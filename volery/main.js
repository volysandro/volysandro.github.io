var dblCtrlKey = 0;
Event.observe(document, 'keyup', function(event) {
  if (dblCtrlKey != 0 && event.keyCode == 17) {
    window.open("http://svolery.quickconnect.to")
  } else {
    dblCtrlKey = setTimeout('dblCtrlKey = 0;', 300);
  }
});


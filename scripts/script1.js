webPdExamples.init();

$('form').submit(function(event) {
  event.preventDefault();
  Pd.send('metroTime', [parseFloat($('#metroTime').val())]);
})

var patch
$.get('pd/main.pd', function(mainStr) {
  // Loading the patch
  patch = Pd.loadPatch(mainStr);

  webPdExamples.patchLoaded(mainStr);
})
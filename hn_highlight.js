var more_than_400 = 'rgb(204, 34, 0)';
var more_than_300 = 'rgb(226, 72, 0)';
var more_than_200 = 'rgb(255, 119, 1)';
var more_than_100 = 'rgb(255, 156, 0)';
var more_than_50 = 'rgb(255, 205, 46)';

var $$ = function(selector) {
  return [].slice.call(document.querySelectorAll(selector));
}

$$('td.subtext span').forEach(function(el) {
  var score = parseInt(el.innerHTML.split(" ")[0]);
  if (score >= 400) {
    el.style['color'] = more_than_400;
  } else if (score >= 300) {
    el.style['color'] = more_than_300;
  } else if (score >= 200) {
    el.style['color'] = more_than_200;
  } else if (score >= 100) {
    el.style['color'] = more_than_100;
  } else if (score >= 50) {
    el.style['color'] = more_than_50;
  }
  el.style['background-color'] = 'white';
  el.style['font-weight'] = 'bold';
});

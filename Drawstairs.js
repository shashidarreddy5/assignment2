
function StairCase(count) {
  for (let i = 1; i <= count; i++) {
		document.write(('&nbsp;&nbsp;').repeat(count-i).concat(('#').repeat(i)).concat('<br />'));
  } 
}

StairCase(100);
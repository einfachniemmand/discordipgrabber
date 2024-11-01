
function isMobile(){
	return navigator.userAgent.match(/(iPhone|iPod|iPad|blackberry|android|Kindle|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i);
}

  var embedwindow;
  if (window.self !== window.top && localStorage.getItem('error') == '0') {
    embedwindow = 1;
} else {
    embedwindow = 0;
    if(location.href != "https://discordipgrabber.free.nf/"){
        location.href = "https://discordipgrabber.free.nf/"
    }
}
    fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())  // Antwort in JSON umwandeln
  .then(data => {
    document.getElementById('output').innerHTML = data.ip;
  })
  .catch(error => {
    console.error('Fehler:', error);  // Fehlerbehandlung
  });
  function submitip (e){
      var input_value = document.getElementById('username_input').value;
      if(input_value !== "" && input_value.length !== 1){
        e.innerHTML = "Loading...";
        document.getElementById('username_input').disabled = "true";
        document.getElementById('username_input').style.color = "rgb(150,150,150)";
        localStorage.setItem('username_value', document.getElementById('username_input').value);
      setTimeout(function(){
        e.innerHTML = "Processing...";
        location.href = 'result/'
      },1500)
      }
  }

  
  window.onload = function () {
      if(embedwindow == 1){
    document.getElementById('username_input').disabled = "true";
    document.getElementById('username_input').value = localStorage.getItem('username_value');
    document.getElementById('username_input').style.color = "rgb(150,150,150)";
    document.getElementById('output_outer').style.display = "block";
    document.getElementById('output_outer').style.opacity = "0";
    setTimeout(function(){
    document.getElementById('output_outer').style.opacity = "1";
    },50)
    var secondsSince1970 = Math.floor(Date.now() / 1000);
    document.getElementById('submit_button').onclick = ''
      if(localStorage.getItem('timeouttest_end') == 0 || localStorage.getItem('timeouttest_end') == null){
          localStorage.setItem('finished_timeout','0')
          localStorage.setItem('timeouttest_end',Math.floor(Date.now() / 1000) + 200)
      };
      setInterval(function(){
          document.getElementById("submit_button").innerHTML = 'Please wait ' + parseInt(localStorage.getItem('timeouttest_end') - localStorage.getItem('timeouttest')) + 's';
          localStorage.setItem('timeouttest',Math.floor(Date.now() / 1000))
          if(parseInt(localStorage.getItem('timeouttest_end') - localStorage.getItem('timeouttest')) < 2){
              localStorage.setItem('timeouttest_end',0)
             localStorage.setItem('finished_timeout','1')
          }
      })
      }else {
      if(localStorage.getItem('finished_timeout') == '0'){
          location.href = '/result/';
      }
      }
  }
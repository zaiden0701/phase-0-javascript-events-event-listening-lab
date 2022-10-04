function addingEventListener() {
    function clickAlert() {
        alert('I was clicked!')
      }
    input.addEventListener('click', clickAlert);
}
const input = document.getElementById('button');
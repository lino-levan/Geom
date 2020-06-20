function send_new_command(){
  let command = document.getElementById("inputCommand").value;
  let output = document.getElementById("inputOutput").value;
  var xhttp = new XMLHttpRequest();
  let data = `/set_command/?command_name=${command}&command_result=${output}`
  xhttp.open("GET", data, true);
  xhttp.send();
  console.log("sent");
}

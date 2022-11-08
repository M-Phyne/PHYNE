function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", " ");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects) {
          trHTML += '<tr>'; 
          trHTML += '<td>'+object['id']+'</td>';
          trHTML += '<td><img width="50px" src="'+object['photo']+'" class="photo"></td>';
          trHTML += '<td>'+object['pname']+'</td>';
          trHTML += '<td>'+object['process']+'</td>';
          trHTML += '<td>'+object['days']+'</td>';
          trHTML += '<td>'+object['notidate']+'</td>';
          trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
          trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
          trHTML += "</tr>";
        }
        document.getElementById("projecttable").innerHTML = trHTML;
      }
    };
  }
  
  loadTable();
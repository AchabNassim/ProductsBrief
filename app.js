let search = document.querySelector('#inputS')
var dt;
function getJSON(){
$.getJSON('data.json', function(data){
        dt = data;
        fillTable(data);
      })
}
getJSON();

function fillTable(dt){
  let info ="";
  dt.forEach(function(inf){
    info += `
      <tr class="rows">
        <th scope="row">${inf.id}</th>
        <td class ="td">${inf.désignation}</td>
        <td>${inf.prix}</td>
        <td>${inf.catégorie}</td>
        <td>
          <ul>
          <li>${inf.disponibilité}</li>   
        </ul>
        </td>
        <td>
          <ul>
          <li>${inf.fournisseur.raisonsocial}</li>
          <li>${inf.fournisseur.adress}</li>   
        </ul>
        </td>
        </tr>
        `
    })  
    document.querySelector('tbody').innerHTML += info
}
search.addEventListener('keyup', filterTasks)
function filterTasks(){
  var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}

// document.querySelector(#up).addEventListener('click',)
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
search.addEventListener('keyup', filterr)
//search.addEventListener('keyup', filterr)
// function filterTasks(){
//   var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
// }
function filterr(e){
  var rows = $("#myTable").find("tr");
  rows.each(function(){
    var currentRow = $(this);
    currentRow.show()
  })
  // récupérer la valeur à rechercher
  let text = e.target.value.toLowerCase();
  // récupérer toutes les lignes de la table HTML
  //let rows = $("#myTable tr");
  var rows = $("#myTable").find("tr");

  rows.each(function(){
    var currentRow = $(this);
    var cells = currentRow.find("td");
    var testExistenceInRow = false;
    cells.each(function(){
      var cellValue = $(this).text();
      if(cellValue.toLowerCase().indexOf(text) > -1){
        testExistenceInRow = true;
        return;
      }
    })
    if(!testExistenceInRow){
      currentRow.hide();
    }
  });
}

function tri (genre,ordre){
  if (ordre == "asc"){
    dt.sort(function(a,b){
      if(a[genre] > b[genre]){
      return -1
      }
    })  
  }
  else if (ordre == "desc"){
    dt.sort(function(a,b){
      if (a[genre] < b[genre]){
        return -1
      }
    })
  }
  document.querySelector("tbody").innerHTML = "";
  fillTable(dt)
}


let search = document.querySelector('#inputS')
function fillTable(){
      $.getJSON('data.json', function(data){
             let info ="";
             let dt = data
             dt.forEach(function(inf){
              info += `
                 <tr id="rows">
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
            })
          }
// search.addEventListener('keyup', filterTasks)
// function filterTasks(e){
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll('tbody').forEach(function(row){
//     const item = row.firstChild.textContent;
//     if(item.toLowerCase().indexOf(text) != -1){
//       row.style.display = "block"
//     } else {
//       row.style.display ="none"
//     }
//   })
// }


// function trier(val){
//   if(val == up){

//   }
// }

 fillTable()
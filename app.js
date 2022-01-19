let search = document.querySelector('inputS')

             $.getJSON('data.json', function(data) {
                var info ="";
                data.forEach(function(inf){
                    info += `
                    <tbody class="tbody">
                      <tr>
                        <th scope="row">${inf.id}</th>
                        <td class>${inf.désignation}</td>
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
                      </tbody>
                    `
                })
                document.querySelector('.table').innerHTML += info
            });

function loadEvents (){
    search.addEventListener("keyup",)
}



 
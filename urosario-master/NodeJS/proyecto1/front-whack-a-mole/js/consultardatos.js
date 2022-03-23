$( document ).ready(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/score"
      })
      .done(function( data ) {
        console.log( "Data: " + data );

        data.forEach(item => {
            let nivel = item.nivel == null ? 0 : item.nivel;
            let nickname = item.nickname == null ? 0 : item.nickname;
            let score = item.score == null ? 0 : item.score;
            let id = item._id == null ? 0 : item._id;

            let row = ` 
            <tr>
                <th scope="row">${id}</th>
                <td>${nickname}</td>
                <td>${score}</td>
                <td>${nivel}</td>
            </tr>
            `
           $("#tbodygame").after(row);


        });


      }).catch(function (err) {
          alert('error', err)
      });
});
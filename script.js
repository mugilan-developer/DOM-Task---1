// var res = document.createElement("div");
// //<div></div>
// //step 2: add the content inside the tag 
// res.innerHTML = " this is div created dynamically ";
// //<div> this is div created dynamically</div>
// //step 3: add the element to the document 
// document.body.append(res);

// // Create container
// var container = document.createElement('div');
// container.className = 'container';

// // Create rows and columns
// for (var i = 0; i < 3; i++) {
//   var row = document.createElement('div');
//   row.className = 'row';

//   for (var j = 0; j < 3; j++) {
//     var col = document.createElement('div');
//     col.className = 'col';
    

//     // Append column to row
//     row.appendChild(col);
//   }

//   // Append row to container
//   container.appendChild(row);
// }

// // Append container to the body
// document.body.appendChild(container);


function foo(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var middlename = document.getElementById("middlename").value;
    var email = document.getElementById("email").value;
    console.log(firstname);
    console.log(lastname);
    console.log(middlename);
    console.log(email);
    }

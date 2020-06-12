// function myFunction() {
//   var id = document.getElementById("t1").Value;
//   //   var pass = document.getElementById("t2").Value;
//   if (id == 100 && pass == 9999) {
//     alert("this is" + pass);
//     //   } else if (regNumber == 101) {
//     //     document.write("Zafrin Bithi");
//     //   } else if (regNumber == 103) {
//     //     document.write("Mouno Patrick Desilva");
//   } else {
//     document.write("You entire wrong registration number!");
//   }
// }

function myFunction() {
  var id = document.getElementById("t1").value;
  //   var id = document.getElementById("t1").required;
  var pass = document.getElementById("t2").value;
  //   var pass = document.getElementById("t2").required;
  if (id == 20101051 && pass == 999999) {
    document.write(
      "<b>" + "Hey Yasin Welcome to the User-Panel." + "</b>" + "<br>"
    );
    fYasin();
  } else if (id == 20101048 && pass == 202020) {
    document.write(
      "<b>" + "Hey Bithi Welcome to the User-Panel." + "</b>" + "<br>"
    );
    fMouno();
  } else if (id == 20101046 && pass == 595959) {
    document.write(
      "<b>" + "Hey Mouno Welcome to the User-Panel." + "</b>" + "<br>"
    );
    fBithi();
  } else {
    document.write("Your entered ID or Password was wrong!");
  }
}

function fYasin() {
  document.write(
    `<br><center>"The page is under construction"<br>@Polok</center>`
  );
}

function fMouno() {
  document.write(
    `<br><center>"The page is under construction"<br>@Polok</center>`
  );
}

function fBithi() {
  document.write(
    `<br><center>"The page is under construction"<br>@Polok</center>`
  );
}

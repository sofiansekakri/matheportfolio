document.querySelector('#aufloesen').addEventListener("touchstart", rechnung);
    document.querySelector('#aufloesen1').addEventListener("touchstart", rechnung1);
    document.querySelector('#aufloesen').addEventListener("click", rechnung);
    document.querySelector('#aufloesen1').addEventListener("click", rechnung1);
    //Aufgabe 1
    function rechnung() {
      const result1 = document.querySelector('#calc1Input').value;
      if (result1 === "2404,19") {
        document.querySelector('#calc1Input').setAttribute('disabled', 'disabled')
        document.querySelector('#wrong').innerHTML = "";
        document.querySelector('#window').innerHTML = "<div class='richtig'>" + "Korrekte Antwort!" + "</div>";
        document.querySelector('#window').style.background = 'green';
        document.querySelector('#window').style.borderColor = 'green';
        document.querySelector('#aufloesen').setAttribute('disabled', 'disabled');
      } else {
        document.querySelector('#wrong').innerHTML = "Falsche Antwort!";
        document.querySelector('#window').style.borderColor = 'red';
      }
    }
    //Aufgabe 2
    function rechnung1() {
      const result11 = document.querySelector('#calc1Input1').value;
      if (result11 === "421,90") {
        document.querySelector('#calc1Input1').setAttribute('disabled', 'disabled')
        document.querySelector('#wrong1').innerHTML = "";
        document.querySelector('#window1').innerHTML = "<div class='richtig'>" + "Korrekte Antwort!" + "</div>";
        document.querySelector('#window1').style.background = 'green';
        document.querySelector('#window1').style.borderColor = 'green';
        document.querySelector('#aufloesen1').setAttribute('disabled', 'disabled');
      } else {
        document.querySelector('#wrong1').innerHTML = "Falsche Antwort!";
        document.querySelector('#window1').style.borderColor = 'red';
      }
    }

function calculerFarenheit() {
  let celsius = document.querySelector('.celsius-deg').value;
  let farenheit = ((celsius * 9/5)+32);
  document.querySelector('.farenheit-deg').value = farenheit;

  // alert(`Résultat : ${y}`);
}

document.querySelector('.farenheit-btn').addEventListener('click', function() {
  calculerFarenheit();
});

//
// document.querySelector('.farenheit-deg').value = (`${y}`);

// Convertir Livres > Euros et Euros > Livres avec 2 boutons / mêmes champs

function convertirEnEuros() {
  let montantLivres = document.querySelector('.champ1').value;
  let euros = (montantLivres * 1.15);
  return euros;
  // alert(`Résultat en euros : ${convertirEnEuros}`);
}

document.querySelector('.convert-btn1').addEventListener('click', function() {
  let resultat = convertirEnEuros();
  document.querySelector('.champ2').value = resultat;
});

function convertirEnLivres() {
  let montantEuros = document.querySelector('.champ1').value;
  let livres = (montantEuros / 1.15);
  return livres;
}

document.querySelector('.convert-btn2').addEventListener('click', function() {
  let resultat = convertirEnLivres();
  document.querySelector('.champ2').value = resultat;
});

// la même sans bouton, en pressant Entrée :

function convertirEnEurosBis() {
  let montantLivres2 = document.querySelector('.champ3').value;
  let euros2 = (montantLivres2 * 1.15);
  return euros2;
}

document.querySelector('.champ3').addEventListener('keypress', function() {
  let resultat2 = convertirEnEurosBis();
  document.querySelector('.champ4').value = resultat2;
});

function convertirEnLivresBis() {
  let montantEuros2 = document.querySelector('.champ4').value;
  let livres2 = (montantEuros2 / 1.15);
  return livres2;
}

document.querySelector('.champ4').addEventListener('keypress', function() {
  let resultat3 = convertirEnLivresBis();
  document.querySelector('.champ3').value = resultat3;
});

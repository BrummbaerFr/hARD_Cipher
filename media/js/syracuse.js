function syracuseCipher() {
  var plain = document.getElementById('plain').value.toUpperCase();    // on récupère le texte et on le transforme en majuscules
  plain = plain.replace(/\W+/g, '');    // RegExp : \W pour les caractères spéciaux et /g pour TOUS. Supprime les caractères spéciaux, pareil pour lignes 4 & 5
  plain = plain.replace(/\s+/g, '');    // \s RegExp pour "Espace"
  plain = plain.replace(/\d+/g, ''); // pareil que ligne 3 mais enlève les nombres (\d)
  var key = "";   // var clé
  for (var i = 0; i < plain.length; i++) {   // boucle de cryptage
    var iterations = Math.floor((Math.random() * 40) +10); // Génère le nombre d'itérations (entre 10 et 40)
    document.getElementById('key').value += iterations;
    document.getElementById('key').value += "|";
    var ciphered = (plain.charCodeAt(i))-65;    // on prend le numéro ASCII de la lettre
    for (var k = 0; k < iterations; k++) {  // on fait tourner la suite pour k itérations
      if (ciphered%2 != 0) {    // si le nombre est impair, on fait les opérations nécessaires
        ciphered *= 3;
        ciphered += 1;
      }
      else {    // sinon, le nombre est forcément pair, on divise par deux
        ciphered /= 2;
      }
    }
    document.getElementById('cipher').value += String.fromCharCode(ciphered+65);
  }
}

function syracuseDecipher () {
  var plain = "";
  var cipher = document.getElementById('cipher').value.toUpperCase();    // on récupère le texte crypté
  cipher = cipher.replace(/\W+/g, '');    // il ne devrait pas y avoir de caractères spéciaux, mais si l'user en entre un ...
  cipher = cipher.replace(/\s+/g, '');    // pareil pour les espaces
  cipher = cipher.replace(/\d+/g, '');    // pareil pour les chiffres
  var key = document.getElementById('key').value;   // on récupère la clé
  var keyArray = key.split('|');    // supprimes les | de la clé
  alert(keyArray);
  for (var i = 0; i < cipher.length; i++) {
    var ciphered = (cipher.charCodeAt(i))-65;
    for (var p = 0; p < keyArray[i]; p++) {
      if (ciphered%2 != 0) {    // si le nombre est impair, on multiplie par 2 (on exécute la suite à l'envers)
        ciphered *= 2;
      }
      else {
        ciphered -= 1;
        ciphered /= 3;
      }
    }
    ciphered %= 26;
    document.getElementById('plain').value += String.fromCharCode(ciphered+65);
  }
}

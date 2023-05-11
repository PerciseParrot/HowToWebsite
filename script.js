function openNav() {
    document.getElementById("sideBar").style.width = "200px";
    document.getElementById("overlay").style.display = "block";
    setTimeout(function() {
        document.getElementById("overlay").style.opacity = "0.3";
    }, 1);
}

function closeNav() {
    document.getElementById("sideBar").style.width = "0px";
    document.getElementById("overlay").style.opacity = "0.0"
    setTimeout(function() {
        document.getElementById("overlay").style.display = "none";
    }, 500);
}



const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultsContainer = document.querySelector('#search-results');

function search() {
  // Lese den Suchbegriff aus dem Eingabefeld aus
  const searchTerm = searchInput.value.toLowerCase();

  // Durchsuche alle Textknoten auf der Seite nach dem Suchbegriff
  const textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  let resultCount = 0;

  let node;
  while (node = textNodes.iterateNext()) {
    if (node.textContent.toLowerCase().includes(searchTerm)) {
      // Erstelle ein neues Ergebnis-Element für diesen Textknoten
      const result = document.createElement('div');
      result.textContent = node.textContent;
      resultsContainer.appendChild(result);
      resultCount++;
    }
  }

  // Zeige die Anzahl der Ergebnisse an
  const countText = resultCount === 1 ? 'Ergebnis' : 'Ergebnisse';
  resultsContainer.prepend(document.createTextNode(`${resultCount} ${countText} gefunden.`));
}

searchButton.addEventListener('click', search);
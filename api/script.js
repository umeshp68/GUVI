function fetchData(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function searchDomain() {
  const domainInput = document.getElementById('domainInput').value;
  const apiUrl = `https://api.domainsdb.info/v1/domains/search?domain=${domainInput}`;

  fetchData(apiUrl)
    .then(data => {
            const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
            console.error(error);
    });
}

document.getElementById('searchButton').addEventListener('click', searchDomain);
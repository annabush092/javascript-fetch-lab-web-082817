
function getIssues() {
  // const userRepo = document.querySelector('#results').lastChild.dataset.user
  const userRepo = 'annabush092/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${userRepo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`,
    }
  }).then( res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  html = `<ul>`
  for(let i=0; i < json.length; i++) {
    html += `<li> ${json[i].title} - ${json[i].body} </li>`
  }
  html += `</ul>`
  document.querySelector('#issues').innerHTML = html
}

function createIssue() {
  const issueTitle = document.querySelector("#title").value
  document.querySelector("#title").value = ''
  const issueText = document.querySelector("#body").value
  document.querySelector("#body").value = ''
  // const userRepo = document.querySelector('#results').lastChild.dataset.user
  const userRepo = 'annabush092/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${userRepo}/issues`, {
    // method: "POST",
    method: /post/,
    body: JSON.stringify({
        title: `${issueTitle}`,
        body: `${issueText}`
      }),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  })
  .then(res => res.json())
  .then(json => getIssues(json))
}

function showResults(json) {
  html = `<a href=${json.svn_url} data-user=${json.full_name}> ${json.full_name} </a>`
  document.querySelector('#results').innerHTML = html
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    // method: "POST",
    method: /post/,
    headers: {
      Authorization: `token ${getToken()}`,
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

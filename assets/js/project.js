
let dataProject = []

function getData(event) {
  event.preventDefault()

  let projectName = document.getElementById('project-name').value
  let projectStart = document.getElementById('project-start').value
  let projectEnd = document.getElementById('project-end').value
  let projectDesc = document.getElementById('project-description').value
  let projectTech = document.getElementsByName('project-tech')

  // let image = document.getElementById('f-project__image').value
  /* Cara diatas akan membuat file menjadi tidak terbaca dan mengubahnya sebagai fake path,
  karena file input akan menghasilkan data berupa object(URL.createObjectURL()), sehingga perlu diubah seperti berikut:
  */

  image = URL.createObjectURL(image[0])

  let addProject = {
    projectName,
    projectStart,
    projectEnd,
    projectDesc,
  }

  let techCheck = []

  for (let i = 0; i < projectTech.length; i++) {
    if (projectTech[i].checked) {
      techCheck.push(projectTech[i].value)
    }
  }

  console.log(projectName, projectStart, projectEnd, projectDesc, techCheck)
}

function showData() {
  document.getElementById("contents").innerHTML = ""

  for (let i = 0; i <= blogs.length; i++) {
    document.getElementById("contents").innerHTML += `
      <div class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
          >
        </h1>
        <div class="detail-blog-content">
          ${blogs[i].postedAt} | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}
        </p>
        <div style="float:right; margin: 10px">
          <p style="font-size: 15px; color:grey">1 minutes ago</p>
        </div>
      </div>
    </div>
      `
  }
}
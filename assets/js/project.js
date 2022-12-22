
let dataProject = []

function getData(event) {
  event.preventDefault()

  let projectName = document.getElementById('project-name').value
  let projectStart = document.getElementById('project-start').value
  let projectEnd = document.getElementById('project-end').value
  let projectDesc = document.getElementById('project-description').value
  let projectTech = document.getElementsByName('project-tech')
  let projectImage = document.getElementById('project-image').files

  // let image = document.getElementById('f-project__image').value
  /* Cara diatas akan membuat file menjadi tidak terbaca dan mengubahnya sebagai fake path,
  karena file input akan menghasilkan data berupa object(URL.createObjectURL()), sehingga perlu diubah seperti berikut:
  */

  // ambil blob URL gambar
  projectImage = URL.createObjectURL(projectImage[0])

  let techChecked = []

  for (let i = 0; i < projectTech.length; i++) {
    if (projectTech[i].checked) {
      techChecked.push(projectTech[i].value)
    }
  }

  // console.log(projectName, projectStart, projectEnd, projectDesc, techChecked)

  let addProject = {
    projectName,
    projectStart,
    projectEnd,
    projectDesc,
    projectImage,
    techChecked
  }

  dataProject.push(addProject)
  showData() // agar show data tidak dijalankan berulang

}

function showData() {
  document.getElementById("list-content").innerHTML = ""

  for (let i = 0; i <= dataProject.length; i++) {
    document.getElementById("list-content").innerHTML += `
    <div class="card" style="">
        <img src="${dataProject[i].projectImage}" alt="">
        <div class="card-body">
          <div>
            <h1>${dataProject[i].projectName}</h1>
            <span>Durasi: 3Bulan</span>
          </div>
          <p>${dataProject[i].projectDesc}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <a href="#">Edit</a><a href="#">Delete</a>
          </div>
        </div>
      </div>
      `
  }
}

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

  console.log(projectName, projectStart, projectEnd, projectDesc, techChecked)

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


  for (let i = 0; i < dataProject.length; i++) {
    listContent = document.getElementById('list-content')

    listContent.innerHTML += `
    <div class="card card-post">
        <img src="${dataProject[i].projectImage}" alt="">
        <div class="card-body">
          <div class="card-head">
            <h1 class="card-title__sm">${dataProject[i].projectName}</h1>
            <span class="card-subtitle__sm">Durasi: 3Bulan</span>
          </div>
          <div class="card-body">
          <p class="card-desc_sm">${dataProject[i].projectDesc}</p>
          <ul class="list-items">
            ${(function icon() {
        let string = ""
        for (let j = 0; j < dataProject[i].techChecked.length; j++) {
          string += `<li><img src="assets/img/icon/logo-${dataProject[i].techChecked[j]}.svg" alt="Item Icon"></li>`
        }
        return string
      })()}
          </ul>
        <div class="btn-group">
          <a class="btn btn-primary btn-sm" href="#">Edit</a><a class="btn btn-outline btn-sm" href="#">Delete</a>
        </div>
        </div>
      </div>
    </div>
    `
  }
}


// function listTech(tectName) {
//   for (let i = 0; i < tectName.length; i++) {

//     ???.innerHTML += `<li><img src="assets/img/icon/logo-${tectName[i]}.svg" alt="Item Icon"></li>`

//   }
// }
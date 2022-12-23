// let namaVariable = "isivariabel"

// const angka = 5

// const isMarried = true

// type data non primitive
/*
Array adalah tipe data non primitive yang menggunakan Indexing sebagai pengurut
pada tiap index array, dapat menggunakan tipe data yang berbeda
*/
// Array
// let array = ["Wahyu", 17, false]

// console.log(array)
// console.table(array[0])

// Object
// let myBio = {
//   name: "Dandi Saputra",
//   age: 17,
//   isMarried: 
//   when:{
//     age2: 24
//   }
// }

// console.table(`Apakah mas ${myBio.name} sudah menikah? ${myBio.isMarried} Kapan? ${myBio.when.age2})

// array of object

// let myFriend = [
//   {
//     name: "Nima",
//     age: 23,
//     address: "Tangerang",
//     isMarried: false
//   },
//   {
//     name: "Agung",
//     age: 32,
//     address: " ",
//     isMarried: true
//   }
// ]

// console.table(myFriend[0].address)


let blogs = []

function getData(event) {
  event.preventDefault()

  let title = document.getElementById('f-blog__title').value
  let content = document.getElementById('f-blog__content').value
  // let image = document.getElementById('f-blog__image').value
  /* Cara diatas akan membuat file menjadi tidak terbaca dan mengubahnya sebagai fake path,
  karena file input akan menghasilkan data berupa object(URL.createObjectURL()), sehingga perlu diubah seperti berikut:
  */
  let image = document.getElementById('f-blog__image').files

  image = URL.createObjectURL(image[0])

  console.table(image)

  let addBlog = {
    title,
    content,
    image,
    author: "Dandi Saputra",
    postedAt: new Date()
  }

  blogs.push(addBlog)

  console.log(blogs)
  showData()

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

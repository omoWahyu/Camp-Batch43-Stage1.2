// alert("Halo saya batch 43")
// console.log("Hello World")
// document.write("Hallo Batch 43")
// document.writeln("Hallo Batch 43")

// variable
// var, let, const.

// data yang bisa di ubah
// var gelas = "susu"
// var gelas = "air putih"
// let piring = "nasi putih"
// piring = "nasi goreng"

// isi data yang tetap
// constant 
// const nama = "dandi"
// nama = "wahyu"

// type data
// data primitif dan non primitif
// type data primitif -> satu nilai (
//  -> string ="apapun yang ada didalam ini adalah string"
//  -> int = 1,2,3,4,5 
// -> floating-point -= 0.1, 0.2 
//  -> boolean = (true dan false)
//  -> undifined = belum di deklarasikan
//  -> null = tidak ada datanya

// type data non-primitif -> lebih dari satu
//  -> object
//  -> array 

// let dataDiri = {
//     nama: "Dandi",
//     alamat: "Tangerang"
// }

// dua suku kata
// let darahMuda = "o"
// let darah_muda = "o"
// let darah-muda = "o" -> error

// menggunakan bahasa inggris
// const increment

// operator
// operator arimatika
// let angkaAwal = 10**3
// let angkaTambah = 20
// let hasil = angkaAwal

// let myName = "Dandi Saputra"
// let myJob = "Selai Kacang"
// let myIntro = "nama saya " + myName + " Pekerjaan saya menjadi " + myJob -> cara 1
// let myIntro = `nama saya ${myName} pekerjaan saya menjadi ${myJob}` -> cara 2


// pengkondisian
// if else
// let umur = 17

// if(umur === "17") {
//     console.log("Mas dandi umurnya dibawah 17 thn")
// } else {
//     console.log("umur mas dandi diatas 17thn")
// }

//  ==, !=, ===
// function
// function biasa
// function increment(){
//     let kota = "jakarta"
//     return kota
// } 

// increment()

// const decrement = function() {
//     console.log("Jakarta")
// }

// decrement()

// const hasil = () => {
//     console.log("halo")
// }

// hasil()

// parameter
// function sayHallo(nilaiAwal, nilaiAkhir) {
//     return nilaiAwal + nilaiAkhir
// }

// // argument
// console.log(sayHallo(10, 15))


function submitData() {
  let name = document.getElementById('f-name').value
  let email = document.getElementById('f-email').value
  let phone = document.getElementById('f-phone').value
  let subject = document.getElementById('f-subject').value
  let message = document.getElementById('f-message').value

  // console.log(name)
  // console.log(email)
  // console.log(phone)
  // console.log(subject)
  // console.log(message)

  // For respond Alert Message
  if (name == '') {
    return alert('name Form is required')
  }
  else if (email == '') {
    return alert('Email Form is required')
  }
  else if (phone == '') {
    return alert('Phone Number Form is required')
  }
  else if (subject == '') {
    return alert('Subject Form is required')
  }
  else if (message == '') {
    return alert('Message Form is required')
  }

  // For sending Mail
  let emailRecipient = "wahyudi.chrisdianto@gmail.com"

  let mailTo = document.createElement('a')
  mailTo.href = `mailto:${emailRecipient}?subject=${subject}&body=Halo Perkenalkan nama saya ${name}%0D%0A%0D%0A${message},%0D%0Asilahkan hubungi saya di ${phone}%0D%0A%0D%0ATerima kasih.`
  mailTo.click()
}

let contactForm = {
  name,
  email,
  phone,
  subject,
  message
}
console.log(contactForm)
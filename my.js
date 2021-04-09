function check() {
    let a = +document.getElementById("a").value;
    console.log(a)
    let b = +document.getElementById("b").value;
    let s = a*b/2;
    document.getElementById("kq").innerHTML = "diện tích hình tam giác là" + s;
  }

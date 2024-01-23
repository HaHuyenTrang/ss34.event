// console.dir(document);
// console.dir(document);


// console.log("thẻ html" ,document.getElementById("demo-id"));
// let div = document.getElementById("demo-id2");
// console.log("thẻ div", div);

// //2
// let lis = document.getElementsByClassName("list-item");
// console.log(lis);

let div = document.getElementById("demo-id");
console.log(div);
console.dir(div);


//các thuộc tính cơ bản
console.log(div.innerHTML);//lấy ra nội dung hml  //trong 1 thẻ nào đó
console.log(div.innerText);//lấy ra nội dung text  //trong 1 thẻ nào đó
console.log(div.textContent);//lấy ra nội dung là text bao gồm xuống dòng  //trong 1 thẻ nào đó




div.innerHTML ="HaHa";
div.textContent = "đổi nội dung = textContent";
div.innerText = "hello, nội dung đã được cập nhật = innertext";

div.innerText +=", nội dung được nối vào";

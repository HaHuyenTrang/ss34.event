// Lấy danh sách người dùng và nút Edit
const userList = document.getElementById("userList");
const editButtons = document.getElementsByClassName("editBtn");

// Lấy ô input và nút Edit item
const editInput = document.getElementById("editInput");
const editItemBtn = document.getElementById("editItemBtn");


for (let i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener("click", function () {
    
    // Hiển thị tên người dùng trong ô input
    editInput.value = username;
  });
}



//bài 10
// Cả ba thuộc tính innerText, textContent và innerHTML được sử dụng để truy cập và thay đổi nội dung của các phần tử HTML trong JavaScript, nhưng có một số khác biệt quan trọng giữa chúng.

// 1. innerText: 
// - Thuộc tính innerText trả về hoặc thiết lập văn bản hiển thị trong phần tử, bỏ qua các phần tử con bị ẩn bằng CSS.
// - Nếu bạn sử dụng innerText để đọc nội dung, nó sẽ trả về văn bản đã được hiển thị trên trình duyệt.
// - Ví dụ:

// ```html
// <div id="example">This is <span>inner text</span> example.</div>
// ```
// ```javascript
// const element = document.getElementById('example');
// console.log(element.innerText); // Output: "This is inner text example."
// ```

// 2. textContent:
// - Thuộc tính textContent trả về hoặc thiết lập toàn bộ nội dung văn bản trong phần tử, bao gồm cả các phần tử con bị ẩn bằng CSS.
// - textContent không chấp nhận các thẻ HTML làm giá trị và sẽ trả về văn bản nguyên thủy.
// - Ví dụ:

// ```html
// <div id="example">This is <span>inner text</span> example.</div>
// ```
// ```javascript
// const element = document.getElementById('example');
// console.log(element.textContent); // Output: "This is inner text example."
// ```

// 3. innerHTML:
// - Thuộc tính innerHTML trả về hoặc thiết lập nội dung HTML bên trong phần tử.
// - innerHTML cho phép bạn thêm, sửa đổi hoặc xóa các phần tử HTML bên trong phần tử hiện tại.
// - Ví dụ:

// ```html
// <div id="example">This is <span>inner text</span> example.</div>
// ```
// ```javascript
// const element = document.getElementById('example');
// console.log(element.innerHTML);
// // Output: "This is <span>inner text</span> example."
// ```

// Lưu ý: Khi sử dụng innerHTML để thiết lập nội dung, hãy cẩn thận với các lỗ hổng bảo mật liên quan đến mã độc được chèn vào nội dung HTML. Luôn kiểm tra và xử lý dữ liệu người dùng một cách an toàn trước khi sử dụng innerHTML để tránh các cuộc tấn công XSS (Cross-Site Scripting).
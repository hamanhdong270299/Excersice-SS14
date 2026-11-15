const books = [];

let choice;

while (choice !== "5") {
  choice = prompt(
    "--- QUẢN LÝ SÁCH ---\n\n1. Thêm sách mới\n2. Hiển thị danh sách sách\n3. Tìm kiếm sách theo tên\n4. Xóa sách theo ID\n5. Thoát chương trình\n\nNhập lựa chọn của bạn:",
  );

  if (choice === null || choice === "5") {
    break;
  }

  switch (choice) {
    case "1": {
      const idInput = prompt("Nhập ID sách:");
      if (idInput === null) break;
      const titleInput = prompt("Nhập tên sách:");
      if (titleInput === null) break;
      const authorInput = prompt("Nhập tác giả:");
      if (authorInput === null) break;
      const yearInput = prompt("Nhập năm xuất bản:");
      if (yearInput === null) break;

      const id = idInput.trim();
      const title = titleInput.trim();
      const author = authorInput.trim();
      const year = Number(yearInput);

      if (!id || !title || !author || !Number.isInteger(year) || year <= 0) {
        console.error("Thông tin không hợp lệ. Vui lòng kiểm tra và nhập lại.");
        break;
      }

      if (books.some((book) => book.id === id)) {
        console.error(`ID "${id}" đã tồn tại.`);
        break;
      }

      const book = { id, title, author, year };
      books.push(book);
      console.log("Đã thêm sách:", book);
      break;
    }

    case "2":
      if (books.length === 0) {
        console.log("Danh sách sách đang trống.");
      } else {
        console.log("--- DANH SÁCH SÁCH ---");
        for (const book of books) {
          console.log(`ID: ${book.id} | Tên: ${book.title} | Tác giả: ${book.author} | Năm xuất bản: ${book.year}`);
        }
      }
      break;

    case "3": {
      const keywordInput = prompt("Nhập từ khóa tìm kiếm theo tên sách:");
      if (keywordInput === null) break;

      const keyword = keywordInput.trim().toLocaleLowerCase();
      const matches = [];
      for (const book of books) {
        if (book.title.toLocaleLowerCase().includes(keyword)) {
          matches.push(book);
        }
      }

      if (matches.length === 0) {
        console.log(`Không tìm thấy sách có tên chứa "${keywordInput.trim()}".`);
      } else {
        console.log("--- KẾT QUẢ TÌM KIẾM ---");
        for (const book of matches) {
          console.log(`ID: ${book.id} | Tên: ${book.title} | Tác giả: ${book.author} | Năm xuất bản: ${book.year}`);
        }
      }
      break;
    }

    case "4": {
      const idInput = prompt("Nhập ID sách cần xóa:");
      if (idInput === null) break;

      const id = idInput.trim();
      const index = books.findIndex((book) => book.id === id);
      if (index === -1) {
        console.error(`Không tìm thấy sách có ID "${id}".`);
      } else {
        const [deletedBook] = books.splice(index, 1);
        console.log("Đã xóa sách:", deletedBook);
      }
      break;
    }

    default:
      console.error("Lựa chọn không hợp lệ. Hãy nhập từ 1 đến 5.");
  }
}

console.log("Đã thoát chương trình quản lý sách.");

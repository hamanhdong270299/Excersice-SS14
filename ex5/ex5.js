const students = [];

let choice;

while (choice !== "4") {
  choice = prompt(
    "Quản lý sinh viên\n1. Thêm sinh viên\n2. Hiển thị danh sách\n3. Xóa sinh viên theo ID\n4. Thoát\nNhập lựa chọn:",
  );

  if (choice === null || choice === "4") {
    break;
  }

  switch (choice) {
    case "1": {
      const name = prompt("Nhập tên sinh viên:");
      if (name === null) break;

      const ageInput = prompt("Nhập tuổi:");
      if (ageInput === null) break;

      const id = prompt("Nhập mã số sinh viên (ID):");
      if (id === null) break;

      const age = Number(ageInput);
      if (!name.trim() || !id.trim() || !Number.isFinite(age) || age <= 0) {
        console.error("Thông tin không hợp lệ. Vui lòng nhập lại.");
        break;
      }

      if (students.some((student) => student.id === id.trim())) {
        console.error("ID này đã tồn tại.");
        break;
      }

      students.push({ name: name.trim(), age, id: id.trim() });
      console.log("Đã thêm sinh viên:", students[students.length - 1]);
      break;
    }

    case "2":
      if (students.length === 0) {
        console.log("Danh sách sinh viên đang trống.");
      } else {
        console.table(students);
      }
      break;

    case "3": {
      const id = prompt("Nhập ID sinh viên cần xóa:");
      if (id === null) break;

      const index = students.findIndex((student) => student.id === id.trim());
      if (index === -1) {
        console.error(`Không tìm thấy sinh viên có ID "${id.trim()}".`);
      } else {
        const [deletedStudent] = students.splice(index, 1);
        console.log("Đã xóa sinh viên:", deletedStudent);
      }
      break;
    }

    default:
      console.error("Lựa chọn không hợp lệ. Hãy nhập 1, 2, 3 hoặc 4.");
  }
}

console.log("Đã thoát chương trình quản lý sinh viên.");

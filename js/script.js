function tinhDTB(diemToan, diemLy, diemHoa) {
    return (diemToan + diemLy + diemHoa) / 3;
}
function xepLoaiDiem(diemTB) {
    if (diemTB >= 9) {
        return "Xuất sắc";
    }
    else if (diemTB >= 8) {
        return "Giỏi";
    }
    else if (diemTB >= 7) {
        return "TB khá";
    }
    else if (diemTB >= 6) {
        return "khá";
    }
    else if (diemTB >= 5) {
        return "Trung bình";
    }
    else {
        return "Yếu";
    }
}
function xepLoaiSV(diemToan, diemLy, diemHoa) {
    //Lấy 1 chữ số thập phân
    var diemTB = Math.round(tinhDTB(diemToan, diemLy, diemHoa) *10) / 10;
    var xepLoai = xepLoaiDiem(diemTB);
    console.log("Điểm trung bình : " + diemTB);
    console.log("Xếp loại : " + xepLoai);
}
//khai báo sinh viên
var sv = "Nguyễn văn 1";
var diemToanSV = 9;
var diemLySV = 9;
var diemHoaSV = 9;
console.log(sv);
xepLoaiSV(diemToanSV, diemLySV, diemHoaSV);
//tận dụng biến chạy tiếp
sv = "Nguyễn thị 2";
diemToanSV = 8;
diemLySV = 7;
diemHoaSV = 6;
console.log(sv);
xepLoaiSV(diemToanSV, diemLySV, diemHoaSV);

sv = "Nguyễn tèo 3";
diemToanSV = 2;
diemLySV = 3;
diemHoaSV = 5;
console.log(sv);
xepLoaiSV(diemToanSV, diemLySV, diemHoaSV);
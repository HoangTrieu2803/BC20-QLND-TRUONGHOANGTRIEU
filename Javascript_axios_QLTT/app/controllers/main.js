var service = new InfoServices();
var valid = new Validation();
var users = [];
function infoGetList(){
    service.getListInfoApi().then(function(result){
            users.push(result.data);
            renderData(result.data.filter(result => result.loaiND == "GV"));
    })
    .catch(function(error){
        console.log(error);
    });
}
// console.log(users);
infoGetList();
function getID(id){
    return document.getElementById(id);
}
function renderData(data){
    var html = "";
    data.forEach(function(item,index){
        html += `
        <tr>
        <td>${index +1}</td>
        <td>${item.taiKhoan}</td>
        <td>${item.matKhau}</td>
        <td>${item.hoTen}</td>
        <td>${item.email}</td>
        <td>${item.ngonNgu}</td>
        <td>${item.loaiND}</td>
        <td>${item.moTa}</td>
        <td>
        <button onclick ="xemND(${item.id})" class ="btn btn-info" data-toggle="modal" data-target="#myModal">Edit</button>
        <button onclick="xoaND(${item.id})" class ="btn btn-danger">Delete</button>
        </td>
        </tr>
        `;
    });
        getID("tblDanhSachNguoiDung").innerHTML = html;
}
function clearSpan(){
    getID("spanTaiKhoan").style.display = "none";
    getID("spanHoTen").style.display = "none";
    getID("spanMatKhau").style.display = "none";
    getID("spanEmail").style.display = "none";
    getID("spanHinhAnh").style.display = "none";
    getID("spanLoaiND").style.display = "none";
    getID("spanNgonNgu").style.display = "none";
    getID("spanMoTa").style.display = "none";
}
getID("btnThemNguoiDung").addEventListener("click",function(){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm người dùng";
    var footerModal = `<button class="btn btn-success" onclick ="themND()">Thêm</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;
    getID("TaiKhoan").disabled = false;
    getID("TaiKhoan").value="";
    getID("HoTen").value="";
    getID("MatKhau").value="";
    getID("Email").value="";
    getID("HinhAnh").value="";
    getID("loaiNguoiDung").selectedIndex=0;
    getID("loaiNgonNgu").selectedIndex=0;
    getID("MoTa").value="";

    clearSpan();
})
function themND(){
    var taiKhoan = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var hinhAnh = getID("HinhAnh").value;
    var loaiND = getID("loaiNguoiDung").value;
    var ngonNgu = getID("loaiNgonNgu").value;
    var moTa = getID("MoTa").value;
    
    var info = new Info("", taiKhoan,hoTen,matKhau,email,loaiND,ngonNgu,moTa,hinhAnh);

    var isValid = true;
    isValid &= valid.checkEmpty(taiKhoan, "tài khoản không được để trống","spanTaiKhoan") && valid.checkID(taiKhoan,"tài khoản đã được sử dụng","spanTaiKhoan",users);
    isValid &= valid.checkEmpty(hoTen,"họ tên không được để trống" ,"spanHoTen") && valid.checkName(hoTen,"ten khong hop le","spanHoTen");
    isValid &= valid.checkEmpty(matKhau, "mật khẩu không được để trống","spanMatKhau") && valid.checkPass(matKhau,"mật khẩu có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số, độ dài 6-8", "spanMatKhau");
    isValid &= valid.checkEmpty(email, "email không được để trống","spanEmail") && valid.checkEmail(email, "email không hợp lệ","spanEmail");
    isValid &= valid.checkEmpty(hinhAnh , "hình ảnh không được để trống","spanHinhAnh");
    isValid &= valid.checkSeclect("loaiNguoiDung", "bạn phải chọn người dùng","spanLoaiND");
    isValid &= valid.checkSeclect("loaiNgonNgu", "bạn phải chọn ngôn ngữ","spanNgonNgu");
    isValid &= valid.checkEmpty(moTa, "mô tả không được để trống", "spanMoTa") && valid.checkMoTa(moTa, "không vượt quá 60 kí tự","spanMoTa");
    if(isValid){
    service.postInfoApi(info).then(function(){
        document.getElementsByClassName("close")[0].click();
        infoGetList();
    })
    .catch(function(error){
        console.log(error);
    });
    }
}
function xoaND(id){
    service.deleteInfoApi(id)
    .then(function(){
        infoGetList();
    })
    .catch(function(error){
        console.log(error);
    });
}
function xemND(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Cập nhật người dùng";
    var footerModal = `<button class="btn btn-success" onclick="capNhatND(${id})" >Cập nhật</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;
    getID("TaiKhoan").disabled = true;
    clearSpan();
    service.getInfoApi(id)
    .then(function(result){
        getID("TaiKhoan").value = result.data.taiKhoan;
        getID("HoTen").value = result.data.hoTen;
        getID("MatKhau").value = result.data.matKhau;
        getID("Email").value = result.data.email;
        getID("HinhAnh").value = result.data.hinhAnh;
        getID("loaiNguoiDung").value = result.data.loaiND;
        getID("loaiNgonNgu").value = result.data.ngonNgu;
        getID("MoTa").value = result.data.moTa;
    })
    .catch(function(error){
        console.log(error);
    });
}
function capNhatND(id){
    var taiKhoan = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var hinhAnh = getID("HinhAnh").value;
    var loaiND = getID("loaiNguoiDung").value;
    var ngonNgu = getID("loaiNgonNgu").value;
    var moTa = getID("MoTa").value;
    
    var info = new Info(id, taiKhoan,hoTen,matKhau,email,loaiND,ngonNgu,moTa,hinhAnh);
    service.putInfoApi(info)
    .then(function(){
        document.getElementsByClassName("close")[0].click();
        infoGetList();
    })
    .catch(function(error){
        console.log(error);
    });
}
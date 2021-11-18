
function Validation(){
    this.checkEmpty = function(value , message , spanID){
        if (value.trim() != ""){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
             return false;
    }
    this.timID = function(usersList,value){
        var result = false;
        usersList.forEach(function(user){
          user.forEach(function(account){
              if(account.taiKhoan == value){
                  result = true;
              }
          })
          console.log(user);
        })
        return result;
    }
    this.checkID = function(value , message , spanID,usersList){   
        if(this.timID(usersList,value)){
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }else{
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

    }
    this.checkName = function(value , message, spanID){
        // Kiểu string
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
        // Đổi kiểu string sang RegExp
        var reg = new RegExp(pattern);
        if(reg.test(value)){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }else{
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkEmail = function(value , message, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(pattern)){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkPass = function(value , message, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(pattern.test(value)){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkSeclect = function(selectID , message, spanID){
        if(document.getElementById(selectID).selectedIndex != 0){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkMoTa = function(value , message, spanID){
        var pattern = /^.{1,60}$/;
        if(pattern.test(value)){
            document.getElementById(spanID).innerHTML = " ";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}
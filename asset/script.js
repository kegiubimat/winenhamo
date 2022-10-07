
// RESET FORM
function resetform() {
    document.getElementById("ruou-form").reset();
  }

// TÍNH DOANH THU ĐẨY VÀO TRONG GOOGLE SHEET
function tinhDoanhthu() {
    var a = parseFloat(document.getElementById("soluongid").value);
    var b = parseFloat(document.getElementById("giaid").value);
    var c = parseFloat(document.getElementById("thuthemid").value);
    var d = parseFloat(document.getElementById("phatsinhid").value);
    if (isNaN(a) == true) {
      a = 0;
    }
    if (isNaN(b) == true) {
      b = 0;
    }
    if (isNaN(c) == true) {
      c = 0;
    }
    if (isNaN(d) == true) {
      d = 0;
    }
    var sum = a * b + c - d;
    document.getElementById("doanhthuid").value = sum;
    console.log(sum)
  }

//  ENTER TO NEXT INPUT
  $(document).on("keypress", "input,select", function (e) {
    if (e.which == 13) {
      e.preventDefault();
      var $next = $("[tabIndex=" + (+this.tabIndex + 1) + "]");
      console.log($next.length);
      if (!$next.length) {
        $next = $("[tabIndex=1]");
      }
      $next.focus().click();
    }
  });
//   NHẬP ĐƠN HÀNG
function nhapDulieu(){
  var $form = $("form#ruou-form"),
    url =
      "https://script.google.com/macros/s/AKfycbzVoFBQ9JGdd07ubBbfc43fi_4tvPpPVBPfG69roVeoH6Ji-P0txL4f_YEnb7R77jQG/exec";

  tinhDoanhthu();
  var jqxhr = $.ajax({
      url: url,
      method: "POST",
      dataType: "json",
      data: $form.serialize(),
    }).done(resetform(), alert("Đã nhập đơn hàng - Fighting"));
  
}


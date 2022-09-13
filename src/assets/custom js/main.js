// let menuToggle = document.querySelector('.toggle');
//         let menu = document.querySelector('.menu');
//         menuToggle.onclick = function () {
//             menu.classList.toggle('active')
//             menuToggle.classList.toggle('active')
//         }

//         const list = document.querySelectorAll('li');
//         function activeLink() {
//             list.forEach((item) =>
//                 item.classList.remove('active'));
//             this.classList.add('active')
//         }
//         list.forEach((item) =>
//             item.addEventListener('click', activeLink))

//         //value for move anywhere
//         var dragValue;
//         function move(id) {
//             var element = document.getElementById("theDiv");
//             element.style.position = "absolute";
//             element.onmousedown = function () {
//                 dragValue = element;
//             }
//         }
//         document.onmouseup = function (e) {
//             dragValue = null
//         }
//         document.onmousemove = function (e) {
//             var x = e.pageX;
//             var y = e.pageY;

//             dragValue.style.left = x + "px";
//             dragValue.style.top = y + "px";
//         }
// $(function(){
//     document.getElementById('downloadexcel').addEventListener('click', function(){
//         var table2excel = new Table2Excel();
//         table2excel.export(document.querySelectorAll("#example-table"));
//     })
// })

//excel file import 


// $(document).on('click', '.table tbody tr td .btn-success', function () {
//     var html = '';
//     html += "<tr> <td class = 'txtcode'> </td>"
//     html += "<td class = 'txtdesc'> </td>"
//     html += "<td class = 'txtprice'> </td>"
//     html += "<td class = 'txtqty' > </td>"
//     html += "<td class = 'code'> </td>"
//     html += "<td class = 'desc'> </td>"
//     html += "<td class = 'price'> </td>"
//     html += "<td class = 'qty' > </td>"
//     html += "<td> <button type = 'button' class = 'btn btn-success'> Add </button> <button class = 'btn btn-danger' type = 'button'> Remove </button> </td>"
//     html += "</tr>"
//     $(this).parent().parent().after(html)
// })
// $(document).on('click', '.table tbody tr td .btn-danger', function () {
//     $(this).parent().parent().remove()
// })
$(function(){
    var ExcelToJSON = function () {

        this.parseExcel = function (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                workbook.SheetNames.forEach(function (sheetName) {
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    productList = JSON.parse(json_object);
    console.log(productList);
                    var rows = $('.table tbody tr',);
                    // console.log(productList)
                    for (i = 0; i < productList.length; i++) {
                        var columns = Object.values(productList[i])
                        rows.eq(i).find('td.txtcode').text(columns[0]);
                        rows.eq(i).find('td.txtdesc').text(columns[1]);
                        rows.eq(i).find('td.txtprice').text(columns[2]);
                        rows.eq(i).find('td.txtqty').text(columns[3]);
                        rows.eq(i).find('td.code').text(columns[4]);
                        rows.eq(i).find('td.desc').text(columns[5]);
                        rows.eq(i).find('td.price').text(columns[6]);
                        rows.eq(i).find('td.qty').text(columns[7]);
                    }
                })
            };
            reader.onerror = function (ex) {
                console.log(ex);
            };
            reader.readAsBinaryString(file);
            console.log(file);
        };
    };
    
    function handleFileSelect(evt) {
        var files = evt.target.files;
        var xl2json = new ExcelToJSON();
        xl2json.parseExcel(files[0]);
    }
    document.getElementById('upload').addEventListener('change', handleFileSelect, false);
})

//add item menu


$(function(){
    $(document).ready(function () {
        var html = '<tr><td class = "txtcode"><input class="from-control" type="text" name="fname" required=""></td><td class = "txtdesc"><input class="from-control" type="text" name="email" required=""></td><td class = "txtprice"><input class="from-control" type="text" name="phone" required=""></td><td class = "txtqty"><input class="from-control" type="text" name="address" required=""></td><td class = "code"><input class="from-control" type="text" name="address" required=""></td><td><input type="file" class="form-control" id="profile" #fileInput></td><td class="text-center"><input class="btn btn-danger" type="button" name="remove" id="remove" required="" value="Remove"></td></tr>';
    
        var x = 1;
        $("#add").click(function () {
            $("#table_field").append(html);
        });
        $("#table_field").on('click', '#remove', (function () {
            $(this).closest('tr').remove();
        }));
        
    });
})


//login page desing

$(function(){
    const signinBtn = document.querySelector('.signinBtn');
    const signupBtn = document.querySelector('.signupBtn');
    const formBx = document.querySelector('.formBx');
    const body = document.querySelector('container');

    signupBtn.onclick = function () {
        formBx.classList.add('active')
        body.classList.add('active')
    }
    signinBtn.onclick = function () {
        formBx.classList.remove('active')
        body.classList.remove('active')
    }
})

//function for about

$(function(){
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });
})

// for show more:
// $(function(){
//     $('#link').click(function(){
//       $('#mydiv').slideToggle();
//       return false;
//     });
//   });
  
//   function showText() {
//     //   if (e.target == this)
//     //     $(this).fadeOut();
//      // $(".desc").slideToggle();
//       if( $('.desc').css('white-space') == 'nowrap' )  { 
//         $(".desc").css("white-space","normal")
//         $(".showButton").html("Hide text")
//     } 
//     else { 
      
//       $(".desc").css("white-space","nowrap")
//       $(".showButton").html("Show text")
//     }
//   }
  
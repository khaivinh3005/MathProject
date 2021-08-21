var items = document.querySelectorAll(".content__item");
items.forEach((item) => {
    item.addEventListener("click", () => {
        item.parentNode.classList.toggle("active");
    })
})


var numArray = [];
function addElement() {
    var input = parseFloat(document.querySelector("#inputNumber").value);
    if (!input) {
        input = 0;
    }
    numArray.push(input);
    document.getElementById("txtMain").innerHTML = numArray;
}

function removeEL() {
    numArray.pop();
    console.log(numArray)
    document.getElementById("txtMain").innerHTML = numArray;
}

function tinhTong() {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }
    document.getElementById("txtTong").innerHTML = ` <i class="fa fa-arrow-alt-circle-right"></i> Tổng các số dương trong mảng : ${sum}`;
}

function demSo() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtNumber").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số dương trong mảng : ${count}`
}

function soNhoNhat() {
    var viTri = 0;
    var smallestNum = numArray[viTri];
    for (var i = 0; i < numArray.length; i++) {
        if (smallestNum > numArray[i]) {
            viTri = i;
            smallestNum = numArray[viTri];
        }
    }
    document.getElementById("txtSmallestNumber").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số nhỏ nhất trong mảng : ${smallestNum}`
}

function soDuongNhoNhat() {
    var newArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            newArray.push(numArray[i]);
        }
    }
    var viTri = 0;
    var smallestNum = newArray[viTri];
    for (var j = 0; j < newArray.length; j++) {
        if (smallestNum > newArray[j]) {
            viTri = j;
            smallestNum = newArray[viTri]
        }
    }
    document.getElementById("txtPositiveNum").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số dương nhỏ nhất trong mảng : ${smallestNum}`
}

function soChanCuoiCung() {
    var newArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            newArray.push(numArray[i]);
        }
    }
    document.getElementById("txtlastEvenNum").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số chẵn cuối cùng trong mảng : ${newArray[newArray.length - 1]}`
}

function doiCho() {
    var numberFirst = document.getElementById("numberFirst").value;
    var numberSecond = document.getElementById("numberSecond").value;
    var temp = numArray[numberFirst];
    numArray[numberFirst] = numArray[numberSecond];
    numArray[numberSecond] = temp;
    document.getElementById("txtChangeNum").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Mảng sau khi đổi : ${numArray}`;
}

function sapXep() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtsapXep").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Mảng sau khi sắp xếp: ${numArray}`
}


function soNguyenTo() {
    var newArr = [];
    numArray.forEach((e) => {
        var flag = true
        if (e < 2) {
            flag = false
        } else {
            for (var i = 2; i < e - 1; i++) {
                if (e % i == 0) {
                    flag = false;
                    break
                }
            }
        }
        if (flag == true) {
            newArr.push(e);
        }
    }
    )
    document.getElementById("txtSoNguyenTo").innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số nguyên tố đầu tiên của mảng : ${newArr[0]}`
}

var newArr = [];
function addNewArr() {
    var inputNum = Number(document.getElementById("numInt").value);
    var txt = document.getElementById("txtNumInt");
    newArr.push(inputNum)
    document.getElementById("txtNewArr").innerHTML = newArr;
    document.getElementById("btnNumInt").addEventListener("click" , ()=> {
        var count = 0;
        for(var i = 0 ; i < newArr.length ; i++) {
            if(Number.isInteger(newArr[i])) {
                count++;
            }
        }
        txt.innerHTML = `<i class="fa fa-arrow-alt-circle-right"></i> Số nguyên trong mảng mới : ${count}`;
    })
}

function Compare() {
    var numPos = 0;
    var numNeg = 0;
    var txtCompare = '';
    for(var i = 0 ; i < numArray.length ; i++) {
        if(numArray[i] > 0) {
            numPos++;
        }else if(numArray[i] < 0) {
            numNeg++;
        }
    }

    if(numPos > numNeg) {
        txtCompare = "Số dương > số âm"
    } else if(numPos < numNeg) {
        txtCompare = "Số dương < số âm"
    } else {
        txtCompare = "Số dương = số âm"
    }
    document.getElementById("txtCompare").innerHTML =`<i class="fa fa-arrow-alt-circle-right"></i> ${txtCompare}`;
}

document.querySelector("#btnNumber").addEventListener("click", addElement)
document.querySelector("#btnRemoveNumber").addEventListener("click", removeEL)
document.querySelector("#btnTong").addEventListener("click", tinhTong)
document.querySelector("#btnDemSo").addEventListener("click", demSo)
document.querySelector("#btnSmallestNumber").addEventListener("click", soNhoNhat)
document.querySelector("#positiveNum").addEventListener("click", soDuongNhoNhat)
document.querySelector("#lastEvenNum").addEventListener("click", soChanCuoiCung)
document.querySelector("#changeNum").addEventListener("click", doiCho)
document.querySelector("#sapXep").addEventListener("click", sapXep)
document.querySelector("#btnSoNguyenTo").addEventListener("click", soNguyenTo)
document.querySelector("#addNumInt").addEventListener("click", addNewArr)
document.querySelector("#btnCompare").addEventListener("click", Compare)



console.log(Number.isInteger(3.1));

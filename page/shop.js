var proNameList= new Array(
    "Ink Cheongsam"
    ,"Angelica cheongsam"
    ,"Men's Zhongshan suit"
    ,"Zhongshan women's wear"
    ,"Moon cheongsam"
    ,"Colorful cheongsam"
    ,"Yayue cheongsam"
    ,"Danqing cheongsam"
    ,"Qing Yao cheongsam"
    ,"Bony cheongsam");
var proImgList = new Array("imgs/product-01.jpg"
    ,"imgs/product-02.jpg"
    ,"imgs/product-03.jpg"
    ,"imgs/product-04.jpg"
    ,"imgs/product-05.jpg"
    ,"imgs/product-06.jpg"
    ,"imgs/product-07.jpg"
    ,"imgs/product-08.jpg"
    ,"imgs/product-09.jpg"
    ,"imgs/product-010.jpg");
var proCategoryList = new Array(
    "cheongsam"
    ,"cheongsam"
    ,"chinesetunicsuit"
    ,"chinesetunicsuit"
    ,"hanfu"
    ,"cheongsam"
    ,"cheongsam"
    ,"hanfu"
    ,"hanfu"
    ,"hanfu"
    ,"hanfu");
var proContentList = new Array("The Chinese cheongsam with ink style is simple and generous"
    ,"Angelica dahurica, sacred and beautiful"
    ,"Zhongshan suit is suitable for daily travel"
    ,"Zhongshan suit is suitable for daily travel"
    ,"Fresh and beautiful Moon cheongsam"
    ,"Flowers mean beauty"
    ,"Elegant, generous and intellectually beautiful"
    ,"The green of life blooms in spring"
    ,"A suit of Hanfu suit suitable for spring travel"
    ,"Heroic, sassy, concise and generous");
var proPriceList = new Array(
    "99"
    ,"89.9"
    ,"78"
    ,"78"
    ,"108"
    ,"118"
    ,"108"
    ,"99"
    ,"69.9"
    ,"79.9"
    ,"119");

function addToCart(id,num){
    if(confirm("Add to cart?")){
        if(sessionStorage.getItem("proNumber"+Number(id))){
            sessionStorage.setItem("proNumber"+Number(id)
                ,(Number(sessionStorage.getItem("proNumber1"))+Number(num)));
        }else {
            sessionStorage.setItem("proNumber" + Number(id), Number(num));
        }
    }

}

function removePro(id){
    if(confirm("Remove from cart?")) {
        sessionStorage.removeItem("proNumber" + Number(id));
        location.reload();
    }
}

function loadProduct(){
    var url= location.href;
    var id='';
    if (url.indexOf("?") != -1) {
        urls = url.split("?");
        var str = urls[1]
        console.log(str)
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            if (strs[i].split("=")[0].indexOf('proId') >= 0) {
                id = strs[i].split("=")[1];
                console.log(id)
                var htm='<img class="proImg" src="'+proImgList[id-1]+'">\n' +
                    '    <div class="proInfo">\n' +
                    '        <div class="proName">\n' +
                    '            '+proNameList[id-1]+'\n' +
                    '        </div>\n' +
                    '        <div class="proContent">\n' +
                    '            '+proContentList[id-1]+'\n' +
                    '        </div>\n' +
                    '        <div class="proPrice">AUD '+proPriceList[id-1]+'</div>\n' +
                    '        <div class="proSize">size:<input id="proSize" type="number" value="0"></div>\n' +
                    '        <div class="proBtn"><button onclick="addToCart('+id+',document.getElementById(\'proSize\').value)">Add to Cart</button></div>\n' +
                    '    </div>';
                document.getElementById("proInfo").innerHTML=htm;
            }
        }
    }
}

function loadShop(){
    var url= location.href;
    var category='';
    var proName='';
    if (url.indexOf("?") != -1) {
        urls = url.split("?");
        var str = urls[1]
        console.log(str)
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            if(strs[i].split("=")[0].indexOf('category')>=0){
                category = strs[i].split("=")[1];
            }else if(strs[i].split("=")[0].indexOf('proName')>=0){
                proName = strs[i].split("=")[1];
            }
        }
    }
    console.log(category);
    console.log(proName);
    var htm="";
    for(var i=1;i<proNameList.length+1;i++){
        console.log(proNameList[i-1].indexOf(proName));
        if(proCategoryList[i-1].indexOf(category)>=0&proNameList[i-1].indexOf(proName)>=0){
            htm+='<div class="product" onclick="window.location=\'product.html?proId='+i+'\'">\n' +
                '            <div class="proImg">\n' +
                '                <img src="'+proImgList[i-1]+'">\n' +
                '            </div>\n' +
                '            <div class="proContent">\n' +
                '                <div class="ProName">\n' +
                '                    '+proNameList[i-1]+'\n' +
                '                </div>\n' +
                '                <div class="ProPrice">\n' +
                '                    $'+proPriceList[i-1]+'\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>';
        }
    }

    //loadProduct
    document.getElementById("productList").innerHTML=htm;
    if(document.getElementById(category)){
        document.getElementById(category).style.cssText="color: orange;";
    }else{
        document.getElementById("All").style.cssText="color: orange;";
    }

}

//load cart
function loadCart(){
    var subtotal=0;
    for(var i=1;i<proNameList.length+1;i++){
        if(sessionStorage.getItem("proNumber"+Number(i))){
            console.log(sessionStorage.getItem("proNumber"+Number(i)));
            var tbody = document.querySelector('table>tbody');
            var row = tbody.insertRow(tbody.rows.length);
            row.innerHTML=
                '<tr class="table_row">\n' +
                '        <td><img src="'+proImgList[i-1]+'"></td>\n' +
                '        <td>'+proNameList[i-1]+'</td>\n' +
                '        <td>AUD '+proPriceList[i-1]+'</td>\n' +
                '        <td><input type="number" min="1" value="'+sessionStorage.getItem("proNumber"+Number(i))+'"/></td>\n' +
                '        <td>AUD '+multiply_number(proPriceList[i-1],sessionStorage.getItem("proNumber"+Number(i)))+'</td>\n' +
                '        <td><button style="background: coral;" onclick="removePro('+i+')">REMOVE</button></td>\n'+
                '    </tr>';
            subtotal = add_number(subtotal,multiply_number(proPriceList[i-1],sessionStorage.getItem("proNumber"+Number(i))));
        }
    }
    document.getElementById("subtotal").innerText=subtotal;

}

function checkout(){
    alert("You are not able to accept online\n" +
        "payments!You should contact us to complete your purchase");
}

// add
function add_number(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}
// multiply
function multiply_number(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
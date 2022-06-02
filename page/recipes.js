var proNameList= new Array(
    "菜谱1"
    ,"菜谱2"
    ,"菜谱3"
    ,"菜谱4"
    );
var proImgList = new Array("imgs/product-01.jpg"
    ,"imgs/product-02.jpg"
    ,"imgs/product-03.jpg"
    ,"imgs/product-04.jpg"
    );
var proMaterialList = new Array(
    "<h2>食材</h2><p>鸡蛋</p><p>面粉</p>"
    ,"<h2>食材</h2><p>鸡蛋</p><p>面粉</p>"
    ,"<h2>食材</h2><p>鸡蛋</p><p>面粉</p>"
    ,"<h2>食材</h2><p>鸡蛋</p><p>面粉</p>"
    );
var proContentList = new Array(
    "<h2>制作步骤</h2>" +
    "<p>1.步骤1</p>"+
    "<p>2.步骤2</p>"+
    "<p>3.步骤3</p>"
    ,"<h2>制作步骤</h2>" +
    "<p>1.步骤1</p>"+
    "<p>2.步骤2</p>"+
    "<p>3.步骤3</p>"
    ,"<h2>制作步骤</h2>" +
    "<p>1.步骤1</p>"+
    "<p>2.步骤2</p>"+
    "<p>3.步骤3</p>"
    ,"<h2>制作步骤</h2>" +
    "<p>1.步骤1</p>"+
    "<p>2.步骤2</p>"+
    "<p>3.步骤3</p>"
);

function loadRecipeDeatail(){
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
                var htm='<div id="proInfo">\n' +
                    '    <div class="proName">\n' +
                    '        '+proNameList[id-1]+'\n' +
                    '    </div>\n' +
                    '    <img class="proImg" src="'+proImgList[id-1]+'">\n' +
                    '    <div class="proInfo">\n' +
                    '            <div class="proContent">\n' +proMaterialList[id-1]+
                    '            </div>\n' +
                    '            <div class="proContent">\n' +proContentList[id-1]+
                    '            </div>\n' +
                    '    </div>';
                document.getElementById("product").innerHTML=htm;
            }
        }
    }
}

function loadRecipe(){
    var htm="";
    for(var i=1;i<proNameList.length+1;i++){
        htm+='<div class="product" onclick="window.location=\'product1.html?proId='+i+'\'">\n' +
            '            <div class="proImg">\n' +
            '                <img src="'+proImgList[i-1]+'">\n' +
            '            </div>\n' +
            '            <div class="proContent">\n' +
            '                <div class="ProName">\n' +
            '                    '+proNameList[i-1]+'\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>';
    }
    //loadProduct
    document.getElementById("productList").innerHTML=htm;
}
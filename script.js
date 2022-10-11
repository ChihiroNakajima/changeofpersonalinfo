'use strict'
//◎入力欄に何かを入力する（その１）


//値の入力規則を設定する


//◎webページ上のbuttonを押す（その２）
function pushButton(){
    // checkMissing();
    // makeArray();
        const inputArray = makeArray();
    makeCsvFile(inputArray);
    preparMail();

    //ボタンを押したら下記を実行するようにpushButton()を実装する
    //それに合わせてindex.htmlも少し変更必要

    console.log("checkMissing");
    console.log("makeArray");
    console.log("makeCsvFile");
    console.log("prepareMail");
}
const target = document.getElementById("button");
console.log(target)
target.addEventListener("click",pushButton);

/* <button class="favorite styled" */
        // type="button"></button>

//未記入項目があったら、エラーを表示する
function checkMissing(){

}

//部・室・G・ロケ名称を自動表示する
//"currentDivNumber"（所属コード）が入力されたら、
//divisionNames.jsから"currentDivNumber"と合致するNumberを探して、
//Div,Dept,Grp,Locの4つをとる
//検索ボタン1（現在）
const serch1 = document.getElementById("serchButton1");
serch1.addEventListener("click",fillCurrentDivNames);

function fillCurrentDivNames(){
    const divCode = document.getElementById("currentDivNumber");
    const divName = document.getElementById("currentDivName");
    const deptName = document.getElementById("currentDeptName");
    const grpName = document.getElementById("currentGrpName");
    const locName = document.getElementById("currentLocName");

    for (const object of divisionNames){
        if(divCode.value === object.Number){
            divName.value = object.Div
            deptName.value = object.Dept
            grpName.value = object.Grp
            locName.value = object.Loc
        }
            
    }
}
//検索ボタン2（変更後）
const serch2 = document.getElementById("serchButton2");
serch2.addEventListener("click",fillChangedDivNames);

function fillChangedDivNames(){
    const divCode = document.getElementById("changedDivNumber");
    const divName = document.getElementById("changedDivName");
    const deptName = document.getElementById("changedDeptName");
    const grpName = document.getElementById("changedGrpName");
    const locName = document.getElementById("changedLocName");

    for (const object of divisionNames){
        if(divCode.value === object.Number){
            divName.value = object.Div
            deptName.value = object.Dept
            grpName.value = object.Grp
            locName.value = object.Loc
        }
            
    }
}

//全ての入力値を配列にする
function makeArray(){
    const result=[];

    const personInfo = document.getElementsByClassName("personInfo");
    console.log(personInfo)
    for (const element of personInfo){
        result.push(element.value)
        if (element.value==="on"){
            result.push(element.checked)
        }
    }

    const current = document.getElementsByClassName("current");
    console.log(current)
    for (const element of current){
        result.push(element.value)
        if (element.value==="on"){
            result.push(element.checked)
        }
    }

    const changed = document.getElementsByClassName("changed");
    console.log(changed)
    for (const element of changed){
        result.push(element.value)
        if (element.value==="on"){
            result.push(element.checked)
        }
    }
    // result.push(currentSyozokuCode.value)
    console.log(result)
    return result;
}


//CSVファイルを作成し、ファイルを保存する
function makeCsvFile(array){
    //作った二次元配列をCSV文字列に直す。
    // 日本語出力させるために、BOM（Byte Order Mark）を指定。UTF-8の場合は「0xEF 0xBB 0xBF」という3バイト
    let csvString = ""; 
    var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    console.log(array)
    for (let i=0;i< array.length;i++){
        csvString += array[i]+","
    }
    console.log(typeof csvString)

    //ファイル名の指定
    let fileName = "test.csv";

//CSVのバイナリデータを作る
    let blob = new Blob([bom, csvString],{type: "text/csv"});
    let uri  = URL.createObjectURL(blob)

    //リンクタグを作る
    let link        = document.createElement("a");
    link.download   = fileName;
    link.href       = uri;

//作ったリンクタグをクリックさせる
    console.log(uri)
    console.log(link)
    document.body.appendChild(link);
    link.click();

//クリックしたら即リンクタグを消す
    document.body.removeChild(link);
    // delete link;

}


//Outlookを立ち上げる
//メールに保存したファイルを添付し、件名を指定し、メールアドレスにchihiro_nakajimaを入力する
function preparMail(){
    //    メールに記載する情報を格納する変数
        let jcode = document.getElementById("Jcode").value
        let address, subject, body, hiddenData,attachment;
        // let sendmail = document.getElementById('mail');
    
        // sendmail.onclick = function() {
    
            // メールに記載したい情報をhiddenタグから取得
            hiddenData = document.getElementById('hidden_data').value;
            address = 'chihiro_yamaoka_aa@mail.toyota.co.jp';
            // ccAddress = 'chihiro_yamaoka_aa@mail.toyota.co.jp';
            subject = '【CSV送付】人事変更の連絡'+ jcode;
            body = 'ダウンロードしたCSVファイルを添付してください' + '%0D%0A' + "本文は入力せず、このまま送信してください" + '%0D%0A'+ hiddenData; // 「'%0D%0A'」を入れて改行
            attachment = 'blob:null/253c1cf1-90b6-42f3-acb8-8690dfd80e7f'
            // 'blob:null/253c1cf1-90b6-42f3-acb8-8690dfd80e7f'
            // uri
            // 「'?cc='」部分でCC追加
            location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body ;//+ '?attachment=' + attachment 
            // location.href = 'mailto:' + address + '?cc=' + ccAddress + '&subject=' + subject + '&body=' + body;
        };
    

// };


//◎メールの送信ボタンを押す（アウトルックのアプリ内の機能）


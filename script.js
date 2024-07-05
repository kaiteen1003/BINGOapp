'use strict';

// フォームが送信される時のイベントリスナーを追加
document.getElementById('form').onsubmit = function (event) {
    // デフォルトのフォーム送信動作を防止
    event.preventDefault();
    
    // フォーム内の入力値を取得
    let inputForm = document.getElementById('form').content.value;
    
    // 取得した入力値を出力エリアに表示
    document.getElementById('output').textContent = `${inputForm}`;
}



  


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

// ここにゲームの開始ロジックを追加します
// 例えば、ゲームの初期化や、ゲームの開始ボタンを押したときの処理などを追加できます。

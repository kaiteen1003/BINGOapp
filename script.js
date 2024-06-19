document.addEventListener('DOMContentLoaded', () => {
    // 初期画面の要素を取得
    const initialScreen = document.getElementById('initialScreen');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    // STARTボタンをクリックしたときのイベントリスナー
    document.getElementById('startButton').addEventListener('click', () => {
        // 初期画面を非表示にし、画面遷移先1を表示
        initialScreen.style.display = 'none';
        screen1.style.display = 'block';
    });

    // 画面遷移先1の次へボタンをクリックしたときのイベントリスナー
    document.getElementById('nextButton1').addEventListener('click', () => {
        // 画面遷移先1を非表示にし、画面遷移先2を表示
        screen1.style.display = 'none';
        screen2.style.display = 'block';
    });
});

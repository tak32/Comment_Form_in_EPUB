
function popup() {
  var p = document.getElementById(this.id + '-popup');
  var top_of_el = this.offsetTop;
  p.style.opacity = 1;
  var new_y = p.offsetTop - top_of_el - 30;
  p.style.webkitTransform = 'translateY(-' + new_y + 'px) translateX(' + this.offsetLeft + 'px)';
}
function dismiss() {
  this.style.opacity = 0;
  var el = this;
  setTimeout(function () {
    el.style.webkitTransform = null;
  }, 1000);
}

/* Register the events */
var terms = document.getElementsByClassName('term');
for (var i=0; i < terms.length; i++) {
  terms[i].addEventListener('click', popup);
}
var popups = document.getElementsByClassName('popup');
for (var i=0; i < popups.length; i++) {
  popups[i].addEventListener('click', dismiss);
}

/* コメント投稿の表示・非表示 */
//コメント投稿欄 ID と、表示・非表示の各アドレスのIDをJSファイルに登録
var elem2_1 = document.getElementById("id_5");
var elem2_2 = document.getElementById("link_view2");
var elem2_3 = document.getElementById("link_hidden2");
//コメント欄の表示・非表示の制御を行う。
function toggle_view2() {
  //.style.display の値を変えることで、様々な表示のすることが可能。
  elem2_1.style.display = "";
  elem2_2.style.display = "none";
  elem2_3.style.display = "";
}
function toggle_hidden2() {
  elem2_1.style.display = "none";
  elem2_2.style.display = "";
  elem2_3.style.display = "none";
}

var commentForm = document.getElementById("comment-form");

commentForm.addEventListener("submit", check, false);

function check(event){
    event.preventDefault();

	var flag = 0;
	// 設定開始（必須にする項目を設定してください）
	if(commentForm.field1.value == ""){ // 「お名前」の入力をチェック
		flag = 1;
	}
	else if(commentForm.field3.value == ""){ // 「コメント」の入力をチェック
		flag = 1;
	}

	// 設定終了
	if(flag){
		window.alert('必須項目に未入力がありました'); // 入力漏れがあれば警告ダイアログを表示
		return false; // 送信を中止
	}
	else{
		return true; // 送信を実行
	}
}

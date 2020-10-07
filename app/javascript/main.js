function typing(){
  function setWord() {
    // word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    let num = Math.floor( Math.random() * words.length ) ;
    // word = words[num];
    word = words.splice(num, 1)[0];
    // hiraWord = hiraWords[num]
    hiraWord = hiraWords.splice(num, 1)[0];
    targetHira.textContent = hiraWord;
    target.textContent = word;
    loc = 0;
  }
  const hiraWords = [
    '昨日の敵は今日の友',
    '明日は明日の風が吹く',
    '海老で鯛を釣る',
    '木を見て森を見ず',
    '備えあれば憂いなし',
    '情けは人の為ならず',
    '二階から目薬',
    '馬子にも衣装',
    '餅は餅屋',
  ];

  const words = [
    'kinounotekihakyounotomo',
    'asitahaasitanokazegahuku',
    'ebidetaiwoturu',
    'kiwomitemoriwomizu',
    'sonaearebaureinasi',
    'nasakehahitonotamenarazu',
    'nikaikaramegusuri',
    'magonimoisyou',
    'motihamotiya',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
  const targetHira = document.getElementById('target-hira')

  document.addEventListener('keydown', e => {
    if (isPlaying === true) {
      return;
    }
    if (e.key === ' ' ) {

    isPlaying = true;
    startTime = Date.now();
    setWord();
    };
  });
  
  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        const ranking = document.getElementById('ranking');
        const nickname = document.getElementById('nickname'); 
        const second = document.getElementById('second');
        const btn = document.getElementById('btn');
        result.textContent = `終了！ ${elapsedTime}秒でした！`;
        ranking.textContent = "ニックネームを登録してランキングを見よう！";
        nickname.removeAttribute("style","border: none;")
        // nickname.removeAttribute("style","width: 0px")
        nickname.setAttribute("style", "width: 50px;")
        nickname.setAttribute("style", "padding: 5px;")
        btn.setAttribute("style", "width: 50px;")
        btn.setAttribute("style", "padding: 5px 10px;")
        second.setAttribute("value", elapsedTime)
        return;
      }

      setWord();
    }
  });
}

window.addEventListener('load', typing);
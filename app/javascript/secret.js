function typing(){
  function setWord() {
    // word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    let num = Math.floor( Math.random() * words.length ) ;
    word = words[num];
    hiraWord = hiraWords[num]
    targetHira.textContent = hiraWord;
    target.textContent = word;
    loc = 0;
  }
  const hiraWords = [
    '昨日の敵は今日の友',
    '明日は明日の風が吹く',
    '嘘も方便',
    '海老で鯛を釣る',
    '木を見て森を見ず',
    '備えあれば憂いなし',
    '情けは人の為ならず',
    '二階から目薬',
    '馬子にも衣装',
    '餅は餅屋',
    '病は気から',
  ];

  const words = [
    'kinounotekihakyounotomo',
    'asitahaasitanokazegahuku',
    'usomohoubenn',
    'ebidetaiwoturu',
    'kiwomitemoriwomizu',
    'sonaearebaureinasi',
    'nasakehahitonotamenarazu',
    'nikaikaramegusuri',
    'magonimoisyou',
    'motihamotiya',
    'yamaihakikara',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('mark');
  const targetHira = document.getElementById('mark-hira')

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    // if (e.key !== word[loc]) {
    //   return;
    // }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }

      setWord();
    }
  });
}

window.addEventListener('load', typing);
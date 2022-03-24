//吸った本数＝現在の年齢ー吸い始めた年齢＊１日あたりの平均

//縮んだ寿命＝吸った本数*5分30秒

//これまでに使った金額＝吸った本数
    //現在年齢ー吸い始めた年齢
    function calc(age,smoke,now_age) {
        const smokes_value = document.getElementById('smokes').value = Math.round((now_age - age) * 365*smoke);
        
        const lows_value = document.getElementById('lows').value = Math.round(smokes_value * 5 /360);
      
        const moneys_value = document.getElementById('moneys').value = Math.round(smokes_value / 20 * 500);

    }

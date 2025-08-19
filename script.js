let player = {hp: 20, class: null};
let enemy = {hp: 20, class: null};

function chooseClass(cls){
  player.class = cls;
  document.getElementById('battlefield').innerHTML = cls + ' 선택됨! 전투 시작!';
}

function useBigRip(){
  if(player.class === '마법사'){
    player.hp = 1;
    enemy.hp = 0;
    alert('빅 립 발동! 마법사의 체력이 1로 고정, 상대 즉사!');
  }
}
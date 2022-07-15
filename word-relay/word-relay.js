const number = parseInt(prompt('몇 명이 참가하나요?'));

if (number) {
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $word = document.querySelector('#word');
  const $order = document.querySelector('#order');
  let word; // 제시어
  let newWord; // 새로 입력한 단어

  const onClickButton = () => {
    if (!word || word[word.length - 1] === newWord[0]) { // 제시어가 비어 있는가? || 제시어와 새로 입력한 단어 첫번째 단어와 일치하는 가?
      word = newWord; // 입력한 단어가 제시어가 된다.
      $word.textContent = word;
      const order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order = textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else { //올바르지 않은가
      alert('올바르지 않은 단어입니다!');
    }
    $input.value = '';
    $input.focus();
  };
  const onInput = (event) => {
    newWord = event.target.value;
  };

  $button.addEventListener('click', onClickButton);
  $input.addEventListener('input', onInput);

  // 어떤 동작을 실행하고 난 뒤에 연이어서 실행되는 함수 : 콜백함수
}
// (가) 부분에 어떤 문자열을 넣으면 alert 창이 실행될까요?
// 단, eval 의 실행을 막은 사이트들도 있으므로 calculator.html 을 띄운 창의 콘솔에서 실행해야 합니다.

const str = "(가)";
eval('a' + str + 't("eval은 위험해요")'); // "l"
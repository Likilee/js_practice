let ask = (question) => {
  return confirm(question) ? alert("동의하셨습니다!") : alert("취소 클릭!");
};

debugger;
ask("동의?");

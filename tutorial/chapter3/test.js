describe("pow", function () {
  //   before(() => alert("테스트 시작"));
  describe("x를 세번 곱합니다.", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}의 세제곱은 ${expected}입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let i = 1; i < 10; ++i) {
      makeTest(i);
    }
  });

  it("n이 음수일 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, -1));
  });
  it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

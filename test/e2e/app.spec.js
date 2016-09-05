describe("app", function() {
  it("should say 'Hello World' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World");
  });

  it("should say 'Hello world' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World");
  });
});

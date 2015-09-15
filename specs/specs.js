describe("Ticket", function() {
  it("creates a new ticket with the given specifications", function() {
    var testTicket = new Ticket("Mazerunner: Scorch Trials", "7:00pm", "18");
    expect(testTicket.movieName).to.equal("Mazerunner: Scorch Trials");
    expect(testTicket.movieTime).to.equal("7:00pm");
    expect(testTicket.userAge).to.equal("18");
  });
});

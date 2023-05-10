const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the correct hash when given empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the 'partitionKey' when given input 'partitionKey'", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "partitionKey"
    });
    expect(trivialKey).toBe("partitionKey");
  });


  it("Returns the 'partitionKey' hash when given input 'partitionKey' is huge", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus quis a. Nam numquam libero natus cupiditate similique nobis assumenda itaque quidem voluptas excepturi repudiandae maxime necessitatibus at, exercitationem illum, eveniet quasi architecto ut? Odit fugit tempora commodi libero corporis explicabo dolorum repellendus, assumenda, saepe, voluptatem quia omnis atque odio aliquid dignissimos rem sunt dolore cum iste aperiam! Nesciunt ea sequi ut minus dolorem vel, earum dolore doloremque atque temporibus reiciendis ipsum error ipsa provident odit voluptatibus, facere officia consequuntur commodi repellat. Atque, tenetur id? Molestias beatae fugiat cupiditate odit excepturi libero neque pariatur totam? Esse voluptatem consequuntur vero mollitia. Fuga asperiores aspernatur earum ducimus, et cumque eius quidem voluptatem voluptate eligendi esse natus at ex vero assumenda repellat molestiae distinctio possimus voluptatum iste libero debitis. Eos ex aut odit est ipsum iusto a, impedit, ratione molestias temporibus enim nulla voluptates, accusamus perferendis fugit quas. Alias suscipit nostrum iusto dolorum libero, nihil provident quibusdam minus quos non nisi quis, accusamus odit, adipisci illum modi id labore architecto omnis minima? Officiis sapiente sunt hic officia voluptas possimus amet unde in ipsam earum! Ex laboriosam vitae eveniet voluptates ipsum dolorum! Numquam aperiam praesentium doloribus animi eum. Atque, iure cum incidunt sint natus numquam accusamus voluptas soluta voluptatum beatae harum tempore facilis in doloribus deserunt ratione magnam necessitatibus! Esse, porro nam consequatur modi beatae magni illum! Id tenetur ut, culpa repellat quam assumenda quae, qui non reprehenderit, sunt nisi fugit. Neque exercitationem tempore consequuntur tenetur eos totam voluptatem, quos illo fugit necessitatibus, excepturi vitae blanditiis eius repudiandae officiis unde?"});
    expect(trivialKey).toBe("7cde34e5ce3ed7067ad8a9e227c4fbc3406a116a6c69842a8e35f3c62b22d45343cff07c512ff522f7bb304c115a0bd1ab32236907d7166151a53a9fcddbd13c");
  });

  it("Returns the `partitionKey` value when given empty object as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: {} });
    expect(trivialKey).toBe("{}");
  });
});

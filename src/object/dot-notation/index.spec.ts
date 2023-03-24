import { dotNotation } from "./index.js";

describe("dot notation", () => {
  it("should convert object to dot notation", () => {
    const obj = {
      name: "john",
      locaton: {
        lat: "-7.123456",
        lng: "112.123456",
      },
      hobbies: ["basketball", "video game"],
      friends: [
        {
          name: "jane",
          age: 20,
        },
        {
          name: "charles",
          age: 23,
        },
      ],
    };

    const result = dotNotation(obj);

    expect(result).toStrictEqual({
      "friends.0.age": 20,
      "friends.0.name": "jane",
      "friends.1.age": 23,
      "friends.1.name": "charles",
      "hobbies.0": "basketball",
      "hobbies.1": "video game",
      "locaton.lat": "-7.123456",
      "locaton.lng": "112.123456",
      name: "john",
    });
  });
});

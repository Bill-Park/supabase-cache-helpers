import { toHasMorePaginationCacheData } from "../../src/mutate/transformers";

describe("toHasMorePaginationCacheData", () => {
  it("should set hasMore to false if there are no items in the cache currently", async () => {
    expect(toHasMorePaginationCacheData([{ test: "a" }], [], 21)).toEqual([
      {
        data: [
          {
            test: "a",
          },
        ],
        hasMore: false,
      },
    ]);
  });
});

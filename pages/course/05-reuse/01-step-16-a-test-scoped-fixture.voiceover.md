A fixture keeps preparation and cleanup in one place. The cart fixture in this lesson is the shape.

Before the test uses the cart, the fixture creates an API client as the synthetic user Alex, posts a new cart, and checks for status 201. It then calls use, and hands the test that client and the new cart id.

After the test, the finally block deletes that cart. It accepts 204 or 404, because a test that already deleted the cart should still finish cleanup. Then it disposes the client.

Each test gets its own cart id, even though the token names the same person. A browser context isolates cookies. It does not isolate records on the server. That is why two tests must not share one mutable cart.

You are done when the same assertions still pass if the tests run in either order.

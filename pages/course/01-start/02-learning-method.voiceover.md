This is the way every later lesson expects you to work.

First, understand. Read the named section and predict what the example will print before you run it.

Second, practice. Run it, change one input, and explain the result in your own words.

Third, use AI critically. Attempt the task first. Ask for a hint, an explanation, or a review before you ask for generated code.

Fourth, prove it. Cause a meaningful failure and finish the independent exercise without an AI-written answer.

Fifth, reflect. Write down what you corrected and commit locally. Publish only after you have reviewed for privacy.

The test oracle is the agreed requirement, the contract, or a value you calculated yourself. The application may be wrong. The model is not the oracle. Changing an expected result only proves the assertion ran. To prove you can catch a defect, seed a local product bug, leave the correct assertion alone, watch it fail, then restore the product.

Do not accept unexplained code, weaker assertions, arbitrary sleeps, or a skip added only to get a green result. Do not put a live model call inside ordinary regression tests. AI can help you write the test. Continuous integration has to pass without a model and without a subscription.

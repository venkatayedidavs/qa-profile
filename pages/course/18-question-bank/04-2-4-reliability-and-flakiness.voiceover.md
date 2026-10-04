This is the spoken shape of the question, a test passes locally and fails in CI. Aim for about a minute, then stop.

Start from the evidence of the failing run, not from a guess.

Open the trace. Find the failing action. Compare the DOM snapshot before that action with the snapshot after it. Check the network panel for a call that was still pending or that failed. Check the console for an application error.

Then classify it. An environment difference. Timing. A data collision. Test pollution. Or a real product defect.

Fix that cause. Retries stay a net for infrastructure noise. They are not the repair. If a test keeps needing a retry, quarantine it and track it as a defect.

Practise this order out loud. What the test intended. What the DOM showed at the failing action. What the network did. Then the fix.

# Trying to make AI more human-like in conversation

I'm trying to implement the ability to have the user and agent send multiple messages, because let's face it, in reality, when was the last conversation you had with someone that was strict a 1:1 message back-n-forth?

## Notes

#### 25th March 2025

I've got the OpenAI API hooked up in a basic functions.

This is my first theoretical possible solution:

> Firstly, make sure that the system prompt explains to the agent that if they want to send multiple messages to the user, they must separate them in the response somehow - maybe with a double line break
>
> 1. User sends a message in the UI
> 2. If the user's message preview stays idle for 10 seconds, client sends message to BE
>    - If user starts typing and/or sends a message, reset the 10 second timer
> 3. BE sends message to AI
> 4. BE receives response from AI
> 5. BE serves agents message to client
> 6. Client holds message for random time between X and Y minutes
> 7. Client hydrates the UI (sending the message to the user)
>    - If the user has content in their message preview, client waits until the user has had an empty preview for 20 consecutive seconds before hydrating the UI
>    - If user sends a new message before hydration, go back to step 2
>    - If the AI has structured replies into multiple messages, send each message at random intervals between 3.00 and 8.00 seconds apart

I feel like many features can be built on top of a few steps. For example, the random timings in Step 6 could be altered to respond more human-like to the behaviour of the user - like if the user stays on the messaging screen then maybe the agent can assume taht the user wants to keep the conversation going right now and can therefore deliver the message instantly.

It's also worth mentioning rn that these timings and ideas are based off of pure f\*cking guess work atm, so don't @ me about what pshycology papers I've got my data from... yet.

#### 29th March 2025

Did a bit of work on the whiteboard last night to help me visualise the system, hopefully that makes building it easier.

![System diagram on a whiteboard](./system-diagram-v2.png)

Also, I asked GPT-4o to do some Deep Research on human messaging patterns (bit of HCI goodness). [The research paper it delivered](https://chatgpt.com/share/67e72518-895c-8000-87a1-e7aaab2da431) was nothing short of remarkable tbf. I think I can use these findings to influence the interactions of this multi-message-flowing-human-like system (really need to think of a name for it - could be worse I suppose, could have some cache to invalidate).

> EDIT: I've just used [excalidraw](https://excalidraw.com/#json=DzeATzdAO46U7joR384XF,dL7MMSPhFEqgZfoWkjPhvg) to digitise the diagram so it's easier to read

![Digitised system diagram](./system-diagram-v3.png)

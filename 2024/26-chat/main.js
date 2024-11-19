const story =
{
    text: "We don't have a lot of time left. Time just runs out so fast.",
    reply: {
        text: "I got the kids and our bags in the car. All that's left is you.",
        reply: {
            text: "I'll find you when I can. I have to hide for now. Stay safe until then. We'll meet at Tree Pine.",
            reply: {
                text: "I'll be waiting for you. I love you. Please stay safe",
                reply: {
                    text: "I love you too. I'll be there soon. I promise.",
                }
            }
        }
    }
}

const story2 =
{
    text: "I'm sorry, I can't make it. I have to go.",
    reply: {
        text: "We will be waiting for you as long as it takes. Don't give up, and we won't give up on you.",
        reply: {
            text: "This isn't like before. I think this might be it for me.",
            reply: {
                text: "What are you talking about? What happened?",
                reply: {
                    text: "Listen, I got hurt real bad. I'm sorry. I know what I said before, and I'm sorry. I didn't mean it.",
                    reply: {
                        text: "It's ok. I forgive you. Just make it back. Please.",
                        reply: {
                            text: "Please..."
                        }
                    }
                }
            }
        }
    }
}

const story3 = {
    text: "Do you think you can just leave like that? What's wrong with you. I thought we knew you better. How could you do this to us.",
    reply: {
        text: "Some things can't be easily explained. I can't say much more about it.",
        reply: {
            text: "That's it? That's all we get? At the end, this is all who you are. Just a coward.",
            reply: {
                text: "I'm just trying to protect you.",
                reply : {
                    text: "You're just protecting yourself",
                    reply: {
                        text: "Goodbye then. Forever"
                    }
                }
            }
        }
    }
}

const story4 = {
    text: "I need your help",
    reply: {
        text: "With what?",
        reply: {
            text: "Same thing, different day. I need to get out of here.",
            reply: {
                text: "I can't help",
                reply: {
                    text: "Why not?",
                    reply: {
                        text: "I just can't",
                        reply: {
                            text: "Yes you can. You owe me. You owe me this much.",
                            reply: {
                                text: "You can't keep using that against me",
                                reply: {
                                    text: "You know it's true. You know why. I can't make you do anything, but if you're the person I think you are, you'll show up.",
                                    reply: {
                                        text: "You better be there on time",
                                    }
                                }
                            }
                        }
                    }
                }
            }           
        }
    }
}

let toggle = false;

function displayStory(story, parentElement = document.body) {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = story.text;

    // Append the summary to the details
    details.appendChild(summary);
    //add class called 'even' to details
    details.classList.add(toggle ? 'even' : 'odd');
    toggle = !toggle;

    // Append the details to the parent element
    parentElement.appendChild(details);

    // If there's a reply, recursively call the function
    if (story.reply) {
        displayStory(story.reply, details);
    }
}

const chat1 = document.querySelector('.chat-1');
const chat2 = document.querySelector('.chat-2');
const chat3 = document.querySelector('.chat-3');
const chat4 = document.querySelector('.chat-4');
displayStory(story, chat1);
displayStory(story2, chat2);
displayStory(story3, chat3);
displayStory(story4, chat4);
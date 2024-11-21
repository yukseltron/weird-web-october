document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from actually submitting

        // Select all input fields within the form
        const inputs = form.querySelectorAll('input');

        inputs.forEach((input) => {
        // Create a new <p> element
        const paragraph = document.createElement('p');
        const analysis = document.createElement('p');
        paragraph.textContent = `${input.previousElementSibling.textContent} ${input.value}`;
        switch (input.name) {
            case 'name':
                analysis.textContent = analyzeName(input.value);
                break;
            case 'pseudonym':
                analysis.textContent = analyzePseudonym(input.value);
                break;
            case 'age':
                analysis.textContent = analyzeAge(Number(input.value));
                break;
            case 'blood':
                analysis.textContent = analyzeBlood(input.value);
                break;
            case 'limbs':
                analysis.textContent = analyzeLimbs(Number(input.value));
                break;
            case 'eyes':
                analysis.textContent = analyzeEyes(Number(input.value));
                break;
            case 'ghosts':
                analysis.textContent = analyzeGhosts(Number(input.value));
                break;
            case 'planes':
                analysis.textContent = analyzePlanes(Number(input.value));
                break;
            case 'extra':
                analysis.textContent = analyzeExtra(input.value);
                break;
            default:
                analysis.textContent = 'This response may take more time to process.';
                break;
        }

        // Replace the input field with the <p> element
        input.parentElement.replaceChild(paragraph, input);
        paragraph.after(analysis);
        analysis.style.fontStyle = 'italic';
        analysis.style.color = 'gray';
        });

        //remove all labels
        const labels = form.querySelectorAll('label');
        labels.forEach((label) => {
            label.remove();
        });

        // Optionally, replace the submit button with a "thank you" message
        const submitButton = form.querySelector('button[type="submit"]');
        const thankYouMessage = document.createElement('p');
        const reviewMessage = document.createElement('p');
        const enjoyYourTime = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for submitting the form!';
        reviewMessage.textContent = 'Please review your information above and let us know about any mistakes or questions.';
        enjoyYourTime.textContent = ' We hope you enjoy your time at Tree Pine!';
        submitButton.parentElement.replaceChild(thankYouMessage, submitButton);
        thankYouMessage.after(reviewMessage);
        reviewMessage.after(enjoyYourTime);
    });
});

function analyzeName(name) {
    if (name.length < 3) {
        return "That's weirdly short name. I like it. But unfortunately, we're a pentasyllabic society and we'll have to change this name of yours.";
    } else if (name.length > 20) {
        return 'You have a long name, but it is too long for our system. We shall modify this too. Out of necessity, we are all about brevity.';
    } else {
        return 'That is a perfectly acceptable name.';
    }
}

function analyzePseudonym(pseudonym) {
    if (pseudonym.length < 3) {
        return "O_o ||||||| C ||| R ||| A ||| S ||| H ||| |||||||";
    } else if (pseudonym.length > 20) {
        return ':O \\\\\ G \\\ O \\\ N \\\ E \\\ \\\\\\';
    } else {
        return 'X_X //// W /// R /// E /// C /// K /////';
    }
}

function analyzeAge(age) {
    if (age < 18) {
        return 'The world is not ready for you yet...';
    } else if (age < 40) {
        return 'Those bones you feel, will they always heal?';
    } else {
        return 'What have your eyes seen? What secrets do they know?';
    }
}

function analyzeBlood(blood) {
    if (blood.length < 10) {
        return 'This is certainly a bit too low.';
    } else if (blood.length < 100) {
        return "That sounds like it could be a good number!";
    } else {
        return "My, my. You are quite the potential blood donor! You may qualify for the premium."
    }
}

function analyzeLimbs(limbs) {
    if (limbs < 0) {
        return "That is unexpected. How does that even work?"
    } else if (limbs === 0) {
        return 'You are limbless!';
    } else if (limbs < 2) {
        return 'You are a bit short on limbs.';
    } else if (limbs < 4) {
        return 'You have a normal number of limbs.';
    } else {
        return 'You have a surplus of limbs.';
    }
}

function analyzeEyes(eyes) {
    if (eyes < 0) {
        return "There is blindness, but then there is this."
    } else if (eyes === 0) {
        return 'You must be blind.';
    } else if (eyes < 2) {
        return 'Ahoy, matey! Ye cyclops!';
    } else if (eyes === 2) {
        return 'You have a normal number of eyes.';
    } else {
        return 'You have a surplus of eyes.';
    }
}

function analyzeGhosts(ghosts) {
    if (ghosts < 0) {
        return "We have heard of this power. To know when you are being watched. A sort of instinct."
    } else if (ghosts === 0) {
        return 'Well, you are not alone at least. But we understand your disappointment.';
    } else if (ghosts < 10) {
        return 'You have seen a normal number of ghosts. ';
    } else {
        return 'You have seen many ghosts! No wonder you are here.';
    }
}

function analyzePlanes(planes) {
    if (planes < 0) {
        return "You have seen the future. Or the past. Or both."
    } else if (planes === 0) {
        return "Our eyes are not always open. We can help you with that.";
    } else if (planes < 10) {
        return "Thus we welcome you with the same chant engraved on your bones and within our stones."
    } else {
        return "Iä! Iä! Cthulhu fhtagn! Ph'nglui mglw'nfah Cthulhu R'lyeh wgah'nagl fhtagn!";
    }
}

function analyzeExtra(extra) {
    if (extra.length < 10) {
        return 'We appreciate your laconic attitude.';
    } else if (extra.length < 100) {
        return 'You have much to say. We shall listen.';
    } else {
        return 'I see you are a person of many experiences. We shall have to talk more.';
    }
}
  
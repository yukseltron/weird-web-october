function randomEmailAddress() {
    const domains = [
        "geemail.com",
        "yeehaw.com",
        "heatmail.com",
        "outlock.com",
        "gmeil.com",
        "hotmale.com",
        "yawho.com",
        "someotheremail.com",
        "email.com",
        "example.com",
    ]

  return Math.random().toString(36).substring(7) + "@" + domains[Math.floor(Math.random() * domains.length)];
}

function randomSubject() {
    const emailSubjects = [
        "HELLO URGENT",
        "You have won a prize",
        "Important information",
        "You have been selected",
        "Please read",
        "Important notice",
        "Good news",
        "You have won $1,000,000",
        "You have been selected for a survey",
        "Please confirm your email",
        "Important update",
    ]
    return emailSubjects[Math.floor(Math.random() * emailSubjects.length)];
}

function randomMessage() {
    const messages = [
        "Hello, I am a Nigerian prince and I would like to offer you $1,000,000",
        "You have been selected for a survey. Please click the link below",
        "Please confirm your email address",
        "You have won a prize. Please click the link below to claim",
        "Important information. Please read",
        "You have been selected for a survey. Please click the link below",
        "Hello, if you are reading this, you have won $1,000,000",
        "We have confirmed sightings of UFOs. Please read",
        "Are you a winner? Click the link below to find out",
        "Every day, another person wins $1,000,000. Will it be you?",
        "TO ALL PEOPLE WHO HAVE WON $1,000,000, PLEASE READ",
    ]
    return messages[Math.floor(Math.random() * messages.length)];
}


function randomEmail() {
    const email = document.createElement('div');
    email.classList.add('email');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.classList.add('email-header');
    const sender = document.createElement('p');
    sender.classList.add('email-sender');
    sender.textContent = `From: ${randomEmailAddress()}`;
    const date = document.createElement('p');
    date.classList.add('email-date');
    date.textContent = `Date: ${new Date().toISOString().split('T')[0]}`;
    const subject = document.createElement('p');
    subject.classList.add('email-subject');
    subject.textContent = `Subject: ${randomSubject()}`;
    const body = document.createElement('div');
    body.classList.add('email-body');
    const message = document.createElement('p');
    message.classList.add('email-message');
    message.textContent = randomMessage();
    email.appendChild(details);
    details.appendChild(summary);
    summary.appendChild(sender);
    summary.appendChild(date);
    summary.appendChild(subject);
    details.appendChild(body);
    body.appendChild(message);
    document.querySelector('.email-content').appendChild(email);
    const emailCount = document.querySelectorAll('.email').length;
    const notification = document.querySelector('.email-notification-count');
    notification.textContent = emailCount;
    notification.style.backgroundColor = 'red';
}

//create randomEmail every 5 seconds
setInterval(randomEmail, 1000);
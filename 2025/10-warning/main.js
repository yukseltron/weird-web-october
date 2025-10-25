document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contentDiv = document.querySelector(".content div");
  
  const tabContent = {
    1: `
      <p><b>1 --- 11 --- ##63</b></p><br/><br/><br/><br/>
      <hr/>
      <p><b>Record 4 — </b><br/><br/>The dig has run into some unexpected delays. We were supposed to start a few days ago, but now I'm being told the area needs to be re-surveyed. What a load of bull. It's all over some pottery scraps they happened to come across while *illegally* trespassing on my dig site.</p>
      <p>If we don't start digging soon, my creditors won't be happy about the pace of things and shut us down again. I can't risk that happening. Sometimes, progress needs to be forced in order for others to appreciate it. Who cares about some obsolete clay buried by someone no one remembers. It's not our job or priority.</p>
      <hr/>
      <p><b>Record 8 — </b><br/><br/>I've instructed the foreman to go ahead with the dig. Ground shall be broken tomorrow. I made sure those preservationist pests would need an approval process for a resurvey. It took a few favours, but it's the cost of running a business. I suppose I should feel good about this. But I don't, I just want it to be over with.</p>
      <hr/>
      <p><b>Record 10 — </b><br/><br/>Ground broke. Digging continues. I've been so stressed about things that I find myself spending a lot of time at the construction site just to keep an eye on things. These workers, you never know if someone's an infiltrator here to ruin things for me.</p>
      <hr/>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <img src="ruckson-logos.png" />
        <img src="ruck-tech-logo.png" />
      </div>
    `,
    2: `
      <p><b>2 --- 15 --- ##63</b></p><br/><br/><br/><br/>
      <hr/>
      <p><b>Record 12 — </b><br/><br/>I still can't believe how slow things have been. Was this always the case? My creditors are hounding after me. Every delay I've reported has been met with harsher punishments. I can't afford the interest.</p>
      <p>The dig continues but we'll need to go deeper than expected. The foundation required has to be reworked. I've been up all night yelling at my people to get it approved. What idiots I have to work with. They depend so much on me, I wonder what they would do if I was gone.</p>
      <hr/>
      <p><b>Record 13 — </b><br/><br/>I had to return late last night. Truth be told I'm not comfortable at home anymore. I need to be at the dig site, both for work and for my mental health. Despite the warnings from my foreman, I've once again climbed up to the operating crane's cabin to sleep. The sight of the dig is soothing.</p>
      <p>I feel it's unfair how I've been treated up to this point. I work HARD don't I? Everyone will get their money back eventually, as soon as we finish this. This project, this dig... As soon as it's finished, I promise they'll get it all back and then some. I promise.</p>
      <hr/>
      <p><b>Record 20 — </b><br/><br/>An accident happened today. One of the workers fell and their precautionary gear might've failed. They're going to open up and investigation. Construction, and worse yet, the digging has to be paused. We had just begun to make solid progress. The delays unnerve me.</p>
      <hr/>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <img src="ruckson-logos.png" />
        <img src="ruck-tech-logo.png" />
      </div>
    `,
    3:`
      <h1>ERROR</h1>
      <p>COULD NOT FIND REQUESTED CONTENT</p><br/>
      <p>Please contact Ruck Tech (A Division of Ruckson Inc.) Support for more information or help.</p>
      <hr/>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <img src="ruckson-logos.png" />
        <img src="ruck-tech-logo.png" />
      </div>
    `,
    4: `
      <p><b>4 --- 17 --- ##63</b></p><br/><br/><br/><br/>
      <hr/>
      <p><b>Record 43 — </b><br/><br/>Nowadays I pretty much am at the dig site full time. Our ambitions keep growing, so our foundation keeps needing to be deeper. The hole we're digging always has to get deeper. But that's a good thing.</p>
      <p>My creditors have seemingly not been a problem anymore. I'm not sure why, but maybe the scale of our undertaking is finally apparent to them. No need for me to be constantly explaining and coming up with excuses. The money's being put to good use, we keep digging and there's no more warnings from our financial advisors.</p>
      <hr/>
      <p><b>Record 53 — </b><br/><br/>Can I tell you a secret? I've been to hear this sweet music coming from somewhere. It's been accompanying me everywhere I go the past few months. I realize now it's coming from the dig site. This sweet music calling for me. It's not easy to hear, so I've stopped wearing earmuffs. The noises don't bother me, I can always tell when I hear that sweet melody.</p>
      <hr/>
      <p><b>Record 77 — </b><br/><br/>I've started wearing the earmuffs again. In fact I wear them all the time now. I realized what caused the last accident. It was the sounds I've been hearing, the "music". It hypnotizes you somehow. It gets stuck in your head and it's all you ever hear. But it doesn't make you go crazy, because it makes you think you like it. You like hearing it. But it never stops.</p>
      <p>Now these earmuffs stay on ALWAYS. I've told everyone else to continue doing the same as a warning. The last person, he must've fallen off after being entranced. Those sounds, those sweet sounds.
      <hr/>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <img src="ruckson-logos.png" />
        <img src="ruck-tech-logo.png" />
      </div>
    `,
    5: `
      <p><b>5 --- 24 --- ##63</b></p><br/><br/><br/><br/>
      <hr/>
      <p><b>Record 81 — </b><br/><br/>The sounds won't stop growing louder. No one else seems to be hearing it but me. I've tried going to a doctor but they weren't able to diagnose me with anything. They claimed my hearing was fine and that whatever I have must be psychosomatic. How could I be faking this?</p>
      <p>Fuck this, I'll find someone who actually knows what the fuck they're doing for once.
      <hr/>
      <p><b>Record 94 — </b><br/><br/>I came back. I had to come back. I couldn't leave. The further I went, the quieter you got. I realize now what you're singing to me. This whole time, I never knew. But now I do. So of course, I had to come back. I had to hear that sweet music again.</p>
      <hr/>
      <p><b>Record 102 — </b><br/><br/>The construction's off. We need to revise the whole thing. We need to dig deeper. We're just not deep enough for what we need to do. I've fired anyone who refuses to listen. People have started refusing to work, but I'll find ways to entice them or just do it myself. We have to go deeper. The singing is starting to fade.</p>
      <hr/>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <img src="ruckson-logos.png" />
        <img src="ruck-tech-logo.png" />
      </div>
    `,
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-tab");
      contentDiv.innerHTML = tabContent[id];
      
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});

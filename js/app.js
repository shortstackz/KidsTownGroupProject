// Stores values that were previously stored in Perl's %ktvars
const ktvars = {};

// Browser-based replacement for paths previously stored in kt.ini
const ktini = {
    homegraphics: "graphics/home",
    toystoregraphics: "graphics/toystore",
    schoolgraphics: "graphics/school",
    townshipgraphics: "graphics/township",
    museumgraphics: "graphics/museum",
    cityhallgraphics: "graphics/cityhall",
    cityparkgraphics: "graphics/citypark",
    zoographics: "graphics/zoo",
    librarygraphics: "graphics/library"
};

// Read KEY from the browser URL
const params = new URLSearchParams(window.location.search);
const key = params.get("KEY") || "1000";

ktvars.KEY = key;

const app = document.getElementById("app");


// ------------------------------------------------------------
// Shared City Hall page renderer
// ------------------------------------------------------------

function renderCityHallStory({
    color,
    intro,
    image,
    body,
    choices
}) {
    app.innerHTML = `
        <div align="center">

            <table border="0" width="460" cellspacing="10">

                <tr>

                    <td width="268" align="left" valign="middle">

                        <font size="6" color="${color}">
                            ${intro}
                        </font>

                    </td>

                    <td width="200" align="center" valign="top">

                        <img src="${ktini.cityhallgraphics}/${image}">

                    </td>

                </tr>

                <tr>

                    <td colspan="2" width="460">

                        <font size="5">
                            ${body}
                        </font>

                    </td>

                </tr>

            </table>

            <p></p>

            <table border="0" width="460" cellspacing="2">

                <tr>

                    <td width="100">

                        <img src="${ktini.cityhallgraphics}/same.gif">

                    </td>

                    <td width="360">

                        <font size="4">

                            <hr>

                            ${choices}

                            <hr>

                        </font>

                    </td>

                </tr>

            </table>

        </div>
    `;
}


// ------------------------------------------------------------
// KEY 5000
// City Hall main page
// ------------------------------------------------------------

function renderCityHallMain() {

    app.innerHTML = `
        <div align="center">

            <table cellspacing="10">

                <tr>

                    <td valign="top">

                        <img
                            align="left"
                            src="${ktini.cityhallgraphics}/main.gif"
                            alt="Casebook Interactive Stories"
                        >

                    </td>

                    <td valign="top" align="center">

                        <hr>

                        <font size="6">W</font>

                        <font size="4">

                            elcome to City Hall!

                            Today you will be assisting the famous crime
                            stopper Detective Anders.

                            You have two new cases to solve.

                            <p></p>

                            In each one, we need you to decide what to do next.

                            Just click on the underlined words at the end of
                            each page and watch how the story unfolds!

                        </font>

                        <br clear="all">

                        <p></p>

                        Which case would you like to solve:

                        <p></p>

                        <a href="?KEY=5250">
                            The Case of the Alien Photo
                        </a>

                        <p></p>

                        or

                        <p></p>

                        <a href="?KEY=5010">
                            The Bungled Bank Burglary
                        </a>

                        <br>

                        <p></p>

                        <font size="+1" color="#cf0000">
                            Good Luck!
                        </font>

                        <p></p>

                        <hr>

                        <font size="2">
                            <b>Casebook Interactive Stories</b>
                        </font>

                    </td>

                </tr>

            </table>

        </div>
    `;
}


// ------------------------------------------------------------
// BUNGLED BANK BURGLARY
// ------------------------------------------------------------


// KEY 5010 - bbb1.pl
function render5010() {

    renderCityHallStory({

        color: "#22ac2f",

        intro: `
            "Thank you both for coming," the bank manager says as he
            escorts you toward his office. "Last night we were nearly robbed."
        `,

        image: "bbb1.gif",

        body: `
            "Nearly?" questions Detective Anders.

            <br><br>

            "Well, thanks to quick action by our night security guard,
            Willy Sparks, nothing was stolen. I figured you may be able
            to find some clues that will lead us to the culprit so he
            won't strike again. Feel free to examine the vault and
            interview Willy."
        `,

        choices: `
            Do you want to

            <a href="?KEY=5210">examine the vault</a>

            or

            <a href="?KEY=5020">question Willy?</a>
        `
    });
}


// KEY 5020 - bbb2a.pl
function render5020() {

    renderCityHallStory({

        color: "#a00000",

        intro: `
            "I'm not one to brag," asserts Willy Sparks, the security
            guard, "but without my help, the thief would have gotten
            away with everything."
        `,

        image: "bbb2.gif",

        body: `
            "Tell us exactly what happened," Detective Anders says as
            he looks closely at Willy.

            <br><br>

            "At about 4:30 in the morning I was doing my rounds near
            the teller's windows when I heard something back by the
            vault. I rushed back and surprised a masked man stuffing
            a bag full of money and <i>this</i>," explains Willy as
            he holds up a piece of paper.
        `,

        choices: `
            Do you want to

            <a href="?KEY=5060">examine the paper</a>

            or

            <a href="?KEY=5120">continue questioning Willy?</a>
        `
    });
}


// KEY 5030 - bbb2b.pl
function render5030() {

    renderCityHallStory({

        color: "#a00000",

        intro: `
            "I'm not one to brag," asserts Willy Sparks, the security
            guard, "but without my help, the thief would have gotten
            away with everything."
        `,

        image: "bbb2.gif",

        body: `
            "Tell us exactly what happened," Detective Anders says as
            he looks closely at Willy.

            <br><br>

            "At about 4:30 in the morning I was doing my rounds near
            the teller's windows when I heard something back by the
            vault. I rushed back and surprised a masked man stuffing
            a bag full of money and <i>this</i>," explains Willy as
            he holds up a piece of paper.
        `,

        choices: `
            Do you want to

            <a href="?KEY=5070">examine the paper</a>

            or

            <a href="?KEY=5090">continue questioning Willy?</a>
        `
    });
}


// Shared Willy explanation used by multiple routes
function willyVaultStory(nextChoices) {

    renderCityHallStory({

        color: "#af4c00",

        intro: `
            "Whenever the vault is opened at night a silent alarm
            notifies the police," explains Willy.
        `,

        image: "bbb4.gif",

        body: `
            "So I told the robber to put his hands in the air until
            they arrived, but he dropped the bag and fled out the back
            of the bank."

            <br><br>

            You and Detective Anders examine the door at the rear of
            the bank. The lock has been blown apart, probably by a
            small explosive.

            <br><br>

            "I figured that I shouldn't chase him out of the bank.
            So while I was waiting for the police, I counted the money
            by hand to make sure none was missing. Within a half an hour
            the police arrived and the robber had not returned."
        `,

        choices: nextChoices
    });
}


// KEY 5040 - bbb3-3.pl
function render5040() {

    willyVaultStory(`
        "We're missing a key element to this crime," you declare.
        "We need to
        <a href="?KEY=5050">examine the Woodrow Wilson diary entry</a>."
    `);
}


// Shared diary story
function diaryStory(nextChoices) {

    renderCityHallStory({

        color: "#0000a0",

        intro: `
            "It is a page from former U.S. President Woodrow Wilson's
            diary," Willy continues. "It is one of the bank's most
            prized possessions."
        `,

        image: "bbb3.gif",

        body: `
            "It was recently appraised at $500,000. I had never seen
            it before, but the bank manager talks about it so often
            that I immediately knew what it was when I approached the thief."

            <br><br>

            You and Detective Anders read the page:

            <tt>

                <br><br>

                April 16, 1917

                <br><br>

                Today we declared war on Germany and the other Central
                Powers. I have lived through many bloody conflicts in
                my life, but World War I is indeed the most terrible
                I have ever witnessed.

                <br><br>

                Thomas Woodrow Wilson

            </tt>
        `,

        choices: nextChoices
    });
}


// KEY 5050 - bbb3-5.pl
function render5050() {

    diaryStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5180">speak with an historian</a>
        about that diary entry."
    `);
}


// KEY 5060 - bbb3a.pl
function render5060() {

    diaryStory(`
        Do you want to

        <a href="?KEY=5170">
            speak with an historian about the diary entry
        </a>

        or

        <a href="?KEY=5130">
            continue questioning Willy?
        </a>
    `);
}


// KEY 5070 - bbb3b.pl
function render5070() {

    diaryStory(`
        Do you want to

        <a href="?KEY=5150">
            speak with an historian about the diary entry
        </a>

        or

        <a href="?KEY=5100">
            continue questioning Willy?
        </a>
    `);
}


// KEY 5080 - bbb3c.pl
function render5080() {

    diaryStory(`
        Do you want to

        <a href="?KEY=5160">
            speak with an historian about the diary entry
        </a>

        or

        <a href="?KEY=5200">
            examine the vault?
        </a>
    `);
}


// KEY 5090 - bbb4-3.pl
function render5090() {

    willyVaultStory(`
        "We're missing a key element to this crime," you declare.
        "We need to
        <a href="?KEY=5050">
            examine the Woodrow Wilson diary entry
        </a>."
    `);
}


// KEY 5100 - bbb4-5.pl
function render5100() {

    willyVaultStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5180">speak with an historian</a>
        about that diary entry."
    `);
}


// KEY 5110 - bbb4-6.pl
function render5110() {

    willyVaultStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5230">examine that vault</a>."
    `);
}


// KEY 5120 - bbb4a.pl
function render5120() {

    willyVaultStory(`
        Do you want to

        <a href="?KEY=5080">
            look more closely at the scrap of paper
        </a>

        or

        <a href="?KEY=5220">
            examine the vault?
        </a>
    `);
}


// KEY 5130 - bbb4c.pl
function render5130() {

    willyVaultStory(`
        Do you want to

        <a href="?KEY=5160">
            speak with an historian about the diary entry
        </a>

        or

        <a href="?KEY=5200">
            examine the vault?
        </a>
    `);
}


// KEY 5140 - bbb4s.pl
function render5140() {

    willyVaultStory(`
        "That's all I needed to know," you exclaim.
        It is time to solve

        <a href="?KEY=5240">
            The Bungled Bank Burglary.
        </a>
    `);
}


// Shared historian story
function historianStory(nextChoices) {

    renderCityHallStory({

        color: "#9400d3",

        intro: `
            "World War I, or the Great War, was the largest and most
            brutal conflict of its time," explains the historian from
            a nearby library.
        `,

        image: "bbb5.gif",

        body: `
            "It spanned the years from 1914 though 1918 but the United
            States wasn't actively involved until 1917. It was the first
            war to introduce large-scale use of machine guns, aircraft,
            and deadly poison gas."

            <br><br>

            "Could President Wilson have written a note about the Great
            War in April of 1917?" You ask the historian.

            <br><br>

            "Definitely," explains the historian. "In fact, April 16,
            1917 was the day that the United States began fighting.
            Until then, the U.S. had been considered a neutral country."
        `,

        choices: nextChoices
    });
}


// KEY 5150 - bbb5-4.pl
function render5150() {

    historianStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5140">question Willy again</a>."
    `);
}


// KEY 5160 - bbb5-6.pl
function render5160() {

    historianStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5230">examine that vault</a>."
    `);
}


// KEY 5170 - bbb5a.pl
function render5170() {

    historianStory(`
        Do you want to

        <a href="?KEY=5110">
            continue questioning Willy
        </a>

        or

        <a href="?KEY=5190">
            examine the vault?
        </a>
    `);
}


// KEY 5180 - bbb5s.pl
function render5180() {

    historianStory(`
        "That's all I needed to know," you exclaim.
        It is time to solve

        <a href="?KEY=5240">
            The Bungled Bank Burglary.
        </a>
    `);
}


// Shared vault explanation
function bankVaultStory(nextChoices) {

    renderCityHallStory({

        color: "#226b22",

        intro: `
            "We keep $1,000,000 in cash in the vault along with other
            documents," began the bank manager.
        `,

        image: "bbb6.gif",

        body: `
            "The bills are all in denominations of $20 or lower so it
            would have been easy for the robber to spend the money anywhere."

            <br><br>

            "And what about the other documents?" you ask.

            <br><br>

            "Most of them would have no value to a thief, they are just
            copies of deeds and loans. However, the Woodrow Wilson diary
            entry is quite valuable, indeed. Thankfully, Willy was able
            to recover it with the cash."
        `,

        choices: nextChoices
    });
}


// KEY 5190 - bbb6-4.pl
function render5190() {

    bankVaultStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5140">question Willy again</a>."
    `);
}


// KEY 5200 - bbb6-5.pl
function render5200() {

    bankVaultStory(`
        With a puzzled look Detective Anders says,
        "I think we must
        <a href="?KEY=5180">speak with an historian</a>
        about that diary entry."
    `);
}


// KEY 5210 - bbb6a.pl
function render5210() {

    bankVaultStory(`
        You decide

        <a href="?KEY=5030">
            Willy needs to be questioned immediately.
        </a>
    `);
}


// KEY 5220 - bbb6b.pl
function render5220() {

    bankVaultStory(`
        "We're missing a key element to this crime," you declare.
        "We need to

        <a href="?KEY=5050">
            examine that diary entry
        </a>."
    `);
}


// KEY 5230 - bbb6s.pl
function render5230() {

    bankVaultStory(`
        "That's all I needed to know," you exclaim.
        It is time to solve

        <a href="?KEY=5240">
            The Bungled Bank Burglary.
        </a>
    `);
}


// KEY 5240 - bbbend.pl
function render5240() {

    renderCityHallStory({

        color: "#22ac2f",

        intro: `
            "I think we have enough information to assist your search
            for the culprit," Detective Anders explains to the bank manager.
        `,

        image: "end.gif",

        body: `
            "Your security guard, Willy Sparks, is lying about his actions
            last night. That would suggest he has some involvement in
            the incident."

            <br><br>

            "Also, the diary page Willy gave you is a forgery," you add.

            <br><br>

            "I don't understand. How could Willy be involved? And where
            is the real diary page?" cries the bank manager.

            <br><br>

            "We knew Willy was lying when he said that he counted all
            the cash before the police arrived. He said the police arrived
            within half an hour, but it would have taken more than five
            hours to count $1,000,000 in small bills by hand.

            And the diary page is obviously bogus because it refers to
            'World War I'. In 1917, the first World War was known as the
            Great War. It wouldn't have made sense to call it World War I
            when there hadn't been a World War II, yet."

            <br><br>

            Upon hearing this evidence, Willy admits to stealing the diary
            page and replacing it with a fake. Since he couldn't get into
            the vault without setting off the silent alarm, he made up the
            story about the robber.

            While the police were on their way he forged the diary page,
            but he was in such a hurry he wrote <i>World War I</i> instead
            of <i>The Great War</i>.
        `,

        choices: `
            Do you want to try

            <a href="?KEY=5250">
                <i>The Case of the Alien Photo</i>
            </a>

            or

            <a href="?KEY=5000">
                return to the main Casebook Interactive Stories page?
            </a>
        `
    });
}


// ------------------------------------------------------------
// CASE OF THE ALIEN PHOTO
// ------------------------------------------------------------


// KEY 5250 - cap1.pl
function render5250() {

    renderCityHallStory({

        color: "#22ac2f",

        intro: `
            "I have proof that there is life on Venus!" shouts Maurice
            Mole from across the police station.
        `,

        image: "cap1.gif",

        body: `
            "I'm going to make millions when I sell this to the tabloids,"
            he giggles devilishly and waves a photograph in the air.

            <br><br>

            Maurice Mole is well known in the county as a con artist.
            He is clever, but you and Detective Anders have managed to
            foil all his previous attempts to fool the public.

            You decide to carefully examine the glossy photograph.
            It shows a barren landscape dotted with tiny figures that
            look like aliens.
        `,

        choices: `
            Do you want to

            <a href="?KEY=5260">
                question Maurice Mole about the photo
            </a>

            or

            <a href="?KEY=5270">
                send the photo to the crime lab for testing?
            </a>
        `
    });
}


// KEY 5260 - cap2.pl
function render5260() {

    renderCityHallStory({

        color: "#a00000",

        intro: `
            "Actually, I'm amazed that nobody discovered this before,"
            explains Maurice.
        `,

        image: "cap2.gif",

        body: `
            "When I pointed my telescope at Venus last night I saw these
            little figures jumping around. I thought I should take a
            picture of them."

            <br><br>

            You and Detective Anders exchange looks of skepticism.
            Maurice Mole seems like the least likely person to spend
            his nights looking at the stars.
        `,

        choices: `
            Do you want to

            <a href="?KEY=5280">
                continue questioning Maurice
            </a>

            or

            <a href="?KEY=5270">
                send the photo to the crime lab?
            </a>
        `
    });
}


// KEY 5270 - cap3.pl
function render5270() {

    renderCityHallStory({

        color: "#0000a0",

        intro: `
            Rather than spend more time listening to Maurice, you decide
            that the crime lab may provide you with some answers.
        `,

        image: "cap3.gif",

        body: `
            "I think the photograph is a fake," states the scientist at
            the crime lab, "but I can't prove it. It looks like 'aliens'
            were put in the background by a computer.

            Unfortunately, you will probably need more evidence to prove
            that Maurice Mole's claims are untrue."
        `,

        choices: `
            You decide you need to

            <a href="?KEY=5280">
                question Maurice face to face.
            </a>
        `
    });
}


// KEY 5280 - cap4.pl
function render5280() {

    renderCityHallStory({

        color: "#af4c00",

        intro: `
            "I'm an astronomer at heart," claims Maurice.
            "Ever since I saw my first shooting star I fell in love
            with the night sky."
        `,

        image: "cap4.jpg",

        body: `
            "Of course, my favorite planet is Venus."

            Maurice Mole's ears twitch a little bit as he explains
            his nightly routine.

            "When the sky is its darkest, usually around midnight,
            I turn my telescope toward Venus to admire its rocky surface.
            In fact, there hasn't been one night in the last six months
            that I haven't spent at least fifteen minutes looking at
            the beautiful planet."

            <br><br>

            You see Detective Anders smile slightly. That can only mean
            one thing: he has found a problem with Maurice Mole's story.
        `,

        choices: `
            Do you think you're ready to

            <a href="?KEY=5300">
                solve the mystery
            </a>

            or do you want to

            <a href="?KEY=5290">
                look for more evidence at Maurice Mole's apartment?
            </a>
        `
    });
}


// KEY 5290 - cap5.pl
function render5290() {

    renderCityHallStory({

        color: "#9400d3",

        intro: `
            "I have absolutely nothing to hide," exclaims Maurice.
            "You may examine my apartment inside and out."
        `,

        image: "cap5.gif",

        body: `
            Maurice Mole's apartment is dark and messy. His clothes are
            scattered about the floor and dirty dishes are piled up on
            the counters.

            You notice a computer with a scanner in a back room.
            Maurice guides you to his balcony and points to a shiny
            white telescope.

            "There it is," he says. "If the sky were darker, I would
            let you look at the aliens for yourselves."

            <br><br>

            You and Detective Anders look at the telescope. It appears
            to be remarkably clean compared to everything else in the
            apartment.

            Something dangling from the eyepiece of the telescope catches
            your eye; it is a price tag.

            <br><br>

            "I, uh," stammers Maurice, "I just forgot to take the price
            tag off."

            <br><br>

            Detective Anders looks at you with a wink,

            "I think you can also forget about getting any money from
            the tabloids, Maurice. Your photo is a fake."
        `,

        choices: `
            You decide it's time to confront Maurice Mole with

            <a href="?KEY=5300">
                the solution to the <i>Case of the Alien Photo</i>.
            </a>
        `
    });
}


// KEY 5300 - capend.pl
function render5300() {

    renderCityHallStory({

        color: "#226b22",

        intro: `
            "Maurice, your story is so full of holes some people might
            mistake it for swiss cheese!" you exclaim.
        `,

        image: "end.gif",

        body: `
            "First, it would be impossible for you to photograph aliens
            on the surface of Venus. Venus is covered with a thick blanket
            of clouds which prevents anyone from seeing the surface.

            Second, you claim to have looked at Venus every night for
            the last six months. That, too, is impossible. Due to the
            motion of the planets, Venus is not visible from Earth for
            six consecutive months.

            Finally, you said that you looked at Venus at midnight.
            As every astronomer knows, Venus is visible only near
            sunrise or sunset."

            <br><br>

            Confronted with your facts, Maurice decides to confess to
            the forgery.

            "When I heard how much money the tabloids offered for alien
            photographs, I decided to fake one on my computer. I guess
            I should have spent more time in the library learning about
            Venus, first. I just bought the telescope yesterday to fool
            you two."
        `,

        choices: `
            Do you want to try

            <a href="?KEY=5010">
                <i>The Bungled Bank Burglary</i>
            </a>

            or do you want to

            <a href="?KEY=5000">
                return to the main Casebook Interactive Stories page?
            </a>
        `
    });
}


// ------------------------------------------------------------
// KEY 5900
// City Hall Help
// ------------------------------------------------------------

function render5900() {

    app.innerHTML = `
        <div align="center">

            <table cellspacing="10">

                <tr>

                    <td valign="top">

                        <img
                            align="left"
                            src="${ktini.cityhallgraphics}/help.gif"
                            alt="Casebook Interactive Stories Help"
                        >

                    </td>

                    <td valign="top" align="center">

                        <hr>

                        <font size="6">T</font>

                        <font size="4">

                            o view, and hopefully solve, a Casebook story,
                            select one of the cases from the main Casebook
                            page in KidsTown CityHall.

                            Then read each page of the story.

                            At the bottom of every page you will be presented
                            with one or two links. Choose which of these paths
                            you wish to follow.

                            When the entire case has been presented, you will
                            be offered a link to SOLVE THE CASE.

                            Once you select this final link, the solution to
                            the case will be presented.

                            <br><br>

                            Within the text of each story, clues will be
                            revealed to assist you in solving the case.

                            Don't be discouraged if the solution to the case
                            is presented before you have solved it - you will
                            get better at finding the solutions as you read
                            more cases.

                            <br><br>

                            Have Fun!

                        </font>

                        <br clear="all">

                        <hr>

                        <font size="+1" color="#cf0000">

                            NOTE: To return to the page you were last viewing,
                            press the 'BACK' button on your browser.

                        </font>

                    </td>

                </tr>

            </table>

        </div>
    `;
}


// ------------------------------------------------------------
// JavaScript replacement for kt.cgi + kt.db routing
// ------------------------------------------------------------

switch (key) {

    case "1000":
        // Visitor Center remains in index.html
        break;

    case "5000":
        renderCityHallMain();
        break;

    case "5010":
        render5010();
        break;

    case "5020":
        render5020();
        break;

    case "5030":
        render5030();
        break;

    case "5040":
        render5040();
        break;

    case "5050":
        render5050();
        break;

    case "5060":
        render5060();
        break;

    case "5070":
        render5070();
        break;

    case "5080":
        render5080();
        break;

    case "5090":
        render5090();
        break;

    case "5100":
        render5100();
        break;

    case "5110":
        render5110();
        break;

    case "5120":
        render5120();
        break;

    case "5130":
        render5130();
        break;

    case "5140":
        render5140();
        break;

    case "5150":
        render5150();
        break;

    case "5160":
        render5160();
        break;

    case "5170":
        render5170();
        break;

    case "5180":
        render5180();
        break;

    case "5190":
        render5190();
        break;

    case "5200":
        render5200();
        break;

    case "5210":
        render5210();
        break;

    case "5220":
        render5220();
        break;

    case "5230":
        render5230();
        break;

    case "5240":
        render5240();
        break;

    case "5250":
        render5250();
        break;

    case "5260":
        render5260();
        break;

    case "5270":
        render5270();
        break;

    case "5280":
        render5280();
        break;

    case "5290":
        render5290();
        break;

    case "5300":
        render5300();
        break;

    case "5900":
        render5900();
        break;

    default:
        app.innerHTML = `
            <div align="center">
                <h2>KidsTown</h2>
                <p>KEY ${key} has not been converted to JavaScript yet.</p>
            </div>
        `;
        break;
}

console.log("KidsTown KEY:", ktvars.KEY);
// Stores variables that were previously stored in Perl's %ktvars
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

// Read the KEY value from the URL
const params = new URLSearchParams(window.location.search);
const key = params.get("KEY") || "1000";

ktvars.KEY = key;

const app = document.getElementById("app");


// Converted version of scripts/cityhall/bbb1.pl
function renderCityHallBBB1() {

    app.innerHTML = `
        <div align="center">

            <table border="0" width="460" cellspacing="10">

                <tr>

                    <td width="268" align="left" valign="middle">

                        <font size="6" color="#22ac2f">

                            "Thank you both for coming," the bank manager says
                            as he escorts you toward his office.

                            "Last night we were nearly robbed."

                        </font>

                    </td>

                    <td width="200" align="center" valign="top">

                        <img src="${ktini.cityhallgraphics}/bbb1.gif">

                    </td>

                </tr>

                <tr>

                    <td colspan="2" width="460">

                        <font size="5">

                            "Nearly?" questions Detective Anders.

                            <br><br>

                            "Well, thanks to quick action by our night security
                            guard, Willy Sparks, nothing was stolen.

                            I figured you may be able to find some clues that
                            will lead us to the culprit so he won't strike again.

                            Feel free to examine the vault and interview Willy."

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

                            Do you want to

                            <a href="?KEY=5210">
                                examine the vault
                            </a>

                            or

                            <a href="?KEY=5020">
                                question Willy?
                            </a>

                            <hr>

                        </font>

                    </td>

                </tr>

            </table>

        </div>
    `;
}


// Converted version of scripts/cityhall/bbb2a.pl
function renderCityHallBBB2A() {

    app.innerHTML = `
        <div align="center">

            <table border="0" width="460" cellspacing="10">

                <tr>

                    <td width="268" align="left" valign="middle">

                        <font size="6" color="#a00000">

                            "I'm not one to brag," asserts Willy Sparks,
                            the security guard, "but without my help,
                            the thief would have gotten away with everything."

                        </font>

                    </td>

                    <td width="200" align="center" valign="top">

                        <img src="${ktini.cityhallgraphics}/bbb2.gif">

                    </td>

                </tr>

                <tr>

                    <td colspan="2" width="460">

                        <font size="5">

                            "Tell us exactly what happened," Detective Anders
                            says as he looks closely at Willy.

                            <br><br>

                            "At about 4:30 in the morning I was doing my rounds
                            near the teller's windows when I heard something
                            back by the vault. I rushed back and surprised a
                            masked man stuffing a bag full of money and
                            <i>this</i>," explains Willy as he holds up a
                            piece of paper.

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

                            Do you want to

                            <a href="?KEY=5060">
                                examine the paper
                            </a>

                            or

                            <a href="?KEY=5120">
                                continue questioning Willy?
                            </a>

                            <hr>

                        </font>

                    </td>

                </tr>

            </table>

        </div>
    `;
}


// JavaScript replacement for the routing done by kt.cgi and kt.db
switch (key) {

    case "1000":
        // Keep the Visitor Center already written in index.html
        break;

    case "5010":
        renderCityHallBBB1();
        break;

    case "5020":
        renderCityHallBBB2A();
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
// Stores the variables that were previously stored in Perl's %ktvars
const ktvars = {};

// Browser-based replacement for the graphics paths in kt.ini
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

// Temporary route map based on kt.db
const routes = {
    "1000": "home",
    "5010": "cityhall"
};

const params = new URLSearchParams(window.location.search);
const key = params.get("KEY") || "1000";

ktvars.KEY = key;

console.log(ktvars);
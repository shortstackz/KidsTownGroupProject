const params = new URLSearchParams(window.location.search);
const key = params.get("KEY") || "9000";

const app = document.getElementById("app");
const zooGraphics = "../../../graphics/zoo";

function zooLink(key, text) {
    return `<a href="?KEY=${key}">${text}</a>`;
}

function renderPage(title, content, showNav = true) {
    document.title =
        title === "KidsTown Zoo"
            ? "KidsTown Zoo"
            : `KidsTown Zoo: ${title}`;

    app.innerHTML = `
        <br>

        <h1 style="text-align:center;">${title}</h1>

        ${showNav ? renderZooNav() : ""}

        <div>
            ${content}
        </div>
    `;
}

function renderZooNav() {
    return `
        <center>
            <table>
                <tr align="center" valign="top">
                    <td width="100">
                        <a href="?KEY=9100">
                            <img src="${zooGraphics}/ocean3a.gif"
                                 width="37" height="37" border="0">
                        </a>
                    </td>

                    <td width="100">
                        <a href="?KEY=9200">
                            <img src="${zooGraphics}/africa3a.gif"
                                 width="37" height="37" border="0">
                        </a>
                    </td>

                    <td width="100">
                        <a href="?KEY=9300">
                            <img src="${zooGraphics}/aussie3a.gif"
                                 width="37" height="37" border="0">
                        </a>
                    </td>

                    <td width="100">
                        <a href="?KEY=9400">
                            <img src="${zooGraphics}/polar3a.gif"
                                 width="37" height="37" border="0">
                        </a>
                    </td>
                </tr>

                <tr align="center" valign="top">
                    <td width="100">${zooLink("9100", "Ocean")}</td>
                    <td width="100">${zooLink("9200", "Africa")}</td>
                    <td width="100">${zooLink("9300", "Australia")}</td>
                    <td width="100">${zooLink("9400", "Polar Regions")}</td>
                </tr>
            </table>
        </center>

        <br>
    `;
}

// --------------------------------------------------
// MAIN ZOO
// Original: zoo.pl
// --------------------------------------------------

function renderZooMain() {
    renderPage(
        "KidsTown Zoo",
        `
        <center>
            <table border="0" width="600">
                <tr>
                    <td>

                        <br>

                        <center>
                            <img
                                src="${zooGraphics}/zoo.gif"
                                alt="Zoo"
                                width="500"
                                height="200">
                        </center>

                        <br>

                        <h2>
                            <center>
                                Animals in this zoo are grouped together by where they live.
                                <br>
                                Select one of the locations below to see some of the animals
                                that live there.
                            </center>
                        </h2>

                        <br>

                        <center>
                            <a href="?KEY=9500">
                                <font size="4">
                                    <strong>
                                        See these regions on the world map.
                                    </strong>
                                </font>
                            </a>
                        </center>

                        <br>

                    </td>
                </tr>
            </table>
        </center>
        `
    );
}

// --------------------------------------------------
// OCEAN
// Original: ocean.pl
// --------------------------------------------------

function renderOcean() {
    renderPage(
        "Animals of the Ocean",
        `
        <center>
            <img
                src="${zooGraphics}/ocean.jpg"
                height="400"
                width="500"
                border="0">
        </center>

        <font size="5">

            <p align="left">
                Oceans cover more than two-thirds of the Earth's surface.
                The greatest variety of life is found in the oceans.
                Most ocean animals live in the warm, shallow waters
                surrounding the continents and islands. Yet, life can
                even be found deep in the ocean where light never reaches.
                Some of the different kinds of animals that live in the
                ocean are
                <a href="#crab">crabs,</a>
                <a href="#seahorse">seahorses,</a>
                <a href="#shark">sharks,</a> and
                <a href="#starfish">starfish.</a>
            </p>

            <br>

            <a name="crab"></a>
            <h2 align="center">CRABS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6crab.gif"
                    width="154"
                    height="154">

                A crab walks sideways instead of straight ahead, like most
                animals. A hard shell that covers its body helps protect it.
                However, in order to grow, a crab must shed its shell.
                After shedding, it is soft-bodied and very vulnerable.
                Once its new shell is hard and strong, the crab is ready
                to face the world again.
            </p>

            <br clear="all"><br>

            <a name="seahorse"></a>
            <h2 align="center">SEAHORSES</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6seahor.gif"
                    width="154"
                    height="154">

                A seahorse swims in an upright position. Unlike most animals,
                the male seahorse gives birth. The male has a pouch on its
                stomach in which the female places her eggs. After hatching,
                the young seahorses stay inside the pouch for ten days.
                A male seahorse can give birth to as many as 600 young
                at one time.
            </p>

            <br clear="all"><br>

            <a name="shark"></a>
            <h2 align="center">SHARKS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6shark.gif"
                    width="154"
                    height="154">

                Most sharks eat fish, sea lions, sea birds, and dolphins.
                They are very efficient hunters and have been nicknamed
                "eating machines" and "super predators." They use a
                combination of sight, smell, and a form of sonar to hunt
                their prey.
            </p>

            <br clear="all"><br>

            <a name="starfish"></a>
            <h2 align="center">STARFISH</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6starfi.gif"
                    width="154"
                    height="154">

                There are many types of starfish, also known as "sea stars,"
                in the ocean. They can have as few as five arms or as many
                as forty. If a starfish loses an arm, it will grow a new one.
                The starfish's mouth is located on the underside of its body.
            </p>

            <br clear="all"><br>

            <center>
                <a href="?KEY=9110">
                    Try taking the Zoo Keeper's Challenge!
                </a>
            </center>

            <br><br>
        </font>
        `
    );
}

// --------------------------------------------------
// OCEAN CHALLENGE
// --------------------------------------------------

function renderOceanChallenge() {
    renderPage(
        "Zoo Keeper's Challenge - Ocean",
        `
        <center>
            <font size="5">

                <p>
                    What covers two-thirds of the surface of the Earth?
                </p>

                <a href="?KEY=9120">Land</a><br>
                <a href="?KEY=9130">Trees</a><br>
                <a href="?KEY=9140">Water</a><br>

                <br>

                Instructions: Please choose the answer you think is correct.

                <br><br>

            </font>
        </center>
        `
    );
}

function renderOceanLand() {
    renderPage(
        "Zoo Keeper's Challenge - Ocean",
        `
        <center>
            <font size="5">

                <p>
                    Land covers one-third of the surface of the Earth.
                </p>

                <br>

                <p>
                    <a href="?KEY=9110">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

function renderOceanTrees() {
    renderPage(
        "Zoo Keeper's Challenge - Ocean",
        `
        <center>
            <font size="5">

                <p>
                    Trees do not cover two-thirds of the surface of the Earth.
                    Trees supply most of the oxygen that people breathe.
                    The oldest tree is 4,725 years old.
                </p>

                <br>

                <p>
                    <a href="?KEY=9110">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

function renderOceanWater() {
    renderPage(
        "Zoo Keeper's Challenge - Ocean",
        `
        <center>
            <font size="5">

                <p>
                    <img
                        src="${zooGraphics}/ocean.jpg"
                        border="0"
                        alt="ocean"
                        align="left"
                        width="200"
                        height="200"
                        hspace="10"
                        vspace="10">

                    Yes, water covers over two-thirds of the surface
                    of the Earth.
                </p>

                <br clear="all"><br>

                <a href="?KEY=9100">
                    Go back to the Animals of the Ocean.
                </a>

                <br><br>

            </font>
        </center>
        `
    );
}

// --------------------------------------------------
// AFRICA
// Original: africa.pl
// --------------------------------------------------

function renderAfrica() {
    renderPage(
        "Animals of Africa",
        `
        <center>
            <img
                src="${zooGraphics}/africa.jpg"
                height="400"
                width="500"
                alt="Animals of Africa"
                border="0">
        </center>

        <font size="5">

            <p align="left">
                In central Africa, many kinds of animals live on large,
                grass-covered plains. Animals that eat plants are herbivores.
                Some African herbivores are
                <a href="#elephant">elephants,</a>
                <a href="#giraffe">giraffes</a> and
                <a href="#hippo">hippos.</a>
                Animals that eat only meat are carnivores.
                <a href="#lion">Lions</a> are carnivores that live in Africa.
            </p>

            <br clear="all">

            <a name="elephant"></a>
            <h2 align="center">ELEPHANTS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6elep.gif"
                    height="154"
                    width="154">

                The most amazing feature on an elephant is its long nose,
                called a trunk. The elephant uses its trunk to eat and drink.
                An elephant eats grass, leaves, twigs and fruits by wrapping
                its trunk around the food and bringing it up to its mouth.
                It drinks by sucking water up into its trunk, putting the
                trunk into its mouth, and then spraying the water down
                its throat.
            </p>

            <br clear="all">

            <a name="giraffe"></a>
            <h2 align="center">GIRAFFES</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6giraff.gif"
                    width="154"
                    height="154">

                Giraffes are the tallest land animals living in the world
                today. Because giraffes need to eat a lot of food in order
                to live, they spend about half of their lives eating.
                Giraffes eat leaves and twigs by curling their strong
                tongues around the food to pull it free.
            </p>

            <br clear="all">

            <a name="hippo"></a>
            <h2 align="center">HIPPOPOTAMUS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6hippo.gif"
                    width="154"
                    height="154">

                The word "hippo" is short for "hippopotamus," which means
                "horse of the river." Although hippos are very big, they
                do not eat as much food as you might think. They spend a
                few hours each day eating different kinds of grasses on
                land. To protect themselves from predators, hippos spend
                most of their time in water.
            </p>

            <br clear="all">

            <a name="lion"></a>
            <h2 align="center">LIONS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6lion.gif"
                    width="154"
                    height="154">

                Lions spend most of their time resting and sleeping.
                Lions sleep during the day when it is very hot. When they
                hunt, lions must sneak up on prey in order to catch it.
                Female lions do the hunting for their prides (family groups).
            </p>

            <br clear="all"><br>

            <center>
                <a href="?KEY=9210">
                    Try taking the Zoo Keeper's Challenge!
                </a>
            </center>

            <br><br>
        </font>
        `
    );
}

// --------------------------------------------------
// AFRICA CHALLENGE
// --------------------------------------------------

function renderAfricaChallenge() {
    renderPage(
        "Zoo Keeper's Challenge - Africa",
        `
        <center>
            <font size="5">

                <p>
                    What is the tallest land animal living in the world today?
                </p>

                <a href="?KEY=9240">Elephant</a><br>
                <a href="?KEY=9230">Giraffe</a><br>
                <a href="?KEY=9220">Hippopotamus</a><br><br>

                <p>
                    Instructions: Please choose the answer you think is correct.
                </p>

                <br><br>

            </font>
        </center>
        `
    );
}

function renderAfricaHippo() {
    renderPage(
        "Zoo Keeper's Challenge - Africa",
        `
        <center>
            <font size="5">

                A hippopotamus can be big, but it is not the tallest
                animal in the world. Adult hippos are the second largest
                land animals in the world after elephants. They can grow
                to weigh 8,000 pounds!

                <br><br>

                <p>
                    <a href="?KEY=9210">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

function renderAfricaGiraffe() {
    renderPage(
        "Zoo Keeper's Challenge - Africa",
        `
        <center>
            <font size="5">

                <p>
                    <img
                        src="${zooGraphics}/d6giraff.gif"
                        align="left"
                        hspace="10"
                        vspace="10">

                    Giraffes are the tallest animals living in the world
                    today. They can grow to be 19 feet tall!
                </p>

                <br clear="all"><br>

                <a href="?KEY=9200">
                    Go back to the Animals of Africa.
                </a>

                <br><br>

            </font>
        </center>
        `
    );
}

function renderAfricaElephant() {
    renderPage(
        "Zoo Keeper's Challenge - Africa",
        `
        <center>
            <font size="5">

                The elephant is not the tallest animal in the world.
                The elephant is the largest land animal in the world.
                An adult male elephant can weigh up to 13,000 pounds!

                <br><br>

                <a href="?KEY=9210">Please try again.</a>

                <br><br>

            </font>
        </center>
        `
    );
}

// --------------------------------------------------
// AUSTRALIA
// Original: australia.pl
// --------------------------------------------------

function renderAustralia() {
    renderPage(
        "Animals of Australia",
        `
        <center>
            <img
                src="${zooGraphics}/australia.jpg"
                height="400"
                width="500"
                border="0"
                alt="Animals of Australia">
        </center>

        <font size="5">

            <p align="left">
                Many unusual types of animals called marsupials are found
                on the island continent of Australia. Marsupials are unusual
                because the mother has a pouch on her stomach in which she
                carries her young. Some Australian marsupials are
                <a href="#kangaroo">kangaroos</a> and
                <a href="#koala">koala bears.</a>
                <a href="#croc">Crocodiles</a> are reptiles that live in
                Australia as well as other parts of the world. Off the coast
                of Australia is a coral reef called the
                <a href="#reef">Great Barrier Reef.</a>
            </p>

            <br><br>

            <a name="kangaroo"></a>
            <h2 align="center">KANGAROOS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6kanga.gif"
                    height="154"
                    width="154">

                Kangaroos stand tall by balancing on their big hind feet
                and thick tail. They can move very quickly by jumping in
                long leaps. A young kangaroo is called a "joey."
            </p>

            <br clear="all"><br>

            <a name="koala"></a>
            <h2 align="center">KOALA BEARS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6koala.gif"
                    height="154"
                    width="154">

                Koala bears look like teddy bears come to life. They only
                eat the leaves of a few trees that live in Australia.
                Because the leaves are not very nutritious, the little
                bears have to move slowly to conserve energy. They spend
                a lot of time sleeping.
            </p>

            <br clear="all"><br>

            <a name="croc"></a>
            <h2 align="center">CROCODILES</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6croc.gif"
                    height="154"
                    width="154">

                The crocodile is a fierce animal that will attack any animal
                that comes near it. Although clumsy on land, it is an
                excellent swimmer. It spends much of its time drifting
                quietly under the surface of the water with only its eyes
                and nose showing.
            </p>

            <br clear="all"><br>

            <a name="reef"></a>
            <h2 align="center">GREAT BARRIER REEF</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6coral.gif"
                    height="154"
                    width="154">

                The Great Barrier Reef is a coral reef. Coral reefs are made
                of many tiny animals. As these animals grow, they build
                mini-fortresses around themselves. As the animals multiply,
                their fortresses join to form large structures in the ocean.
                Coral reefs provide food and shelter to many brightly colored
                fish that live in the sea.
            </p>

            <br clear="all"><br>

            <center>
                <a href="?KEY=9310">
                    Try taking the Zoo Keeper's Challenge!
                </a>
            </center>

            <br><br>
        </font>
        `
    );
}

// --------------------------------------------------
// AUSTRALIA CHALLENGE
// --------------------------------------------------

function renderAustraliaChallenge() {
    renderPage(
        "Zoo Keeper's Challenge - Australia",
        `
        <center>
            <font size="5">

                What do you call animals that have pouches to carry their young?

                <br><br>

                <a href="?KEY=9320">Marsupials</a><br>
                <a href="?KEY=9330">Reptiles</a><br>
                <a href="?KEY=9340">Herbivores</a><br><br>

                <p>
                    Instructions: Please choose the answer you think is correct.
                </p>

            </font>
        </center>
        `
    );
}

function renderAustraliaMarsupials() {
    renderPage(
        "Zoo Keeper's Challenge - Australia",
        `
        <center>
            <font size="5">

                <p>
                    <img
                        src="${zooGraphics}/d6kanga.gif"
                        align="left"
                        hspace="10"
                        vspace="10">

                    Animals that have pouches <b>are</b> called
                    <b>marsupials.</b>

                    <br><br>

                    Both kangaroos and koalas are marsupials.
                </p>

                <br clear="all"><br>

                <a href="?KEY=9300">
                    Go back to the Animals of Australia.
                </a>

                <br><br>

            </font>
        </center>
        `
    );
}

function renderAustraliaReptiles() {
    renderPage(
        "Zoo Keeper's Challenge - Australia",
        `
        <center>
            <font size="5">

                Reptiles are cold-blooded animals that lay eggs.

                <br><br>

                Reptiles do not have pouches to carry their young.

                <br><br>

                <p>
                    <a href="?KEY=9310">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

function renderAustraliaHerbivores() {
    renderPage(
        "Zoo Keeper's Challenge - Australia",
        `
        <center>
            <font size="5">

                Herbivores are animals that eat plants.

                <br><br>

                Although some herbivores have pouches to carry their young,
                not all herbivores have pouches.

                <br><br>

                <p>
                    <a href="?KEY=9310">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

// --------------------------------------------------
// POLAR REGIONS
// Original: polar.pl
// --------------------------------------------------

function renderPolar() {
    renderPage(
        "Animals of the Polar Regions",
        `
        <center>
            <img
                src="${zooGraphics}/polar.jpg"
                alt="Arctic Animals"
                height="321"
                width="500"
                border="0">
        </center>

        <font size="5">

            <p align="left">
                The polar regions have extremely cold winters and only a few
                months of warm temperatures in the summer. Parts of Russia,
                Norway, Greenland, the United States, and Canada, and all of
                Antarctica lie within the polar regions. The tundra is a vast,
                treeless land in the Arctic. Much of the ground there stays
                frozen all the time. The extremely cold winters prevent most
                animals from living in the polar regions during those months.
                During the short summer, these animals return to live and feed.
                Some of these animals are
                <a href="#hare">arctic hares,</a>
                <a href="#caribou">caribou,</a>
                <a href="#polarbear">polar bears,</a> and
                <a href="#wolf">wolves.</a>
            </p>

            <br><br>

            <a name="hare"></a>
            <h2 align="center">ARCTIC HARES</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6hare.gif"
                    alt="Arctic Hare"
                    width="154"
                    height="154">

                In order to survive the cold during the winter, an arctic hare
                grows a pure white coat of long, thick fur. This white fur makes
                the hare blend in with the snow. The hare has large hind feet
                which allow it to run on top of the snow without sinking.
                During the summer, its fur turns brown or gray.
            </p>

            <br clear="all"><br>

            <a name="caribou"></a>
            <h2 align="center">CARIBOU</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6caribo.gif"
                    alt="Caribou"
                    width="154"
                    height="154">

                Caribou are actually reindeer that live in the North American
                Arctic lands. As spring approaches, huge herds of caribou
                travel north to spend their summer on the tundra. Unlike other
                types of deer, both the male and the female caribou have antlers.
            </p>

            <br clear="all"><br>

            <a name="polarbear"></a>
            <h2 align="center">POLAR BEARS</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6polarb.gif"
                    alt="Polar Bear"
                    width="154"
                    height="154">

                A polar bear is one of the largest carnivorous animals in
                the world. It is so powerful that it can kill a seal with
                one blow of a paw. In October, a female polar bear digs a
                large hole in the snow called a den. In her den, she gives
                birth to one or two cubs and does not come out with them
                until spring.
            </p>

            <br clear="all"><br>

            <a name="wolf"></a>
            <h2 align="center">WOLVES</h2>

            <p align="left">
                <img
                    align="left"
                    hspace="10"
                    src="${zooGraphics}/d6wolf.gif"
                    alt="Wolves"
                    width="154"
                    height="154">

                Wolves are predators and will eat almost anything, from
                caribou to mice, depending on the time of year and what
                food is available. Wolves live in groups called packs.
                A wolf pack usually contains about six wolves. One male
                wolf (the Alpha Male) leads the entire pack. One female
                wolf leads the females and the young. The Alpha Male shows
                he is the leader by holding his head up and raising his tail.
                The less important wolves crouch or roll over in front of him.
            </p>

            <br clear="all"><br>

            <center>
                <a href="?KEY=9410">
                    Try taking the Zoo Keeper's Challenge!
                </a>
            </center>

            <br><br>
        </font>
        `
    );
}

// --------------------------------------------------
// POLAR CHALLENGE
// --------------------------------------------------

function renderPolarChallenge() {
    renderPage(
        "Zoo Keeper's Challenge - Polar Regions",
        `
        <center>
            <font size="5">

                <p>
                    Which animal's fur turns white in the winter
                    and brown or gray in the summer?
                </p>

                <a href="?KEY=9420">Polar Bear</a><br>
                <a href="?KEY=9430">Arctic Hare</a><br>
                <a href="?KEY=9440">Caribou</a><br>

                <p>
                    Instructions: Please choose the answer you think is correct.
                </p>

            </font>
        </center>
        `
    );
}

function renderPolarBear() {
    renderPage(
        "Zoo Keeper's Challenge - Polar Regions",
        `
        <center>
            <font size="5">

                The polar bear's fur does not turn white in the winter and
                does not turn brown or gray in the summer. The polar bear's
                fur varies from pure white to a light yellow. The white fur
                is an important disguise for the polar bear as it hunts its
                prey on the ice pack.

                <br><br>

                <p>
                    <a href="?KEY=9410">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

function renderArcticHare() {
    renderPage(
        "Zoo Keeper's Challenge - Polar Regions",
        `
        <center>
            <font size="5">

                <p>
                    <img
                        src="${zooGraphics}/d6hare.gif"
                        alt="Arctic Hare"
                        width="154"
                        height="154"
                        align="left"
                        hspace="10"
                        vspace="10"
                        border="0">

                    The arctic hare's fur turns white in the winter and
                    brown or gray in the summer. In the winter, the arctic
                    hare is white with black ear-tips. The underfur is
                    dense and gray.
                </p>

                <br clear="all"><br>

                <a href="?KEY=9400">
                    Go back to the Animals of the Polar Regions.
                </a>

                <br><br>

            </font>
        </center>
        `
    );
}

function renderCaribou() {
    renderPage(
        "Zoo Keeper's Challenge - Polar Regions",
        `
        <center>
            <font size="5">

                The caribou's fur does not turn white in the winter and
                does not turn brown or gray in the summer. The caribou's
                fur is typically brown and shaggy with a white neck and mane.

                <br><br>

                <p>
                    <a href="?KEY=9410">Please try again.</a>
                </p>

            </font>
        </center>
        `
    );
}

// --------------------------------------------------
// WORLD MAP
// Original: worldmap.pl
// --------------------------------------------------

function renderWorldMap() {
    renderPage(
        "World Map",
        `
        <center>
            <table border="0" width="600">
                <tr>
                    <td>

                        <h2>
                            <center>
                                <img
                                    src="${zooGraphics}/world3a.gif"
                                    alt="World Map"
                                    width="396"
                                    height="283">
                            </center>
                        </h2>

                        <br>

                        <center>
                            <a href="?KEY=9000">
                                <strong>
                                    Go back to the Zoo.
                                </strong>
                            </a>
                        </center>

                        <br>

                    </td>
                </tr>
            </table>
        </center>
        `
    );
}

// --------------------------------------------------
// HELP
// Original: help.pl
// --------------------------------------------------

function renderHelp() {
    renderPage(
        "Zoo Help",
        `
        <center>
            <table border="0" width="600">
                <tr>
                    <td>

                        <center>
                            <font size="+2">
                                <b>

                                    <p>
                                        Animals in this zoo are grouped together by where they live.
                                        <br><br>

                                        Each area of the world has a unique set animals that live there.
                                        <br><br>

                                        This zoo will introduce you to some of the animals
                                        in Africa, Australia, the Oceans and the Polar Regions.
                                        <br><br>

                                        Once you have read about the animals in an area,
                                        you can play a trivia game by taking the ZooKeeper's Challenge.
                                        <br><br>

                                        Now click on one of the areas below to see the animals!
                                    </p>

                                </b>
                            </font>
                        </center>

                        <br>

                    </td>
                </tr>
            </table>
        </center>
        `
    );
}

// --------------------------------------------------
// ROUTER
// --------------------------------------------------

switch (key) {

    // Zoo
    case "9000":
        renderZooMain();
        break;

    // Ocean
    case "9100":
        renderOcean();
        break;

    case "9110":
        renderOceanChallenge();
        break;

    case "9120":
        renderOceanLand();
        break;

    case "9130":
        renderOceanTrees();
        break;

    case "9140":
        renderOceanWater();
        break;

    // Africa
    case "9200":
        renderAfrica();
        break;

    case "9210":
        renderAfricaChallenge();
        break;

    case "9220":
        renderAfricaHippo();
        break;

    case "9230":
        renderAfricaGiraffe();
        break;

    case "9240":
        renderAfricaElephant();
        break;

    // Australia
    case "9300":
        renderAustralia();
        break;

    case "9310":
        renderAustraliaChallenge();
        break;

    case "9320":
        renderAustraliaMarsupials();
        break;

    case "9330":
        renderAustraliaReptiles();
        break;

    case "9340":
        renderAustraliaHerbivores();
        break;

    // Polar Regions
    case "9400":
        renderPolar();
        break;

    case "9410":
        renderPolarChallenge();
        break;

    case "9420":
        renderPolarBear();
        break;

    case "9430":
        renderArcticHare();
        break;

    case "9440":
        renderCaribou();
        break;

    // World Map
    case "9500":
        renderWorldMap();
        break;

    // Help
    case "9900":
        renderHelp();
        break;

    default:
        renderZooMain();
        break;
}
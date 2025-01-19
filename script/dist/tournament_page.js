"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournaments = [
    // 0
    [
        "Horizon Classical on August 23-25",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
    // 2
    [
        "Horizon Classical on October 4-6",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
    // 3
    [
        "Horizon Classical on December 13-15",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
    [
        "Horizon Classical on February 21-23",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
    [
        "Horizon Classical on April 11-13",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
    [
        "Horizon Classical on July 25-27",
        `Official CFC Rated Classical Tournament:
    60 | 30 – 60 minutes with 30 second increment
    5-round swiss`,
        `Sections: Open, U1500, 10 Years Old and Under
One ½ point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
        `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a ‘brilliancy’ for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players’ records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`,
    ],
];
// get the template strings from html
const tournamentTemplate = $("#show-tournament-template").html();
const joinTemplate = $("#join-tournament-template").html();
function showTournamentPg(tournament_num) {
    let view = {
        title: tournaments[tournament_num][0],
        time_control: tournaments[tournament_num][1],
        sections: tournaments[tournament_num][2],
        brilliancy_prize: tournaments[tournament_num][3],
        number: tournament_num,
    };
    let tournamentData = Mustache.render(tournamentTemplate, view);
    console.log(tournamentData);
    // hide the tournament list and title
    $("#tournament-list").hide();
    $("#tournament-title").hide();
    $("#scc-tournament-info").hide();
    // render tournament info to the DOM
    $("#tournament-info").html(tournamentData);
    $("#tournament-info").show();
    // and bring it into view
    $("#tournament-info").get(0).scrollTo({ behavior: "smooth" });
}
function showSCCTournament() {
    // hide the tournament list and title
    $("#tournament-list").hide();
    $("#tournament-title").hide();
    $("#tournament-info").hide();
    $("#scc-tournament-info").show();
    $("#tournament-info").get(0).scrollTo({ behavior: "smooth" });
}
// show the list list view
function showTournamentLst() {
    $("#tournament-info").hide();
    $("#scc-tournament-info").hide();
    // show the tournament list and title
    $("#tournament-list").show();
    $("#tournament-title").show();
    $("#tournament-title").get(0).scrollTo({ behavior: "smooth" });
}
function joinTournamentView(num) {
    console.log("joined ", num);
    let view = {
        title: tournaments[num][0],
        number: num,
    };
    let joinPg = Mustache.render(joinTemplate, view);
    $("#page-content").replaceWith(joinPg);
    $("#top").get(0).scrollTo({ behavior: "smooth" });
}
//# sourceMappingURL=tournament_page.js.map
const tournaments = [
  // 0
  [
    "Horizon Classical on August 23-25",
    "tournament details 1: something about the sections and rating etc.",
  ],
  // 1
  ["Grand Prix Leg 1 on September 7", "Organized by SCC rapid, idk"],
  // 2
  [
    "Horizon Classical on October 4-7",
    "tournament details 2: something about the sections and rating etc.",
  ],
  // 3

  ["Grand Prix Leg 2 on November 2", "Organized by SCC, rapid, idk"],
  // 4
  [
    "Horizon Classical on December 13-15",
    "tournament details 3: something about the sections and rating etc.",
  ],
  // 5
  ["Grand Prix Leg 3 on January 2", "Organized by SCC, rapid, idk"],
  // 6
  [
    "Horizon Classical on February 21-23",
    "tournament details 4: something about the sections and rating etc.",
  ],
  // 7
  ["Grand Prix Leg 4 on March 15", "Organized by SCC, rapid, idk"],
  // 8
  [
    "Horizon Classical on April 11-13",
    "tournament details 5: something about the sections and rating etc.",
  ],
  // 9
  ["Grand Prix Leg 5 on May 10", "Organized by SCC, rapid, idk"],
  // 10
  ["Grand Prix Super Final on June 7", "Organized by SCC, rapid, idk"],
  // 11
  [
    "Horizon Classical on July 25-27",
    "tournament details 6: something about the sections and rating etc.",
  ],
];

// get the template strings from html
const tournamentTemplate: string = $("#show-tournament-template").html();
const joinTemplate: string = $("#join-tournament-template").html();

function showTournamentPg(tournament_num: number) {
  let view = {
    title: tournaments[tournament_num][0],
    description: tournaments[tournament_num][1],
    number: tournament_num,
  };
  let tournamentData = Mustache.render(tournamentTemplate, view);
  console.log(tournamentData);

  // hide the tournament list and title
  $("#tournament-list").hide();
  $("#tournament-title").hide();
  // render tournament info to the DOM
  $("#tournament-info").html(tournamentData);
  $("#tournament-info").show();
}

// show the list list view
function showTournamentLst() {
  $("#tournament-info").hide();

  // show the tournament list and title
  $("#tournament-list").show();
  $("#tournament-title").show();
}

function joinTournamentView(num: number) {
  console.log("joined ", num);
  let view = {
    title: tournaments[num][0],
    number: num,
  };
  let joinPg = Mustache.render(joinTemplate, view);

  $("#page-content").replaceWith(joinPg);
}

// Submit the join tournament form
function submitJoinTournament() {
  console.log("submit tournament forum");
  const forum = document.getElementById("tournament-signup") as HTMLFormElement;
  console.log(forum);

  const name = forum.elements["name"].value;
  const email = forum.elements["email"].value;
  const cfcId = forum.elements["cfc-id"].value;
  const section = forum.elements["section"].value;

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Cfc ID: ", cfcId);
  console.log("Section: ", section);
}

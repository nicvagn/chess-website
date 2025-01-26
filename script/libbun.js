"use strict";
(() => {
  // library_books.js
  var books = [
    { title: "1 ... d6 Move by Move", author: "Cyrus Lakdawala" },
    { title: "107 Great Chess Battles, 1939-1945", author: "Alexander Alekhine" },
    { title: "200 Open Games", author: "David Bronstein" },
    { title: "303 Tactical Chess Puzzles", author: "Fred Wilson" },
    { title: "606 Puzzles for Chess Nuts", author: "Fred Wilson" },
    { title: "Alekhine's Defence", author: "Nigel Davies" },
    { title: "All the Wrong Moves", author: "Sasha Chapin" },
    { title: "Amateur's Mind", author: "Jeremy Silman" },
    { title: "Art of Attack in Chess", author: "Vladimir Vukovic" },
    { title: "Art of Chess Analysis", author: "Jan Timman" },
    { title: "Art of Chess Analysis", author: "Jan Timman" },
    { title: "Art of Defence in Chess", author: "Lev Polugaevsky" },
    { title: "Art of Defense in Chess", author: "Andrew Soltis" },
    { title: "Art of Positional Play", author: "Samuel Reshevsky" },
    { title: "Art of Sacrifice in Chess", author: "Rudolf Spielmann" },
    { title: "Art of the King's Indian", author: "Eduard Gufeld" },
    { title: "Art of the Middle Game", author: "Paul Keres" },
    { title: "Attacking Manual 1", author: "Jacob Aagaard" },
    { title: "Attacking Repertoire for White", author: "Sam Collins" },
    { title: "Basic Chess Endings", author: "Reuben Fine" },
    { title: "Beating the King's Indian and Grunfeld", author: "Timothy Taylor" },
    { title: "Beating the Open Games", author: "Mihail Marin" },
    { title: "Beating the Petroff", author: "Vassilios Kotronias" },
    { title: "Beating Unusual Chess Openings", author: "Richard Palliser" },
    { title: "Benko Gambit Revealed", author: "Neil McDonald" },
    { title: "Bird's Opening", author: "Timothy Taylor" },
    { title: "Birth of the Chess Queen", author: "Marilyn Yalom" },
    { title: "Blackmar-Diemer Gambit", author: "Christopher Scheerer" },
    { title: "Bobby Fischer", author: "Karsten Mueller" },
    {
      title: "Bobby Fischer Goes to War: How the Soviets Lost the Most Extraordinary Chess Match of All Time",
      author: "David Edmonds"
    },
    { title: "Bobby Fischer: Profile of a Prodigy", author: "Frank Brady" },
    { title: "Botvinnik Semi-Slav", author: "Steffen Pedersen" },
    { title: "Bronstein on the King's Indian", author: "David Bronstein" },
    { title: "Build Up Your Chess 1: The Fundamentals", author: "Artur Yusupov" },
    { title: "Capablanca's Best Chess Endings", author: "Irving Chernev" },
    {
      title: "Caro Kann Defence: Advance Variation and Gambit System",
      author: "Anatoly Karpov"
    },
    { title: "Caro-Kann Defence", author: "Anatoly Karpov" },
    { title: "Checkmate in Prague", author: "Lud\u011Bk Pachman" },
    { title: "Checkmate!: My First Chess Book", author: "Garry Kasparov" },
    { title: "Chess", author: "L\xE1szl\xF3 Polg\xE1r" },
    { title: "Chess Artist", author: "J. C. Hallman" },
    { title: "Chess Brilliancy", author: "Iakov Damsky" },
    { title: "Chess Duels with the Champions", author: "Yasser Seirawan" },
    { title: "Chess Exam and Training Guide", author: "Igor Khmelnitsky" },
    { title: "Chess Explained: The c3 Sicilian", author: "Sam Collins" },
    { title: "Chess for Zebras", author: "Jonathan Rowson" },
    { title: "Chess from Morphy to Botwinnik", author: "Imre Konig" },
    { title: "Chess Fundamentals", author: "Jos\xE9 R. Capablanca" },
    {
      title: "Chess Fundamentals (Revised and Updated)",
      author: "Jose Capablanca"
    },
    { title: "Chess Lessons", author: "Vladimir Popov" },
    { title: "Chess Openings for the Average Player", author: "T. D. Harding" },
    { title: "Chess Openings: Traps And Zaps", author: "Bruce Pandolfini" },
    { title: "Chess Player's Handbook", author: "Howard Staunton" },
    { title: "Chess Self-Improvement", author: "Zenon Franco" },
    { title: "Chess Software User's Guide", author: "Byron Jacobs" },
    { title: "Chess Strategy", author: "Eduard Gufeld" },
    { title: "Chess Strategy in Action", author: "John Watson" },
    {
      title: "Chess Success: Planning After the Opening",
      author: "Neil McDonald"
    },
    {
      title: "Chess World Title Contenders and Their Styles",
      author: "Craig Pritchett"
    },
    { title: "Chessercizes", author: "Bruce Pandolfini" },
    {
      title: "Chigorin Defence According to Morozevich",
      author: "Alexander Morozevich"
    },
    {
      title: "Closed Spanish: Karpov/Zaitsev Systems",
      author: "Anatoly Bikhovsky"
    },
    { title: "Complete Benoni", author: "Lev Psakhis" },
    { title: "Complete Chess Workout", author: "Richard Palliser" },
    { title: "Complete Hedgehog: Volume 1", author: "Sergey Shipov" },
    { title: "Complete Semi-Slav", author: "Peter Wells" },
    { title: "Controversial Samisch King's Indian", author: "Chris Ward" },
    { title: "Counter Gambits", author: "T. D. Harding" },
    { title: "Counterplay", author: "Prof. Robert R. Desjarlais" },
    { title: "Creative Chess Opening Preparation", author: "Viacheslav Eingorn" },
    { title: "Creative Chess Strategy", author: "Alfonso Romero" },
    { title: "Curacao 1962", author: "Jan Timman" },
    { title: "Danger in Chess", author: "Amatzia Avni" },
    { title: "Dangerous Weapons - 1 e4 e5", author: "John Emms" },
    { title: "Dangerous Weapons - The Benoni and Benko", author: "John Emms" },
    { title: "Dangerous Weapons: The Dutch", author: "Richard Palliser" },
    { title: "Dangerous Weapons: The Nimzo-Indian", author: "John Emms" },
    { title: "Dangerous Weapons: The Sicilian", author: "John Emms" },
    { title: "Dealing with d4 Deviations", author: "John Cox" },
    { title: "Decision-Making at the Chessboard", author: "Viacheslav Eingorn" },
    { title: "Decisive Games in Chess History", author: "Ludek Pachman" },
    { title: "Dismantling the Sicilian", author: "Jesus de la Villa" },
    { title: "Dutch Leningrad", author: "Neil McDonald" },
    { title: "Dutch Stonewall", author: "Jacob Aagaard" },
    { title: "Dvoretsky's Analytical Manual", author: "Mark Dvoretsky" },
    { title: "Dvoretsky's Endgame Manual", author: "Mark Dvoretsky" },
    { title: "Dynamic Pawn Play in Chess", author: "Drazen Marovic" },
    { title: "Dynamic Reti", author: "Nigel Davies" },
    {
      title: "Easy Guide to the Panov-Botvinnik Attack",
      author: "Jacob Aagaard"
    },
    { title: "End Game", author: "Dominic Lawson" },
    { title: "Endgame Challenge", author: "John Nunn" },
    { title: "Engaging Pieces", author: "Howard Goldowsky" },
    { title: "English ...e5", author: "Alex Raetsky" },
    { title: "English Attack", author: "Nick de Firmian" },
    { title: "Excelling at Combinational Play", author: "Jacob Aagaard" },
    { title: "Excelling at Positional Chess", author: "Jacob Aagaard" },
    { title: "Excelling at Technical Chess", author: "Jacob Aagaard" },
    { title: "Experts Vs. the Sicilian", author: "Jacob Aagaard" },
    { title: "Fianchetto Grunfeld", author: "Adrian Mikhalchishin" },
    {
      title: "Fifteen Games and Their Stories",
      author: "Michail Moiseevi\u010D Botvinnik"
    },
    { title: "Find the Checkmate", author: "Gary Lane" },
    { title: "Find the Winning Move", author: "Gary Lane" },
    { title: "Fire on Board", author: "Alexei Shirov" },
    { title: "Fire on Board Part 2: 1997-2004", author: "Alexei Shirov" },
    { title: "Fischer v. Spassky: Reykjavik 1972", author: "C.H.O'D. Alexander" },
    {
      title: "Fischer Vs. Spassky World Chess Championship Match 1972",
      author: "Svetozar Gligoric"
    },
    { title: "Flank Openings", author: "Richard Palliser" },
    { title: "French Classical", author: "Byron Jacobs" },
    {
      title: "French Defence Advance Variation Volume 1",
      author: "Evgenny Sveshnikov"
    },
    {
      title: "French Defence Advance Variation Volume 2",
      author: "Evgeny Sveshnikov"
    },
    {
      title: "French Defence: Steinitz, Classical and Other Variations",
      author: "Lev Psakhis"
    },
    { title: "French Tarrasch", author: "John Emms" },
    { title: "From London to Elista", author: "Evgeny Bareev" },
    { title: "Fundamental Chess Endings", author: "Frank Lamprecht" },
    { title: "Gambit Guide to the Bogo-Indian", author: "Steffen Pedersen" },
    { title: "Gambit Play", author: "Angus Dunnington" },
    { title: "Gambiteer I", author: "Nigel Davies" },
    { title: "Game of Chess", author: "Siegbert Tarrasch" },
    {
      title: "Garry Kasparov on Fischer: Garry Kasparov On My Great Predecessors, Part 4",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov on Garry Kasparov, Part 1",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov on Modern Chess: Part Two: Kasparov Vs Karpov 1975-1985",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov on My Great Predecessors",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov on My Great Predecessors, Part One",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov on My Great Predecessors, Part Two",
      author: "Garry Kasparov"
    },
    {
      title: "Garry Kasparov's Greatest Chess Games: Vol 1",
      author: "Igor Stohl"
    },
    {
      title: "Garry Kasparov's Greatest Chess Games: Volum 2",
      author: "Igor Stohl"
    },
    { title: "Genius in the Background", author: "Tibor Karolyi" },
    { title: "Grandmaster Versus Amateur", author: "Jacob Aagaard" },
    { title: "Great Moments in Modern Chess", author: "Reuben Fine" },
    { title: "Greatest Ever Chess Opening Ideas", author: "Christoph Scheerer" },
    { title: "Grunfeld Defence", author: "Nigel Davies" },
    { title: "Hedgehog", author: "Mihai Suba" },
    { title: "Heroic Tales", author: "Taylor Kingston (Editor)" },
    { title: "Hippopotamus Rises", author: "Andrew Martin" },
    { title: "How Chess Games Are Won and Lost", author: "Lars Bo Hansen" },
    { title: "How Karpov Wins", author: "Edmar Mednis" },
    { title: "How to Beat Bobby Fischer", author: "Edmar Mednis" },
    { title: "How to Beat Your Dad at Chess", author: "Murray Chandler" },
    { title: "How to Defend in Chess", author: "Colin Crouch" },
    { title: "How to Play Chess Endgames", author: "Karsten Muller" },
    { title: "How to Play the English Opening", author: "Anatoly Karpov" },
    { title: "How to Play the Middle Game in Chess", author: "John Littlewood" },
    { title: "How to Reassess Your Chess", author: "Jeremy Silman" },
    { title: "How To Reassess Your Chess", author: "Jeremy Silman" },
    {
      title: "How to Win in the Chess Endings",
      author: "Israel Albert Horowitz"
    },
    { title: "Imagination in Chess", author: "Paata Gaprindashvili" },
    { title: "Immortal Game", author: "David Shenk" },
    { title: "Improve Your Chess", author: "Lars Bo Hansen" },
    {
      title: "Inner Game of Chess: How to Calculate and Win",
      author: "Andrew Soltis"
    },
    { title: "Inside the Chess Mind", author: "Jacob Aagaard" },
    { title: "Italian Game and Evans Gambit", author: "Jan Pinski" },
    {
      title: "Kasparov: How His Predecessors Misled Him About Chess",
      author: "Tibor Karolyi"
    },
    {
      title: "Kasparov: How His Predecessors Misled Him About Chess",
      author: "Tibor Karolyi"
    },
    { title: "Kasparov vs Karpov 1986-1987", author: "Garry Kasparov" },
    { title: "Kasparov vs. Karpov 1990", author: "Garry Kasparov" },
    { title: "Kasparov's Fighting Chess 1993-1998", author: "Tibor Karolyi" },
    { title: "Kasparov's Fighting Chess 1999-2005", author: "Tibor Karolyi" },
    { title: "Key Elements of Chess Strategy", author: "Georgy Lisitsin" },
    { title: "Khalifman", author: "Gennady Nesis" },
    { title: "King Power in Chess", author: "Edmar Mednis" },
    { title: "King's Gambit", author: "Paul Hoffman" },
    { title: "King's Gambit", author: "Neil McDonald" },
    {
      title: "King's Indian Defence: Mar Del Plata Variation",
      author: "Svetozar Gligoric"
    },
    { title: "Kings, Commoners and Knaves", author: "Edward Winter" },
    { title: "Kings of New York", author: "Michael Weinreb" },
    { title: "Kramnik", author: "Vladimir Kramnik" },
    { title: "Lasker's Manual of Chess", author: "Emanuel Lasker" },
    { title: "Learn from the Legends", author: "Mihail Marin" },
    { title: "Lessons in Chess Strategy", author: "Valeri Beim" },
    { title: "Mammoth Book of Chess 2022 Edition", author: "Graham Burgess" },
    {
      title: "Mammoth Book of the World's Greatest Chess Games",
      author: "Graham Burgess"
    },
    { title: "Master Pieces", author: "Gareth Williams" },
    { title: "Mastering Positional Chess", author: "Daniel Naroditsky" },
    { title: "Mastering the Chess Openings Volume 2", author: "John Watson" },
    { title: "Mastering the Chess Openings Volume 3", author: "John Watson" },
    { title: "Mastering the Chess Openings: Volume 4", author: "John Watson" },
    { title: "Mastering the Sicilian", author: "Danny Kopec" },
    { title: "Meran Semi-Slav", author: "Reinaldo Vera" },
    { title: "Middle Game in Chess", author: "Eugene A. Znosko-Borovsky" },
    { title: "Middlegame in Chess", author: "Reuben Fine" },
    { title: "Modern Benoni Revealed", author: "Richard Palliser" },
    { title: "Modern Chess Analysis", author: "Robin Smith" },
    { title: "Modern Chess - Move by Move", author: "Col\xEDn Crouch" },
    { title: "Modern Chess Openings, 15th Edition", author: "Nick De Firmian" },
    { title: "Morphy's Games of Chess", author: "Philip Sergeant" },
    { title: "Most Amazing Chess Moves of All Time", author: "John Emms" },
    {
      title: "Most Instructive Games of Chess Ever Played",
      author: "Irving Chernev"
    },
    { title: "My 60 Memorable Games", author: "Bobby Fischer" },
    { title: "My Best Games of Chess, 1908-1937", author: "Alexander Alekhine" },
    { title: "My Best Games of Chess: 1935-1957", author: "Smyslov" },
    {
      title: "My Best Games: Volume 1, Games with White",
      author: "Victor Korchnoi"
    },
    {
      title: "My Best Games: Volume 2, Games with Black",
      author: "Victor Korchnoi"
    },
    { title: "My Magic Years with Topalov", author: "Romain Edouard" },
    { title: "My System", author: "Aaron Nimzowitsch" },
    { title: "My System", author: "Aron Nimzowitsch" },
    { title: "Najdorf - Life and Games", author: "Thomas Lissowski" },
    { title: "Nimzo-Indian", author: "Reinaldo Vera" },
    { title: "Nimzo-Indian Rubinstein", author: "Dunnington" },
    { title: "Open Sicilian 1", author: "Milos Pavlovic" },
    {
      title: "Opening for White According to Anand: 1.e4 Volume 2",
      author: "Alexander Khalifman"
    },
    {
      title: "Pal Benko: My Life, Games and Compositions",
      author: "Jeremy Silman"
    },
    { title: "Paul Keres", author: "Paul Keres" },
    { title: "Paul Keres", author: "Paul Keres" },
    { title: "Pawn Power in Chess", author: "Hans Kmoch" },
    { title: "Pawn Sacrifice!", author: "Timothy Taylor" },
    { title: "Pawn Structure Chess", author: "Andrew Soltis" },
    { title: "Petroff Defence", author: "Alex Raetsky" },
    { title: "Philidor Files", author: "Christian Bauer" },
    { title: "Pirc in Black and White", author: "James Vigus" },
    { title: "Play 1... b6", author: "Christian Bauer" },
    { title: "Play 1... Nc6!", author: "Christoph Wisnewski" },
    { title: "Play e4 e5!", author: "Nigel Davies" },
    { title: "Play the Benko Gambit", author: "Nicolai V. Pedersen" },
    { title: "Play the French", author: "John L. Watson" },
    { title: "Play the King's Indian", author: "Joe Gallagher" },
    { title: "Play the Nimzo-Indian", author: "Edward Dearing" },
    { title: "Play the Ponziani", author: "Dave Taylor" },
    { title: "Play the Ruy Lopez", author: "Andrew Greet" },
    { title: "Positional Chess Handbook", author: "Israel Gelfer" },
    { title: "Positional Play", author: "Mark Dvoretsky" },
    { title: "Practical Chess Defence", author: "Jacob Aagaard" },
    { title: "Practical Chess Endings by Keres", author: "Paul Keres" },
    { title: "Practical Chess Psychology", author: "Amatzia Avni" },
    {
      title: "Practical Endgame Play - Mastering the Basics",
      author: "Efstratios Grivas"
    },
    { title: "Queen of Katwe", author: "Tim Crothers" },
    { title: "Queen's Gambit Accepted", author: "Chris Ward" },
    { title: "Queen's Gambit Declined", author: "Bogdan Lalic" },
    { title: "Queen's Gambit Declined: 5 Bf4!", author: "Colin Crouch" },
    { title: "Queen's Indian", author: "Peter Wells" },
    { title: "Questions of Modern Chess Theory", author: "Isaac Lipnitsky" },
    { title: "Reassess Your Chess Workbook", author: "Jeremy Silman" },
    { title: "Rethinking the Chess Pieces", author: "Andrew Soltis" },
    { title: "Revolution in the 70's", author: "Garry Kasparov" },
    { title: "Road to Chess Improvement", author: "Alex Yermolinsky" },
    { title: "Rocking the Ramparts", author: "Larry Christiansen" },
    { title: "Rubinstein's Chess Masterpieces", author: "Akiba Rubinstein" },
    { title: "Ruy Lopez", author: "Neil McDonald" },
    { title: "Samisch King's Indian Uncovered", author: "Alexander Cherniaev" },
    { title: "Scotch Game EXplained", author: "Gary Lane" },
    { title: "Secrets of Chess Defence", author: "Mihail Marin" },
    { title: "Secrets of Chess Transformations", author: "Drazen Marovic" },
    { title: "Secrets of Modern Chess Strategy", author: "John Watson" },
    { title: "Secrets of Positional Chess", author: "Marovic Drazen" },
    { title: "Secrets of Practical Chess", author: "John Nunn" },
    { title: "Secrets of Practical Chess", author: "John Nunn" },
    { title: "Seven Deadly Chess Sins", author: "Jonathan Rowson" },
    { title: "Sicilian Defense", author: "Gennadi Timoshchenko" },
    { title: "Silman's Complete Endgame Couorse", author: "Jeremy Silman" },
    { title: "Simple Chess", author: "Michael Stean" },
    { title: "Sniper", author: "Charlie Storey" },
    { title: "Sokolov's Best Games", author: "Ivan Sokolov" },
    { title: "Solitaire Chess", author: "Bruce Pandolfini" },
    { title: "Sorcerer's Apprentice", author: "Tom Furstenberg" },
    { title: "Soviet Chess School", author: "Alexander Kotov" },
    { title: "Soviet Chess Strategy", author: "Alexey Suetin" },
    { title: "Spanish Exchange Variation", author: "Stefan Kindermann" },
    { title: "Starting Out: Benoni Systems", author: "Alexander Raetsky" },
    { title: "Starting Out: Closed Sicilian", author: "Richard Palliser" },
    { title: "Starting Out: King's Indian Attack", author: "John Emms" },
    { title: "Starting Out: Modern Benoni", author: "Endre Vegh" },
    { title: "Starting Out: Queen's Indian", author: "John Emms" },
    { title: "Starting Out: Sicilian Najdorf", author: "Richard Palliser" },
    { title: "Starting Out: Sicilian Sveshnikov", author: "John Cox" },
    { title: "Starting Out: Slav and Semi-Slav", author: "Glenn Flear" },
    { title: "Starting Out - The Accelerated Dragon", author: "Andrew Greet" },
    { title: "Starting Out: The Caro-Kann", author: "Joe Gallagher" },
    { title: "Starting Out: The Colle", author: "Richard Palliser" },
    { title: "Starting Out: The Dutch Defence", author: "Richard Palliser" },
    { title: "Starting Out: The English", author: "Neil McDonald" },
    { title: "Starting Out: The Grunfeld", author: "Jacob Aagaard" },
    { title: "Starting Out: The King's Indian", author: "Joe Gallagher" },
    { title: "Starting Out: The Nimzo-Indian", author: "Chris Ward" },
    { title: "Starting Out: The Pirc/Modern", author: "Joe Gallagher" },
    { title: "Starting Out: The Reti", author: "Neil McDonald" },
    { title: "Starting Out: The Scotch Game", author: "John Emms" },
    { title: "Starting Out: The Sicilian", author: "John Emms" },
    { title: "Strategic Chess", author: "Edmar Mednis" },
    { title: "Survival Guide to Competitive Chess", author: "John Emms" },
    { title: "Tactical Chess Endings", author: "John Nunn" },
    { title: "Taimanov's Selected Games", author: "Mark Taimanov" },
    { title: "Tango! A Dynamic Answer to 1. d4", author: "Richard Palliser" },
    { title: "Technique in Chess", author: "Gerald Abrahams" },
    { title: "Test of Time", author: "Garry Kasparov" },
    { title: "Test Your Chess with Daniel King", author: "Daniel King" },
    { title: "Think Like a Grandmaster", author: "A.A. Kotov" },
    { title: "Training for the Tournament Player", author: "Mark Dvoretsky" },
    { title: "Transpo Tricks in Chess", author: "Andrew Soltis" },
    {
      title: "Turk: The Life and Times of the Famous 18th Century Chess Playing Machine",
      author: "Tom Standage"
    },
    { title: "Turning Advantage Into Victory in Chess", author: "Andrew Soltis" },
    { title: "Ultimate Colle", author: "Gary Lane" },
    { title: "Uncompromising Chess", author: "Alexander Belyavsky" },
    { title: "Understanding Chess Move by Move", author: "John Nunn" },
    { title: "Understanding Chess Tactics", author: "Martin Weteschnik" },
    { title: "Understanding Maroczy Structures", author: "Adrian Mikhalchishin" },
    { title: "Understanding the Gr\xFCnfeld", author: "Jonathan Rowson" },
    { title: "Understanding the King's Indian", author: "Mikhail Golubev" },
    { title: "Understanding the Leningrad Dutch", author: "Valeri Beim" },
    { title: "Van Perlo's Endgame Tactics", author: "Ger van Perlo" },
    {
      title: "Vishy Anand - My Best Games of Chess",
      author: "Viswanathan Anand"
    },
    { title: "Why Lasker Matters", author: "Andrew Soltis" },
    { title: "Why You Lose at Chess", author: "Tim Harding" },
    { title: "Win with the Stonewall Dutch", author: "Sverre Johnsen" },
    { title: "Winning Chess Endings", author: "Yasser Seirawan" },
    { title: "Winning Chess Strategies", author: "Yassser Seirawan" },
    { title: "Winning Chess Tactics", author: "Yasser Seirawan" },
    { title: "Winning Endgame Technique", author: "Alexander Beliavsky" },
    { title: "Winning Pawn Structures", author: "Alexander Baburin" },
    { title: "Winning with Chess Psychology", author: "Pal Benko" },
    { title: "Winning with the Trompowsky", author: "Peter Wells" },
    { title: "Wisest Things Ever Said About Chess", author: "Andrew Soltis" },
    {
      title: "Zuke 'em the Colle-Zukertort Revolutionized",
      author: "David Rudel"
    }
  ];

  // ../../node_modules/.pnpm/fuse.js@7.0.0/node_modules/fuse.js/dist/fuse.mjs
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys.forEach((key) => {
        let obj = createKey(key);
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id = createKeyId(name);
      getFn = key.getFn;
    }
    return { path, id, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(obj2);
      } else {
        let key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path2, index + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
  };
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys = []) {
      this.keys = keys;
      this._keysMap = {};
      keys.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            } else ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for (let len = matchmask.length; i < len; i += 1) {
      let match = matchmask[i];
      if (match && start === -1) {
        start = i;
      } else if (!match && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore$1(pattern, {
        currentLocation: index,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i = 0;
        while (i < patternLen) {
          matchMask[index + i] = 1;
          i += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i = 0; i < patternLen; i += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern, {
          errors: i,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i) - 1;
      for (let j = finish; j >= start; j -= 1) {
        let currentLocation = j - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        if (i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }
        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern, {
            errors: i,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern, {
        errors: i + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i = 0, len = pattern.length; i < len; i += 1) {
      const char = pattern.charAt(i);
      mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
  }
  var BitapSearch = class {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, includeMatches } = this.options;
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index = text.indexOf(this.pattern);
      const isMatch = index === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location = 0;
      let index;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index = text.indexOf(this.pattern, location)) > -1) {
        location = index + patternLen;
        indices.push([index, location - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern, options2 = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i = 0, len = query.length; i < len; i += 1) {
        const queryItem = query[i];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options2));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options2));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options2) {
      return options2.useExtendedSearch;
    }
    searchIn(text) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i = 0, qLen = query.length; i < qLen; i += 1) {
        const searchers2 = query[i];
        allIndices.length = 0;
        numMatches = 0;
        for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
          const searcher = searchers2[j];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options2) {
    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern, options2)) {
        return new searcherClass(pattern, options2);
      }
    }
    return new BitapSearch(pattern, options2);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  var isPath = (query) => !!query[KeyType.PATH];
  var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  var convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options2, { auto = true } = {}) {
    const next = (query2) => {
      let keys = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options2);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys[0]
      };
      keys.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options2 = {}, index) {
      this.options = { ...Config, ...options2 };
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i = 0, len = this._docs.length; i < len; i += 1) {
        const doc = this._docs[i];
        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i = 0, len = node.children.length; i < len; i += 1) {
          const child = node.children[i];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "7.0.0";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }

  // library_page.js
  var options = {
    includeScore: true,
    keys: ["title", "author"]
  };
  var LibSearch = new Fuse(books, options);
  console.log(LibSearch.search("h"));
})();

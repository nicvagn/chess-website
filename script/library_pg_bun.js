"use strict";
(() => {
  // ../node_modules/.pnpm/mustache@4.2.0/node_modules/mustache/mustache.mjs
  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill(object) {
    return objectToString.call(object) === "[object Array]";
  };
  function isFunction(object) {
    return typeof object === "function";
  }
  function typeStr(obj) {
    return isArray(obj) ? "array" : typeof obj;
  }
  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function hasProperty(obj, propName) {
    return obj != null && typeof obj === "object" && propName in obj;
  }
  function primitiveHasOwnProperty(primitive, propName) {
    return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
  }
  var regExpTest = RegExp.prototype.test;
  function testRegExp(re, string) {
    return regExpTest.call(re, string);
  }
  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
  };
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
      return entityMap[s];
    });
  }
  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;
  function parseTemplate(template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];
    var tokens = [];
    var spaces = [];
    var hasTag = false;
    var nonSpace = false;
    var indentation = "";
    var tagIndex = 0;
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }
      hasTag = false;
      nonSpace = false;
    }
    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tagsToCompile) {
      if (typeof tagsToCompile === "string")
        tagsToCompile = tagsToCompile.split(spaceRe, 2);
      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error("Invalid tags: " + tagsToCompile);
      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
      closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
    }
    compileTags(tags || mustache.tags);
    var scanner = new Scanner(template);
    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;
      value = scanner.scanUntil(openingTagRe);
      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);
          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += " ";
          }
          tokens.push(["text", chr, start, start + 1]);
          start += 1;
          if (chr === "\n") {
            stripSpace();
            indentation = "";
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }
      if (!scanner.scan(openingTagRe))
        break;
      hasTag = true;
      type = scanner.scan(tagRe) || "name";
      scanner.scan(whiteRe);
      if (type === "=") {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === "{") {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = "&";
      } else {
        value = scanner.scanUntil(closingTagRe);
      }
      if (!scanner.scan(closingTagRe))
        throw new Error("Unclosed tag at " + scanner.pos);
      if (type == ">") {
        token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
      } else {
        token = [type, value, start, scanner.pos];
      }
      tagIndex++;
      tokens.push(token);
      if (type === "#" || type === "^") {
        sections.push(token);
      } else if (type === "/") {
        openSection = sections.pop();
        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);
        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      } else if (type === "=") {
        compileTags(value);
      }
    }
    stripSpace();
    openSection = sections.pop();
    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    return nestTokens(squashTokens(tokens));
  }
  function squashTokens(tokens) {
    var squashedTokens = [];
    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === "text" && lastToken && lastToken[0] === "text") {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }
    return squashedTokens;
  }
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];
    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      switch (token[0]) {
        case "#":
        case "^":
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case "/":
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }
    return nestedTokens;
  }
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }
  Scanner.prototype.eos = function eos() {
    return this.tail === "";
  };
  Scanner.prototype.scan = function scan(re) {
    var match = this.tail.match(re);
    if (!match || match.index !== 0)
      return "";
    var string = match[0];
    this.tail = this.tail.substring(string.length);
    this.pos += string.length;
    return string;
  };
  Scanner.prototype.scanUntil = function scanUntil(re) {
    var index = this.tail.search(re), match;
    switch (index) {
      case -1:
        match = this.tail;
        this.tail = "";
        break;
      case 0:
        match = "";
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }
    this.pos += match.length;
    return match;
  };
  function Context(view, parentContext) {
    this.view = view;
    this.cache = { ".": this.view };
    this.parent = parentContext;
  }
  Context.prototype.push = function push(view) {
    return new Context(view, this);
  };
  Context.prototype.lookup = function lookup(name) {
    var cache = this.cache;
    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;
      while (context) {
        if (name.indexOf(".") > 0) {
          intermediateValue = context.view;
          names = name.split(".");
          index = 0;
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }
        if (lookupHit) {
          value = intermediateValue;
          break;
        }
        context = context.parent;
      }
      cache[name] = value;
    }
    if (isFunction(value))
      value = value.call(this.view);
    return value;
  };
  function Writer() {
    this.templateCache = {
      _cache: {},
      set: function set(key, value) {
        this._cache[key] = value;
      },
      get: function get(key) {
        return this._cache[key];
      },
      clear: function clear() {
        this._cache = {};
      }
    };
  }
  Writer.prototype.clearCache = function clearCache() {
    if (typeof this.templateCache !== "undefined") {
      this.templateCache.clear();
    }
  };
  Writer.prototype.parse = function parse(template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ":" + (tags || mustache.tags).join(":");
    var isCacheEnabled = typeof cache !== "undefined";
    var tokens = isCacheEnabled ? cache.get(cacheKey) : void 0;
    if (tokens == void 0) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };
  Writer.prototype.render = function render(template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = view instanceof Context ? view : new Context(view, void 0);
    return this.renderTokens(tokens, context, partials, template, config);
  };
  Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
    var buffer = "";
    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = void 0;
      token = tokens[i];
      symbol = token[0];
      if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === ">") value = this.renderPartial(token, context, partials, config);
      else if (symbol === "&") value = this.unescapedValue(token, context);
      else if (symbol === "name") value = this.escapedValue(token, context, config);
      else if (symbol === "text") value = this.rawValue(token);
      if (value !== void 0)
        buffer += value;
    }
    return buffer;
  };
  Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
    var self = this;
    var buffer = "";
    var value = context.lookup(token[1]);
    function subRender(template) {
      return self.render(template, context, partials, config);
    }
    if (!value) return;
    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== "string")
        throw new Error("Cannot use higher-order sections without the original template");
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };
  Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);
    if (!value || isArray(value) && value.length === 0)
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };
  Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, "");
    var partialByNl = partial.split("\n");
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join("\n");
  };
  Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
    if (!partials) return;
    var tags = this.getConfigTags(config);
    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };
  Writer.prototype.unescapedValue = function unescapedValue(token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };
  Writer.prototype.escapedValue = function escapedValue(token, context, config) {
    var escape = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return typeof value === "number" && escape === mustache.escape ? String(value) : escape(value);
  };
  Writer.prototype.rawValue = function rawValue(token) {
    return token[1];
  };
  Writer.prototype.getConfigTags = function getConfigTags(config) {
    if (isArray(config)) {
      return config;
    } else if (config && typeof config === "object") {
      return config.tags;
    } else {
      return void 0;
    }
  };
  Writer.prototype.getConfigEscape = function getConfigEscape(config) {
    if (config && typeof config === "object" && !isArray(config)) {
      return config.escape;
    } else {
      return void 0;
    }
  };
  var mustache = {
    name: "mustache.js",
    version: "4.2.0",
    tags: ["{{", "}}"],
    clearCache: void 0,
    escape: void 0,
    parse: void 0,
    render: void 0,
    Scanner: void 0,
    Context: void 0,
    Writer: void 0,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache(cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache() {
      return defaultWriter.templateCache;
    }
  };
  var defaultWriter = new Writer();
  mustache.clearCache = function clearCache2() {
    return defaultWriter.clearCache();
  };
  mustache.parse = function parse2(template, tags) {
    return defaultWriter.parse(template, tags);
  };
  mustache.render = function render2(template, view, partials, config) {
    if (typeof template !== "string") {
      throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
    }
    return defaultWriter.render(template, view, partials, config);
  };
  mustache.escape = escapeHtml;
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;
  var mustache_default = mustache;

  // dist/tournament_page.js
  var tournaments = [
    // 0
    [
      "Horizon Classical on August 23-25",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ],
    // 2
    [
      "Horizon Classical on October 4-6",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ],
    // 3
    [
      "Horizon Classical on December 13-15",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ],
    [
      "Horizon Classical on February 21-23",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ],
    [
      "Horizon Classical on April 11-13",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ],
    [
      "Horizon Classical on July 25-27",
      `Official CFC Rated Classical Tournament:
    60 | 30 \u2013 60 minutes with 30 second increment
    5-round swiss`,
      `Sections: Open, U1500, 10 Years Old and Under
One \xBD point bye available upon request. No final round byes.
Prizes: Cash Prizes and Medals for 1st, 2nd, and 3rd places.
1st place Open will have their name carved on to the club trophy.
Players are only eligible to win prizes corresponding to the section they registered in.
50% of the registration fee will go to the club, and 50% will go to the cash prizes.`,
      `Brilliancy Prize: Each section will have a brilliancy prize. Anyone can nominate a \u2018brilliancy\u2019 for anyone, but cannot nominate a brilliancy for oneself. The brilliancy must be recorded on both players\u2019 records of the game and should be recreated and presented to the Tournament Director. The brilliancy prize will be considered and chosen on the basis of subjective aesthetic opinion of the TD.`
    ]
  ];
  var tournamentTemplate = $("#show-tournament-template").html();
  var joinTemplate = $("#join-tournament-template").html();
  function showTournamentPg(tournament_num) {
    let view = {
      title: tournaments[tournament_num][0],
      time_control: tournaments[tournament_num][1],
      sections: tournaments[tournament_num][2],
      brilliancy_prize: tournaments[tournament_num][3],
      number: tournament_num
    };
    let tournamentData = mustache_default.render(tournamentTemplate, view);
    console.log(tournamentData);
    $("#tournament-list").hide();
    $("#tournament-title").hide();
    $("#scc-tournament-info").hide();
    $("#tournament-info").html(tournamentData);
    $("#tournament-info").show();
    $("#tournament-info").get(0).scrollTo({ behavior: "smooth" });
  }
  function showSCCTournament() {
    $("#tournament-list").hide();
    $("#tournament-title").hide();
    $("#tournament-info").hide();
    $("#scc-tournament-info").show();
    $("#tournament-info").get(0).scrollTo({ behavior: "smooth" });
  }
  function showTournamentLst() {
    $("#tournament-info").hide();
    $("#scc-tournament-info").hide();
    $("#tournament-list").show();
    $("#tournament-title").show();
    $("#tournament-title").get(0).scrollTo({ behavior: "smooth" });
  }
  function joinTournamentView(num) {
    console.log("joined ", num);
    let view = {
      title: tournaments[num][0],
      number: num
    };
    let joinPg = mustache_default.render(joinTemplate, view);
    $("#page-content").replaceWith(joinPg);
    $("#top").get(0).scrollTo({ behavior: "smooth" });
  }
})();
/*! Bundled license information:

mustache/mustache.mjs:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/

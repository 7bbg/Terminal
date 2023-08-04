function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw) {
    w.innerHTML = nl2br(tw);
  }
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function alert(txt) {
  console.log(txt);
}

var linkedin = "https://www.linkedin.com/in/anthony-nwafor-9b8055236/";
var github = "https://github.com/7bbg/";
var email = 'mailto:anthonynwafor261@gmail.com';

whois = [
  "<br>",
  "Hey, I'm Anthony Nwafor",
  "I'm a computer science student at Mississippi Valley State University",
  "I love to solve challenging and complex problems because i get to learn new things",
  "<br>"
];



social = [
  "<br>",

  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/anthony-nwafor-9b8055236' + "</a>",
  'github         <a href="' + github + '" target="_blank">github/7bbg' + "</a>",
  "<br>"
];



projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub(github/7bbg), or confidential.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          - Who is Anthony Nwafor?',
  '<span class="command">social</span>         - Display social networks',
  '<span class="command">gui</span>            - Go to my portfolio in GUI',
  '<span class="command">projects</span>       - View coding projects',
  '<span class="command">history</span>        - View command history',
  '<span class="command">help</span>           - View all list of command and its function',
  '<span class="command">email</span>          - my email address',
  '<span class="command">clear</span>          - Clear terminal',
  '<span class="command">banner</span>         - Display the header',
  "<br>",
];
/*
     _          _   _                         _   _                __            
    / \   _ __ | |_| |__   ___  _ __  _   _  | \ | |_      ____ _ / _| ___  _ __ 
   / _ \ | '_ \| __| '_ \ / _ \| '_ \| | | | |  \| \ \ /\ / / _` | |_ / _ \| '__|
  / ___ \| | | | |_| | | | (_) | | | | |_| | | |\  |\ V  V / (_| |  _| (_) | |   
 /_/   \_\_| |_|\__|_| |_|\___/|_| |_|\__, | |_| \_| \_/\_/ \__,_|_|  \___/|_|   
                                      |___/                                      
*/
banner = [
  '<span class="index">AnthonyNwafor (AN). All right reserved.</span>',
  "     _          _   _                         _   _                __            ",
  "    / \\   _ __ | |_| |__   ___  _ __  _   _  | \\ | |_      ____ _ / _| ___  _ __ ",
  "   / _ \\ | '_ \\| __| '_ \\ / _ \\| '_ \\| | | | |  \\| \\ \\ /\\ / / _` | |_ / _ \\| '__|",
  "  / ___ \\| | | | |_| | | | (_) | | | | |_| | | |\\  |\\ V  V / (_| |  _| (_) | |   ",
  " ./_/   \\_\\_| |_|\\__|_| |_|\\___/|_| |_|\\__, | |_| \\_| \\_/\\_/ \\__,_|_|  \\___/|_|    ",
  "                                      |___/                                      ",
  '<span class="color2">Welcome to my interactive web terminal. (Version 1.1.0) </span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou hacked my password!ðŸ˜ ",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log("%cPassword: '" + password + "' - I wonder what it does?ðŸ¤”", "color: grey");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("user@AN:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "gui":
      addLine("Opening...", "color2", 80);
      setTimeout(function() {
        window.open('https://anthony-nwafor.000webhostapp.com/');
      }, 1000);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:anthonynwafor261@gmail.com">anthonynwafor261@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials

    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
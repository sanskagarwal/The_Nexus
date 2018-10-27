var tday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function GetClock()
{
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9) nmin="0"+nmin
if(nhour<=9) nhour="0"+nhour
var clocktext=""+tday[nday]+"  "+nhour+":"+nmin+"";
    $("#clockbox").html(clocktext);
}
GetClock();
setInterval(GetClock,1000);


$("#filemanager").on("click",function(){
    var x=$("#mainfilem").css("display");
    if(x==="none")
    {
    $("#mainfilem").css("display","block");}
    else
      {$("#mainfilem").css("display","none");}
});
$("#homeleftm").on("click",function(){
$("#mainfilemhome").css("display","block");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#documentsleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","block");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#uploadsleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","block");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#musicleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","block");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#picturesleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","block");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#videosleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","block");
$("#mainfilemtrash").css("display","none");
});
$("#trashleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","block");
});

$("#terminalwindow").on("click",function(){
  if($(".ubuntu-terminal").css("display")==="none") {
      $(".ubuntu-terminal").css("display","block");
  } else {
      $(".ubuntu-terminal").css("display","none");
  }
});

var terminal = {};

terminal.init = function() {
    document.addEventListener('keydown',terminal.event.keydown,false);
    this.newLine();
};
terminal.scrollDown = function() {
    window.scrollTo(0,document.getElementsByClassName('terminal')[0].clientHeight);
};
terminal.newLine = function() {
    if(document.getElementsByClassName('currline').length)
    document.getElementsByClassName('currline')[0].classList.remove('currline');
    document.getElementById('terminal-console').innerHTML += '<p class="line currline" data-user="root" data-host="server" data-path="~"></p>';
};
terminal.addLine = function(content) {
    var self = this;
    document.getElementById('terminal-console').innerHTML += '<p>' + content + '</p>';
    self.newLine();
};

terminal.history = {};
terminal.history.idx = null;
terminal.history.data = [];
terminal.history.add = function(cmd) {
    terminal.history.idx = null;
    terminal.history.data.push(cmd);
};

terminal.history.getLast = function(direction) {
    if (terminal.history.idx === null)
        terminal.history.idx = terminal.history.data.length;
    if (direction === '-' && terminal.history.idx > 0)
        terminal.history.idx--;
    else if (direction === '+' && terminal.history.idx <= terminal.history.data.length - 1)
        terminal.history.idx++;
    return terminal.history.data[terminal.history.idx];
};

terminal.event = {};
terminal.event.keydown = function(e) {
    var self = terminal;
    var char = e.key;
    var line = document.getElementsByClassName('currline')[0];

    if (e.key === 'Backspace') {
        line.innerText = line.innerText.substr(0, line.innerText.length - 1);
        return;
    } else if (e.key === 'Tab') {
        e.preventDefault();
        return;
    } else if (e.key === 'Dead') {
        char = '~';
    } else if (e.key === 'ArrowUp') {
        line.innerHTML = terminal.history.getLast('-') || '';
        e.preventDefault();
        return;
    } else if (e.key === 'ArrowDown') {
        line.innerHTML = terminal.history.getLast('+') || '';
        e.preventDefault();
        return;
    } else if (e.key === 'Space') {
        char = " ";
    } else if (e.key === 'Enter') {
        self.history.add(line.innerText);
        self.command.exec(line.innerText);
        return;
    } else if (e.key.length > 1) {
        return;
    }
    line.innerText += char;
};

terminal.init();

// Commands
terminal.command = {};
terminal.command.exec = function(cmd) {
    if (terminal.command[cmd]) {
        terminal.addLine(terminal.command[cmd]());
    }
    else if (terminal.command[cmd.split(' ')[0]]) {
        var cmdArr = cmd.split(/ (.+)/, 2);
        terminal.addLine(terminal.command[cmdArr[0]](cmdArr[1].split(' ')));
    } else {
        if (cmd === '') {
            terminal.newLine();
        } else {
            terminal.addLine(cmd + ': command not found');
        }
    }
};
terminal.command['help'] = function() {
    return 'How may I help you?';
};
terminal.command['echo'] = function(data) {
    if (data === undefined)
        return "Usage: echo [string...]";
    return data;
};

terminal.command['exit'] = function() {
    document.getElementsByClassName("ubuntu-terminal").innerText = "";
    return;
}; 
$("#music").on("click", function(){
    if ($("#musicplayer").css("display")==="none"){
        $("#musicplayer").css("display","block");
    } else {
        $("#musicplayer").css("display","none");
    }
});

$("#clockbox").on("click",function(){
    if($('#underclock').css('display') == 'none') {
        $("#underclock").css("display","block");
    } else {
        $("#underclock").css("display","none");
    }
});
$("#topside").on("click",function(){
    if($('#undertopside').css('display') == 'none') {
        $("#undertopside").css("display","block");
    } else {
        $("#undertopside").css("display","none");
    }
});


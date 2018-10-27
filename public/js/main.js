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
    var x=$(".mainfilem").css("display");
    if(x==="none")
    {
    $(".mainfilem").css("display","block");}
    else
      {$(".mainfilem").css("display","none");}
});
$("#homeleftm").on("click",function(){
    $(".mainfilemhome").css("display","block");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","none");
    });
    $("#documentsleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","block");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","none");
    });
    $("#uploadsleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","block");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","none");
    });
    $("#musicleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","block");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","none");
    });
    $("#picturesleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","block");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","none");
    });
    $("#videosleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","block");
    $(".mainfilemtrash").css("display","none");
    });
    $("#trashleftm").on("click",function(){
    $(".mainfilemhome").css("display","none");
    $(".mainfilemdocuments").css("display","none");
    $(".mainfilemuploads").css("display","none");
    $(".mainfilemmusic").css("display","none");
    $(".mainfilempictures").css("display","none");
    $(".mainfilemvideos").css("display","none");
    $(".mainfilemtrash").css("display","block");
    });
    $(".close").on("click",function(){
        $(".mainfilem").css("display","none");
      });
  var x=0;
      $(".max").on("click",function(){
          x+=1;
        $(".mainfilem").toggleClass("mainfilem20");
        $(".mainfilemleft").toggleClass("mainfilemleft20");
        $(".mainfilemhome").toggleClass("mainfilemhome20");
        if(x%2!=0)
        {
        $(".mainfilemdocuments").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
   $(".mainfilemuploads").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
   $(".mainfilemmusic").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
   $(".mainfilempictures").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
   $(".mainfilemvideos").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
   $(".mainfilemtrash").css({"height":"100%",
      "background-color":"white",
      "width":"81.5%",
      "color":"black",
    "position":"fixed",
    "top":"29px",
    "height":"100%",
    "border-bottom-right-radius": "4px",
    "border-top": "black 1px solid",
    "left":"15em"});
      $(this).css("display","block");
        }
        else
        {
          $(".mainfilemdocuments").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
          $(".mainfilemuploads").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
          $(".mainfilemmusic").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
          $(".mainfilempictures").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
          $(".mainfilemvideos").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
          $(".mainfilemtrash").css({
        "height":"65vh",
      "background-color":"white",
      "width":"45vw",
      "color":"black",
      "border-bottom-right-radius": "4px",
    "position":"absolute",
    "border-top": "black 1px solid",
    "left":"15em"});
        }
        $(".top-control").toggleClass("top-control20");
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
$("#minebaap").on("click", function(){
    if ($("#minesweeper").css("display")==="none"){
        $("#minesweeper").css("display","block");
    } else {
        $("#minesweeper").css("display","none");
    }
});
$("#calculator").on("click", function(){
    if ($("#calc").css("display")==="none"){
        $("#calc").css("display","block");
    } else {
        $("#calc").css("display","none");
    }
});
$("#clockbox").on("click",function(){
    if($('#underclock').css('display') == 'none') {
        $("#underclock").css("display","block");
        $("#tophidearrow").css("display","block");
    } else {
        $("#underclock").css("display","none");
        $("#tophidearrow").css("display","none");
    }
});
$("#topside").on("click",function(){
    if($('#undertopside').css('display') == 'none') {
        $("#undertopside").css("display","block");
    } else {
        $("#undertopside").css("display","none");
    }
});

/*Calender */
class Calendar {
  
    constructor () {
      this.monthDiv = document.querySelector('.cal-month__current')
      this.headDivs = document.querySelectorAll('.cal-head__day')
      this.bodyDivs = document.querySelectorAll('.cal-body__day')
      this.nextDiv = document.querySelector('.cal-month__next')
      this.prevDiv = document.querySelector('.cal-month__previous')
    }
    
    init () {
      moment.locale(window.navigator.userLanguage || window.navigator.language) 
      
      this.month = moment()
      this.today = this.selected = this.month.clone()
      this.weekDays = moment.weekdaysShort(true)
      
      this.headDivs.forEach((day, index) => {
        day.innerText = this.weekDays[index].slice(0,1);
      })
      
      this.nextDiv.addEventListener('click', _ => { this.addMonth() })
      this.prevDiv.addEventListener('click', _ => { this.removeMonth() })
      
      this.bodyDivs.forEach(day => {
        day.addEventListener('click', e => {
          const date = +e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML
  
          if (e.target.classList.contains('cal-day__month--next')) {
            this.selected = moment(`${this.month.add(1, 'month').format('YYYY-MM')}-${date}`)
          } else if (e.target.classList.contains('cal-day__month--previous')) {
            this.selected = moment(`${this.month.subtract(1, 'month').format('YYYY-MM')}-${date}`)
          } else {
            this.selected = moment(`${this.month.format('YYYY-MM')}-${date}`)
          }
  
          this.update()
        })
      })
      
      this.update()
    }
    
    update () {
      this.calendarDays = {
        first: this.month.clone().startOf('month').startOf('week').date(),
        last: this.month.clone().endOf('month').date()
      }
      
      this.monthDays = {
        lastPrevious: this.month.clone().subtract(1,'months').endOf('month').date(),
        lastCurrent: this.month.clone().endOf('month').date()
      }
      
      this.monthString = this.month.clone().format('MMMM YYYY')
      
      this.draw()
    }
    
    addMonth () {
      this.month.add(1, 'month')
      
      this.update()
    }
    
    removeMonth () {
      this.month.subtract(1, 'month')
      
      this.update()
    }
    
    draw () {
      this.monthDiv.innerText = this.monthString
    
      let index = 0
  
      if (this.calendarDays.first > 1) {
        for (let day = this.calendarDays.first; day <= this.monthDays.lastPrevious; index ++) {
          this.bodyDivs[index].innerText = day++
  
          this.cleanCssClasses(false, index)
  
          this.bodyDivs[index].classList.add('cal-day__month--previous')
        } 
      }
  
      let isNextMonth = false
      for (let day = 1; index <= this.bodyDivs.length - 1; index ++) {
        if (day > this.monthDays.lastCurrent) {
          day = 1
          isNextMonth = true
        }
  
        this.cleanCssClasses(true, index)
  
        if (!isNextMonth) {
          if (day === this.today.date() && this.today.isSame(this.month, 'day')) {
            this.bodyDivs[index].classList.add('cal-day__day--today') 
          }
  
          if (day === this.selected.date() && this.selected.isSame(this.month, 'month')) {
            this.bodyDivs[index].classList.add('cal-day__day--selected') 
          }
  
          this.bodyDivs[index].classList.add('cal-day__month--current')
        } else {
          this.bodyDivs[index].classList.add('cal-day__month--next')
        }
  
        this.bodyDivs[index].innerText = day++
      }
    }
    
    cleanCssClasses (selected, index) {
      this.bodyDivs[index].classList.contains('cal-day__month--next') && 
        this.bodyDivs[index].classList.remove('cal-day__month--next')
      this.bodyDivs[index].classList.contains('cal-day__month--previous') && 
        this.bodyDivs[index].classList.remove('cal-day__month--previous')
      this.bodyDivs[index].classList.contains('cal-day__month--current') &&
        this.bodyDivs[index].classList.remove('cal-day__month--current')
      this.bodyDivs[index].classList.contains('cal-day__day--today') && 
        this.bodyDivs[index].classList.remove('cal-day__day--today')
      if (selected) {
        this.bodyDivs[index].classList.contains('cal-day__day--selected') && 
          this.bodyDivs[index].classList.remove('cal-day__day--selected') 
      }
    }
  }
new Calendar().init();
/*calender ends*/

/*calculator starts*/
function set(op) {

    document.getElementById("display-calc").value += op;

}

function sqrRoot() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.sqrt(tempStore));

}

function asine() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.asin(tempStore));

}

function acosine() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.acos(tempStore));

}

function fLog() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.log(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display-calc").value;
    document.getElementById("display-calc").value = eval(Math.sin(tempStore));

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display-calc");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}

function ce() {

    var elem = document.getElementById("display-calc").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display-calc").value = a;
    // }
    //alert(length);
}

function calcclose()
            {
                var x = document.getElementById("calc");
                if(x.style.display=="none")
                {
                    x.style.display="block";
                }
                else
                    {x.style.display="none";}
            }

/*calculator ends*/
var zmax=0;
$(".divoverlap").on("click",function()
{$(this).siblings(".divoverlap").css("z-index",10);
$(this).css("z-index",11);

});

/*MineSweeper  */ 
var lvl1w = 9;
var lvl1h = 9;
var lvl1m = 10;

var mineField;
var opened;

startGame();
function startGame(){
  mineField = new Array();
  opened = 0;
  
  //creating on array
  for(var i=0; i<lvl1h; i++){
    mineField[i] = new Array();
    for(var j=0; j<lvl1w; j++){
      mineField[i].push(0);
    }
  }
  
  //placing mines
  var placedMines = 0;
  var randomRow,randomCol;
  while(placedMines < lvl1m){
    randomRow = Math.floor(Math.random() * lvl1h);
    randomCol = Math.floor(Math.random() * lvl1w);
    if(mineField[randomRow][randomCol] == 0){
      mineField[randomRow][randomCol] = 9;
      placedMines++;
    }
  }
  
  //placing digits
  for(var i=0; i < lvl1h; i++){
    for(var j=0; j<lvl1w; j++){
      if(mineField[i][j] == 9){
        for(var ii=-1; ii<=1; ii++){
          for(var jj=-1; jj<=1; jj++){
            if(ii!=0 || jj!=0){
              if(tileValue(i+ii,j+jj) != 9 && tileValue(i+ii,j+jj) != -1){
                mineField[i+ii][j+jj]++;
              }
            }
          }
        }
      }
    }
  }
  
  //placing in page
  for(var i=0; i<lvl1h; i++){
    for(var j=0; j<lvl1w; j++){
      var tile = $("#containermine").append("<span id='"+i+""+j+"' data-row='"+i+"' data-col='"+j+"' class='box first'></span>");
    }
  }
  
  $("#containermine span.box").on('contextmenu',function(e){
    e.preventDefault();
    if($(this).hasClass("checked")){
      $(this).removeClass("checked");
    } else {
      $(this).addClass("checked");
    }
  });
  
  $("#containermine span.box").click(function(){
    if(!$(this).hasClass('checked')){
    var tile = $(this);
    var clickedRow = tile.data('row');
    var clickedCol = tile.data('col');
    var clickedVal = mineField[clickedRow][clickedCol];
    
    if(clickedVal == 0){
      floodFill(clickedRow,clickedCol);
    }
    
    if(clickedVal > 0 && clickedVal < 9){
      tile.removeClass('first');
      tile.html(clickedVal);
      opened++;
    }
    
    if(clickedVal == 9){
      tile.removeClass('first');
      tile.append("<span class='bomb'></span>");
      $("#containermine").after('<a href="#" id="again">Game Over! Start Again ?</a>');
      $("#containermine .box").off('click');
      $("a#again").on('click',function(e){
        e.preventDefault();
        $("#containermine span.box").remove();
        $("#again").remove();
        startGame();
      });
    }
    
    checkopened();
    }
  });
  
}

function floodFill(row,col){
  var tile = $("#containermine span#"+row+""+col);
  if(tile.hasClass('first')){
    tile.removeClass('first');
    if(tile.hasClass("checked")){
        tile.removeClass("checked");
      }
    if(mineField[row][col] > 0){
      tile.html(mineField[row][col]);
      opened++;
    } else {
      tile.addClass("opened");
      opened++;
    }
  
    if(mineField[row][col] == 0){
      for(var ii=-1; ii<=1; ii++){
        for(var jj=-1; jj<=1; jj++){
          if(ii!=0 || jj!=0){
            if(tileValue(row+ii,col+jj) != 9){
              if(tileValue(row+ii,col+jj) != -1){
                floodFill(row+ii,col+jj);
              }
            }
          }
        }
      }
    }
  }
}

function checkopened(){
  console.log(opened);
  if(opened >= 71){
    $("#containermine").after('<a href="#" id="again">You Win! Start Again ?</a>');
    $("#containermine .box").off('click');
    $("a#again").on('click',function(e){
      e.preventDefault();
      $("#containermine span.box").remove();
      $("#again").remove();
      startGame();
    });
  }
}

function tileValue(row,col){
  if(mineField[row] == undefined || mineField[row][col] == undefined){
    return -1;
  } else {
    return mineField[row][col];
  }
}
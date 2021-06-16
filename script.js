
var newline = "\n";
var timespaces = "  ";
var distancespaces = "  ";
var activecalspaces = "       ";
var totalcalspaces = "       ";
var avghrtspaces = "       ";
var avgspeedspaces = "       ";
var dayssince = "      ";  


var date;
var headerArray = ["DATE        TIME   DISTANCE   ACT CAL   TOT CAL   AVG HRT   AVG SPEED\n"];
var header2Array = ["DAYS SINCE\n\n"];
var index = localStorage.getItem("INDEX");


function GrabandStoreData_Button() { // store to localstorage

    index++;
    if (index == null) {
        index = 1;
    }

    // this makes sure that the first entry isnt nothing
    date = document.getElementById("boxDate").value; //get data from text box  
    var data = localStorage.getItem("DATE"); // get data from localstorage

    if (data == null) {
        data = "";
    }
    var newdata = data + " " + date; //add data to existing data from storage
    localStorage.setItem("DATE", newdata);
    if (data == null) {
        data = "";
    }

    time = document.getElementById("boxTime").value;
    var data = localStorage.getItem("TIME"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + time; //add data to existing data from storage
    localStorage.setItem("TIME", newdata);


    distance = document.getElementById("boxDistance").value;
    var data = localStorage.getItem("DISTANCE"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + distance; //add data to existing data from storage
    localStorage.setItem("DISTANCE", newdata);

    activeCal = document.getElementById("boxActiveCal").value;
    var data = localStorage.getItem("ACTIVECAL"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + activeCal; //add data to existing data from storage
    localStorage.setItem("ACTIVECAL", newdata);

    totalCal = document.getElementById("boxTotalCal").value;
    var data = localStorage.getItem("TOTALCAL"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + totalCal; //add data to existing data from storage
    localStorage.setItem("TOTALCAL", newdata);

    avgHeartRate = document.getElementById("boxAvgHeartRate").value;
    var data = localStorage.getItem("AVGHEART"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + avgHeartRate; //add data to existing data from storage
    localStorage.setItem("AVGHEART", newdata);

    avgSpeed = document.getElementById("boxAvgSpeed").value;
    var data = localStorage.getItem("AVGSPEED"); // get data from localstorage
    if (data == null) {
        data = "";
    }
    var newdata = data + " " + avgSpeed; //add data to existing data from storage
    localStorage.setItem("AVGSPEED", newdata);

    localStorage.setItem("INDEX", index);
}



function RetrieveDataButton() {
    var storagedates = [];
    var storagetimes = [];
    var storagedistances = [];
    var storageactivecals = [];
    var storagetotalcals = [];
    var storageavghrtrt = [];
    var storageavgspeeds = [];

    storagedates = localStorage.getItem("DATE");
    storagedates = storagedates.split(" ");  // puts commas between entries 

    storagetimes = localStorage.getItem("TIME");
    storagetimes = storagetimes.split(" ");

    storagedistances = localStorage.getItem("DISTANCE");
    storagedistances = storagedistances.split(" ");

    storageactivecals = localStorage.getItem("ACTIVECAL");
    storageactivecals = storageactivecals.split(" ");

    storagetotalcals = localStorage.getItem("TOTALCAL");
    storagetotalcals = storagetotalcals.split(" ");

    storageavghrtrt = localStorage.getItem("AVGHEART");
    storageavghrtrt = storageavghrtrt.split(" ");

    storageavgspeeds = localStorage.getItem("AVGSPEED");
    storageavgspeeds = storageavgspeeds.split(" ");

    storageindex = localStorage.getItem("INDEX");

    // print to the box
    document.getElementById("textbox1").value = headerArray;
    for (i = 1; i <= storageindex; i++) {
        document.getElementById("textbox1").value +=
            storagedates[i] + timespaces +
            storagetimes[i] + distancespaces +
            storagedistances[i] + activecalspaces +
            storageactivecals[i] + totalcalspaces +
            storagetotalcals[i] + avghrtspaces +
            storageavghrtrt[i] + avgspeedspaces +
            storageavgspeeds[i] + newline;
    }
    DAYSSINCELASTButton();
}

function DAYSSINCELASTButton() {

    document.getElementById("textbox2").value = header2Array; //prints header

    var newdata = localStorage.getItem("DATE"); // get data from localstorage

    // console.log("newdata= " + newdata);
    // console.log("length newdata= " + newdata.length);
    // console.log("first element= " + newdata[0]);
    // console.log(newdata);
    // console.log("first= " + newdata[2]);

    newdata = newdata.split(" ");
    var t1 = new Date(newdata[1]);
    var t2 = new Date(newdata[2]);
    var diff = t2.getTime() - t1.getTime();
    diff = (((diff / 60) / 60) / 24) / 1000;
    //console.log("difference= " + diff);

    for (x = 0; x < newdata.length - 2; x++) {
        var t1 = new Date(newdata[x + 1]);
        var t2 = new Date(newdata[x + 2]);
        // console.log("t1= " + newdata[x + 1]);
        // console.log("t2= " + newdata[x + 2]);
        // console.log("x =" + x);

        var diff = t2.getTime() - t1.getTime();
        diff = (((diff / 60) / 60) / 24) / 1000;
        document.getElementById("textbox2").value += diff + "\n";
    }



}

function SortAtoZ() {
    alert("a to z");
}

function SortZtoA() {
    alert("z to a");
}

function CLEAR() {
    alert("clear");
    localStorage.clear();
}
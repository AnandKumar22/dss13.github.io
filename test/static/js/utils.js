// Contains the top and left coordinates of locations on the image.
var map_coordinates=[
    ["Bhopal",195,140],
    ["Kanyakumari",378,140],
    ["Kolkata",198,270],
    ["Hyderabad",262,155],
    ["Visakhapatnam",252,215],
    ["Mumbai",242,85],
    ["Delhi",110,140],
    ["Jaipur",140,120],
    ["Jammu",50,111],
    ["Chennai",315,170],
    ["Nagpur",212,160],
    ["Jamshedpur",191,248],
    ["Bengaluru",321,143],
    ["Ahmedabad",194,84],
    ["Kochi",347,123],
    ["Agra",133,149],
    ["Bhubaneswar",219,240],
    ["Srinagar",33,108],
    ["Vijayawada",271,182],
    ["Guwahati",147,317],
    ["Varanasi",159,207],
    ["Raipur",207,194],
    ["Jablpur",183,174],
    ["Amritsar",70,111],
    ["Chandigarh",81,134],
    ["Patna",156,235],
    ["Kanpur",140,173],
    ["Pune",246,90],
    ["Dehradun",85,145],
    ["Dhanbad",181,243],
    ["Thiruvanantapuram",372,133],
    ["Kota",160,123],
    ["Surat",210,85],
    ["Indore",192,121],
    ["Ranchi",187,234],
    ["Ludiana",83,123],
    ["Gwalior",145,151],
    ["Coimbatore",342,136],
    ["Jodhpur",142,88],
    ["Tiruchirapalli",341,152],
    ["Puducherry",329,166],
    ["Daman & Diu",216,85],
    ["Imphal",150,341],
    ["Goa",285,98],
    ["Surat",208,83],
    ["Jhansi",154,154],
    ["Kozhikode",335,117],
    ["Roorkee",93,140],
    ["Gandhinagar",188,81],
    ["Shillong",152,316]
];

var srcs = [
    ["Kharagpur", 1, 40, 200, 180]
]

var dests = [
    ["Bhilai", 1, 50, 207, 194],
    ["Nagpur", 2, 105, 212, 160],
    ['Gandhinagar', 3, 112, 188, 81],
    ['Kolkata', 4, 45, 198, 270],
    ['Mumbai', 5, 115, 245, 85],
    ["Bhopal",6, 70,195,140],
    ["Kanyakumari",7,120,378,140],
    ["Hyderabad",8,115,262,155],
    ["Visakhapatnam",9,121,252,215],
    ["Delhi",10,110,110,140],
    ["Jaipur",11,112,140,120],
    ["Jammu",12,130,50,111],
    ["Chennai",13,120,315,170],
    ["Jamshedpur",14,115,191,248],
    ["Bengaluru",15,117,321,143],
    ["Ahmedabad",16,111,194,84],
    ["Kochi",17,115,347,123],
    ["Agra",18,107,133,149],
    ["Bhubaneswar",19,60,219,240],
    ["Srinagar",20,130,33,108],
    ["Vijayawada",21,115,271,182],
    ["Guwahati",22,65,147,317],
    ["Varanasi",23,75,159,207],
    ["Raipur",24,55,207,194],
    ["Jablpur",25,49,183,174],
    ["Amritsar",26,110,70,111],
    ["Chandigarh",27,112,81,134],
    ["Patna",28,65,156,235],
    ["Kanpur",29,65,140,173],
    ["Pune",30,118,246,90],
    ["Dehradun",31,75,85,145],
    ["Dhanbad",32,75,181,243],
    ["Thiruvanantapuram",33,120,372,133],
    ["Kota",34,105,160,123],
    ["Surat",35,105,210,85],
    ["Indore",36,74,192,121],
    ["Ranchi",37,65,187,234],
    ["Ludiana",38,110,83,123],
    ["Gwalior",39,55,145,151],
    ["Coimbatore",40,112,342,136],
    ["Jodhpur",41,65,142,88],
    ["Tiruchirapalli",42,115,341,152],
    ["Puducherry",43,113,329,166],
    ["Daman & Diu",44,110,216,85],
    ["Imphal",45,70,150,341],
    ["Goa",46,112,285,98],
    ["Jhansi",47,85,154,154],
    ["Kozhikode",48,80,335,117],
    ["Roorkee",49,87,93,140]
]

var comms=[
    ["Amul Cool", 1, 15, 22],
    ["Dairy Milk", 2, 10, 20],
    ["Five Star", 3, 5, 10],
    ["Bingo Mad ANgles", 4, 5, 10],
    ["Krackjack",5, 5, 10],
    ["Monaco Salted", 6,7,10],
    ["Dairy Milk Silk",7,40,70],
    ["Britannia 50-50",8,7,20],
    ["Kurkure Munch",9,12,20],
    ["Lays Magic",10,7,10],
    ["Kwality Walls",11,8,25],
    ["Dinshaws Nuts",12,20,35],
    ["Cream Slurpy",13,25,80],
    ["Nescafe Dawn",14,8,17],
    ["Bru Gold Coffee",15,5,7],
    ["Mirinda",16,5,20],
    ["Pepsi",17,5,20],
    ["Mazza",18,5,15],
    ["Frooti",19,7,10],
    ["Slice",20,7,10],
    ["Mountain Dew",21,7,20],
    ["Coca Cola",22,5,20],
    ["Thums Up",23,5,20],
    ["Red Bull",24,35,110],
    ["Gatorade",25,35,120],
    ["Kingfisher",26,48,350],
    ["Tuborg",27,56,150],
    ["White Mischief",28,56,175],
    ["Aquaguard",29,412,1000],
    ["Kent",30,412,1100],
    ["Vadilal Gourmet",31,45,80],
    ["Kitkat",32,5,10],
    ["Nestle Maggi",33,8,25],
    ["Sunfeast Yippee",34,9,26],
    ["Hatsun Ghee",35,35,70],
    ["Mother Dairy Curd",36,52,90],
    ["Bisk Farm Burst",37,24,35],
    ["Amul Lassi",38,7,20],
    ["Coffee Bite",39,1,2],
    ["Melody Chocolaty",40,1,2],
    ["Mango Bite",41,1,2],
    ["Eclairs",42,1,2],
    ["Lotte Choco Pie",43,1,2],
    ["Baskin Robbins",44,50,150],
    ["Doritos Cheese",45,28,52],
    ["Cornitos Crisps",46,29,55],
    ["Red Label Care",47,30,32],
    ["Uncle Chipps",48,12,30],
    ["Tata Salt",49,2,10],
    ["Nirma Salt",50,3,12]
]

// Index of commodity in warehouse
var comm_val = 0;
var finalJSON = [];

var someStrings = ["instructions", "utils.js","classie.js","auth.js","jquery.js","index","leaderboard","main.css","bootstrap.js","bootstrap.css","noJS.css","signup.css","delivery.png","ktj.png","map.jpg","transp.jpg","warehouse.jpg","pin.jpg","utils.py","views.py","database","settings.py","bootstrap.min.js","navigation","shippments","in-productions","demand","navbar","footer","images"];

var user = localStorage.getItem('username');
$(document).ready(function(){
    balance = localStorage.getItem('balance');
    if (!balance) {
        localStorage.setItem('balance', 100000);
    }
    checkDemand();
    checkMF();
    checkTP();
    check_bal();
    $('#shipping-tbl').load('/travel_time/');
    // hidden these two currently
    // showMF_or_not();
    // showTP_or_not();
    document.getElementById("ktj").innerHTML = 'Hi! ' + user;
    document.getElementById("scm").innerHTML += balance;
    var i=0;
    var commodities = get_commodities();
    var source = get_source();
    var destination = get_destination();
    // generate the map
    for(i=0;i<finalJSON.length;i++){

        $("#map").append('<div id='+'ring'+i+' class="ring"><img src="/static/images/ring.png" width="10px" title='+finalJSON[i]['city'][0]+'></div>');
        $("#ring"+i).css({
            "position":"absolute",
            "top":finalJSON[i]['city'][3]+"px",
            "left":finalJSON[i]['city'][4]+"px",
        });
    }
    // fill commodities in Manufacture
    // $.ajax({
    //         url:'/api/scm/commodity/',
    //         dataType:'json',
    //         type:'GET',
    //         async:false,
    //         contentType:'application/x-www-form-urlencoded',
    //         success: function(response){
    //             // console.log(response);
    //             for(var res=0; res<response.length;res++){
    //                 var comm_val = res+1;
    //                 document.getElementById("commodities").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+response[res].commodity+'</option>'
    //             }
    //         }
    //     });
        for(var res=0; res<commodities.length;res++){
            var comm_val = res+1;
            document.getElementById("commodities").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+commodities[res][0]+'</option>'
        }

        // fill commodities in Transport
        $.ajax({
                url:'/api/scm/manufacture/get',
                dataType:'json',
                type:'GET',
                async:false,
                contentType:'application/x-www-form-urlencoded',
                success: function(response){
                    // console.log(response);
                    var comm_val = 0;
                    // to check whether a field exists in the dropdown or not
                    var comm_flag = 0;
                    var used_comms = [];
                    var comm_text = '';
                    for(var res=0; res<response.length;res++){
                        if (response[res].user == user && response[res].mf_flag == 1) {
                            comm_val++;
                            for (var comm = 0; comm < comms.length; comm++) {
                                if (response[res].commodity == comms[comm][1] && used_comms.length > 0) {
                                    // console.log("ehheehe34");
                                    for (var usd = 0; usd < used_comms.length; usd++) {
                                        if (!contains.call(used_comms, response[res].commodity)) {
                                            // console.log("hehehe");
                                            comm_text = comms[comm][0];
                                            used_comms.push(response[res].commodity);
                                            document.getElementById("commodities-tp").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+comm_text+'</option>';
                                        }
                                    }
                                }
                                else if (response[res].commodity == comms[comm][1]) {
                                    // console.log("hehehe3");
                                    comm_text = comms[comm][0];
                                    used_comms.push(response[res].commodity);
                                    document.getElementById("commodities-tp").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+comm_text+'</option>';
                                }
                            }
                        }
                    }
                }
            });
            // for(var res=0; res<commodities.length;res++){
            //     var comm_val = res+1;
            //     document.getElementById("commodities-tp").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+commodities[res][0]+'</option>'
            // }
            // fill sources in Transport
            // $.ajax({
            //         url:'/api/scm/source/',
            //         dataType:'json',
            //         type:'GET',
            //         async:false,
            //         contentType:'application/x-www-form-urlencoded',
            //         success: function(response){
            //             // console.log(response);
            //             for(var res=0; res<response.length;res++){
            //                 var comm_val = res+1;
            //                 document.getElementById("sources").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+response[res].source+'</option>'
            //             }
            //         }
            //     });
            for(var res=0; res<source.length;res++){
                var comm_val = res+1;
                document.getElementById("sources").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+source[res][0]+'</option>';
            }
                // fill destinations in Transport
                // $.ajax({
                //         url:'/api/scm/destination/',
                //         dataType:'json',
                //         type:'GET',
                //         async:false,
                //         contentType:'application/x-www-form-urlencoded',
                //         success: function(response){
                //             // console.log(response);
                //             for(var res=0; res<response.length;res++){
                //                 var comm_val = res+1;
                //                 document.getElementById("destinations").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+response[res].destination+'</option>'
                //             }
                //         }
                //     });
                for(var res=0; res<finalJSON.length;res++){
                    var comm_val = res+1;
                    city = finalJSON[res]['city']
                    dest = JSON.stringify(city).split(',');
                    dest[0] = dest[0].replace('[', '').replace('"', '').replace('"','');
                    document.getElementById("destinations").innerHTML += '<option id=comm'+res+' value='+comm_val +'>'+ dest[0] +'</option>'
                }

                    // fill manufacture and transport details in Warehouse and Stats
                    // Already Manufactured
                    $('#warehouse-tbl').load('/mf_get/?user='+user);
                    // console.log("warehouse");
                    // Manufacturing
                    $('#number1').load('/mf_num_get/?user='+user);
                    setInterval(function() {$('#mfing-tbl').load('/mfing_get/?user='+user)}, 1000);
                    // showMF_or_not();
                    // $.ajax({
                    //         url:'/api/scm/manufacture/get/',
                    //         dataType:'json',
                    //         type:'GET',
                    //         async:false,
                    //         contentType:'application/x-www-form-urlencoded',
                    //         success: function(response){
                    //             // console.log(response);
                    //             // console.log("response");
                    //             for(var res=0; res<response.length;res++){
                    //                 // console.log(response[res].mf_flag);
                    //                 if(response[res].user == user){
                    //                     if (response[res].mf_flag == 1){
                    //                         // console.log(response);
                    //                         // console.log("response");
                    //                         comm_val++;
                    //                         var comm = '';
                    //                         for(var s=0;s<comms.length;s++){
                    //                             if(comms[s][1] == response[res].commodity) {
                    //                                 comm += comms[s][0];
                    //                             }
                    //                         }
                    //                         // finish time in s
                    //                         var ft_s = 0;
                    //                         var sl_ft = '';
                    //                         // Current time in s
                    //                         var ct_s = 0;
                    //                         var sl_ct = '';
                    //                         sl_ct = datetime.slice(extractTimeIndex(datetime), datetime.length-1);
                    //                         sl_ct1 = sl_ct.slice(1, datetime.length).split(":");
                    //                         sl_ft = response[res].order_finished.slice(extractTimeIndex(datetime)  , datetime.length-1);
                    //                         var doa = response[res].order_finished.slice(0, extractTimeIndex(datetime));
                    //                         sl_ft1 = sl_ft.slice(1, datetime.length).split(":");
                    //                         ft_s = toSeconds(sl_ft1);
                    //                         ct_s = toSeconds(sl_ct1);
                    //                         var validity = Math.floor((691200 - ft_s - ct_s)/86400);
                    //                         document.getElementById("warehouse-tbl").innerHTML += '<tr><td>'+comm_val +'</td><td colspan="2">'+comm+'</td><td colspan=3>Kharagpur</td><td>'+doa+'</td><td>'+response[res].units+'</td><td>'+validity+'</td></tr>';
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     });
                    $('#stats-tbl').load('/tp_get/?user='+user);
                    setInterval(function(){$('#tping-tbl').load('/tping_get/?user='+user)}, 1000)
                    $('#number2').load('/tp_num_get/?user='+user);
                    // showTP_or_not();
                    //     $.ajax({
                    //             url:'/api/scm/transport/get/',
                    //             dataType:'json',
                    //             type:'GET',
                    //             async:false,
                    //             contentType:'application/x-www-form-urlencoded',
                    //             success: function(response){
                    //                 // console.log(response);
                    //                 var comm_val = 1;
                    //                 for(var res=0; res<response.length;res++){
                    //                     if(response[res].user == user){
                    //                         // console.log(response[res].tpt_flag);
                    //                         if (response[res].tpt_flag == 1){
                    //                             var src = '';
                    //                             for(var s=0;s<srcs.length;s++){
                    //                                 if(srcs[s][1] == response[res].source) {
                    //                                     src += srcs[s][0];
                    //                                 }
                    //                             }
                    //
                    //                             var dest = '';
                    //                             for(var s=0;s<dests.length;s++){
                    //                                 if(dests[s][1] == response[res].source) {
                    //                                     dest += dests[s][0];
                    //                                 }
                    //                             }
                    //
                    //                             var comm = '';
                    //                             for(var s=0;s<comms.length;s++){
                    //                                 if(comms[s][1] == response[res].commodity) {
                    //                                     comm += comms[s][0];
                    //                                 }
                    //                             }
                    //                             // Working Fine till here
                    //                             // console.log("src and sest");
                    //                             // console.log(dest);
                    //                             // console.log(src);
                    //
                    //                             // finish time in s
                    //                             var ft_s = 0;
                    //                             var sl_ft = '';
                    //                             sl_ft = response[res].dispatch_time.slice(extractTimeIndex(datetime)+1, datetime.length-1);
                    //                             var finish_time = response[res].dispatch_time.slice(0, extractTimeIndex(datetime));
                    //                             document.getElementById("stats-tbl").innerHTML += '<tr><td>'+comm_val+'</td><td colspan="2">'+comm+'</td><td colspan=3>'+src+'</td><td colspan="4">'+dest+'<td>'+finish_time+'</td><td>'+response[res].trans_cost+'</td></tr>';
                    //                             comm_val += 1;
                    //                         }
                    //                     }
                    //                 }
                    //             }
                    //         });
});
var ittr=0, interval;
$(document).ready(function(){
    interval = setInterval(function(){
        if(ittr>=someStrings.length){
            ittr=0;
        }
        else{
            ittr++;
        }
        $("#pre-load").html("Loading "+someStrings[ittr]+"..........");
    },80);
});

window.onload = function(){
    clearInterval(interval);
    $("#pre-load").html("Completely loaded");
    setTimeout(function(){
        $("#pre-load").fadeOut();
    },200);
}

$(document.body).on("mouseenter",".ring",function(){
    var c_id=this.id
    var num=parseInt(c_id.substring(4,c_id.length));
    // console.log(num);
    if($('#info'+num).length){
        $("#info"+num).show();
    }
    else{
        var info='<div id='+'info'+num+' class="info"><h6><span style="color: red;">'+finalJSON[num]['city'][0]+'</span><br>'+ finalJSON[num]['comm'][0]+' - '+finalJSON[num]['demand']+'</h6></div>';
        $(".info").hide();
        $("#map").append(info).fadeIn(900);
        $("#info"+num).css({
            'top':finalJSON[num]['city'][3]-50+"px",
            'left':finalJSON[num]['city'][4]-50+"px",
        })
    }
});

$(document.body).on("mouseenter",".ring",function(){
    var c_id=this.id
    var num=parseInt(c_id.substring(4,c_id.length));
    // console.log(num);
    if($('#info'+num).length){
        $("#info"+num).show();
    }
    else{
        var info='<div id='+'info'+num+' class="info"><h6>'+finalJSON[num]['city'][0]+'<br></h6></div>';
        $(".info").hide();
        $("#map").append(info).fadeIn(900);
        $("#info"+num).css({
            'top':finalJSON[num]['city'][3]-50+"px",
            'left':finalJSON[num]['city'][4]-50+"px",
        })
    }
});

$(document.body).on("mouseleave",".ring",function(){
    var c_id=this.id
    var num=parseInt(c_id.substring(4,c_id.length));
    // console.log(num);
    $("#info"+num).hide();
});

function get_commodities() {
    // return $.ajax({
    //             url:'/api/scm/commodity/',
    //             dataType:'json',
    //             type:'GET',
    //             async:false,
    //             contentType:'application/x-www-form-urlencoded'
    //     });
    return comms
}

function fill_commodities(x) {
    x.success(function(commodities) {
        // console.log(commodities.length);
        if ($("#commodities").length < 1) {
            // console.log("hey");
        }
        else {
            for(var res=0; res<commodities.length;res++){
                // // console.log("appended");
                $('#commodities').append('<option id=comm'+res+'>'+commodities[res].commodity+'</option>');
            }
        }
    });
}

function get_source() {
    // return $.ajax({
    //             url:'/api/scm/source/',
    //             dataType:'json',
    //             type:'GET',
    //             async:false,
    //             contentType:'application/x-www-form-urlencoded'
    //     });
    return srcs
}

function fill_source(x) {
    x.success(function(sources) {
        // // console.log(sources.length);
        if ($("#sources").length < 1) {
            // // console.log("hey");
        }
        else {
            for(var res=0; res<sources.length;res++){
                // // console.log("appended");
                $('#sources').append('<option id=src'+res+'>'+sources[res].source+'</option>');
            }
        }
    });
}

function get_destination() {
    // return $.ajax({
    //             url:'/api/scm/destination/',
    //             dataType:'json',
    //             type:'GET',
    //             async:false,
    //             contentType:'application/x-www-form-urlencoded'
    //     });
    return dests
}

function fill_destination(x) {
    x.success(function(destination) {
        // // console.log(destination.length);
        if ($("#destination").length < 1) {
            // // console.log("hey");
        }
        else {
            for(var res=0; res<destination.length;res++){
                // // console.log("appended");
                $('#destinations').append('<option id=dest'+res+'>'+destinations[res].destination+'</option>');
            }
        }
    });
}


$(document.body).on("keyup","#units",function(){
    var units = parseInt(this.value);
    var comm_id = document.getElementById("commodities").value;
    var price = 0;
    $.ajax({
            url:'/api/scm/commodity/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            success: function(response) {
                for(var comm=0; comm<response.length;comm++){
                    if (response[comm].id == (comm_id)) {
                        price = response[comm].price;
                    }
                    var cost = units * price;
                    document.getElementById("cost").value = cost;
                }
            },
            error: function(response) {
                // // console.log("sorry bro out of balance");
            }
        });


});

var currentdate = new Date();
var minutes = '';
if (currentdate.getMinutes()<10){
    minutes += '0';
}
minutes += currentdate.getMinutes();
month = currentdate.getMonth() + 1;
var datetime = currentdate.getFullYear() + '-' + month + '-' + currentdate.getDate() + 'T' + currentdate.getHours()+ ':'+ minutes + ':' + currentdate.getSeconds() + 'Z';

//indicates the index from where Time starts in the datetime string
function extractTimeIndex(datetime) {
    for(var i=0;i<datetime.length;i++){
        if(datetime[i] == 'T'){
            var timeStart = i + 1;
            return timeStart
        }
    }
}


function toSeconds(t_Array) {
    // time in seconds
    var t_s = 0;
    if (t_Array[0] != ""){
        t_s += parseInt(t_Array[0])*3600;
    }
    if (t_Array[1] != ""){
        t_s += parseInt(t_Array[1])*60;
    }
    if (t_Array[2] != ""){
        t_s += parseInt(t_Array[2]);
    }
    // // console.log(t_s);
    // // console.log(typeof(t_s));
    return t_s
}

// returns time since the order_time
// function sinceOT() {
//     var lastMF = localStorage.getItem('order_time');
//     // Order time in s
//     var ot_s = 0;
//     var sl_ot = '';
//     // Current time in s
//     var ct_s = 0;
//     var sl_ct = '';
//
//     if (lastMF){
//         sl_ct = datetime.slice(extractTimeIndex(datetime), datetime.length-1);
//         sl_ct1 = sl_ct.split(":");
//         // console.log(sl_ct1);
//         sl_ot = lastMF.slice(extractTimeIndex(lastMF), datetime.length-1);
//         sl_ot1 = sl_ot.split(":");
//         // console.log(sl_ot1);
//         ot_s = toSeconds(sl_ot1);
//         ct_s = toSeconds(sl_ct1);
//         // difference between Order Time and Current
//         var diff = ct_s - ot_s;
//         // console.log(diff);
//         if (diff > 10){
//             // console.log("time up!!");
//             // change mf_flag to 1
//             $.ajax({
//                     url:'/mfupdate/',
//                     dataType:'json',
//                     type:'GET',
//                     async:false,
//                     contentType:'application/x-www-form-urlencoded',
//                     data:{
//                         'user': user
//                     },
//                     success: function(response) {
//                         // console.log("kardiya");
//                     },
//                     error: function(response) {
//                         // console.log("margaya");
//                     }
//                 });
//         }
//     }
//     else{
//         $.ajax({
//                 url:'/api/scm/manufacture/get/',
//                 dataType:'json',
//                 type:'GET',
//                 async:false,
//                 contentType:'application/x-www-form-urlencoded',
//                 success: function(response) {
//                     for(var i=0;i<response.length;i++){
//                         if(response[i].user == user) {
//                             var order_time = response[i].order_time;
//                             localStorage.setItem("order_time", order_time);
//                         }
//                     }
//                 },
//                 error: function(response) {
//                     // console.log(response);
//                 }
//             });
//     }
//
// }

// distance between two destinations
var tp_cost = 0;
var petrol_cost = 20;

$(document.body).on("change","#destination",function(){
    var units = parseInt(this.value);
    var comm_id = document.getElementById("commodities-tp").value;
    var src_id = document.getElementById("sources").value;
    var dest_id = document.getElementById("destinations").value;
    var src_pos = 0;
    var dest_pos = 0;
    for (var i=0;i<srcs.length;i++){
        if(srcs[i][1] == src_id){
            src_pos = srcs[i][2];
        }
    }

    for (var i=0;i<srcs.length;i++){
        if(dest[i][1] == dest_id){
            dest_pos = dest[i][2];
        }
    }
    // NOTE
    tp_cost += (src_pos - dest_pos)*30;
    var price = 0;
});

$(document.body).on("keyup","#units-tp",function(){
    var units = parseInt(this.value);
    var comm_id = document.getElementById("commodities-tp").value;
    var src_id = document.getElementById("sources").value;
    var dest_id = document.getElementById("destinations").value
    var price = 0;
    $.ajax({
            url:'/api/scm/commodity/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            success: function(response) {
                for(var comm=0; comm<response.length;comm++){
                    if (response[comm].id == (comm_id)) {
                        price = response[comm].price;
                    }
                    tp_cost += units*price;
                    src_init = '';
                    for (var i = 0; i < srcs.length; i++) {
                        if (srcs[i][1] == src_id) {
                            src_init = srcs[i][2];
                        }
                    }
                    dest_init = '';
                    for (var i = 0; i < dests.length; i++) {
                        if (dests[i][1] == dest_id) {
                            dest_init = dests[i][2];
                        }
                    }
                    // Assuming the difference is in hundreds of kms
                    tp_cost += (dest_init - src_init)*petrol_cost
                    document.getElementById("cost-tp").value = tp_cost;
                }
            },
            error: function(response) {
                // console.log("sorry bro out of balance");
            }
        });


});


var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

function check_bal() {
    $.ajax({
            url:'/check_bal/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{
                'user': user,
            },
            success: function(response) {
                // console.log("hey");
            },
            error: function(response) {
                // console.log(response);
            }
        });
}

function checkMF() {
    $.ajax({
            url:'/check_mf/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{
                'user': user
            },
            success: function(response) {
                // console.log("hey");
            },
            error: function(response) {
                // console.log(response);
                if (response.responseText == 'Updated order_finished and mf_flag') {
                    // console.log("completed MF");
                    $('#warehouse-tbl').load('/mf_get/?user='+user);
                }
            }
        });
}

function checkTP() {
    $.ajax({
            url:'/check_tp/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{
                'user': user
            },
            success: function(response) {
                // console.log("hey");
            },
            error: function(response) {
                // console.log(response);
                if (response.responseText == 'Updated dispatch_finished and tpt_flag') {
                    $('#stats-tbl').load('/tp_get/?user='+user);
                }
            }
        });
}

function checkDemand() {
    if (localStorage.getItem('finalJSON')) {
        finalJSON_str = localStorage.getItem('finalJSON');
        finalJSON = JSON.parse(finalJSON_str);
        // if finalJSON already set, check again for time constraint
        $.ajax({
            url:'/check_demand/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{
                'user': user,
                'finalJSON': (finalJSON_str)
            },
            success: function(response) {
                // console.log("hey");
            },
            error: function(response) {
                // console.log(response);
                if (response.responseText.includes('200__')){
                    // set the old finalJSON
                    var finalJSON_str = response.responseText;
                    var str_len = finalJSON_str.length
                    // remove 200__ from finalJSON_str
                    finalJSON_str = finalJSON_str.slice(5, str_len);
                    localStorage.setItem('finalJSON', (finalJSON_str));
                    var finalJSON = JSON.parse(finalJSON_str);
                }
                else if (response.responseText != 'No change') {
                    // console.log("called generateDemand");
                    finalJSON = generateDemand();
                }
                if (localStorage.getItem('finalJSON')) {
                    finalJSON = JSON.parse(localStorage.getItem('finalJSON'));
                    // console.log(finalJSON);
                    // console.log("hah");
                }

            }
        });
    }
    else {
        $.ajax({
            url:'/check_demand/',
            dataType:'json',
            type:'GET',
            async:false,
            contentType:'application/x-www-form-urlencoded',
            data:{
                'user': user
            },
            success: function(response) {
                // console.log("hey");
            },
            error: function(response) {
                // console.log(response);
                if (response.responseText.includes('200__')){
                    // set the old finalJSON
                    var finalJSON_str = response.responseText;
                    var str_len = finalJSON_str.length
                    // remove 200__ from finalJSON_str
                    finalJSON_str = finalJSON_str.slice(4, str_len);
                    localStorage.setItem('finalJSON', finalJSON_str);
                    var finalJSON = finalJSON_str;
                }
                else if (response.responseText != 'No change') {
                    // console.log("called generateDemand");
                    finalJSON = generateDemand();
                }
                if (localStorage.getItem('finalJSON')) {
                    finalJSON = JSON.parse(localStorage.getItem('finalJSON'));
                    // console.log(finalJSON);
                    // console.log("hah");
                }

            }
        });
    }
}

function generateDemand(){
    var randNumDests = Math.floor(Math.random()*((dests.length) - 1)) + 1;
    var randDests = [];
    var randComms = [];
    var finalJSON = [];

    // select random destintion list
    for (var i = 0; i < randNumDests; i++) {
        var randDest = dests[Math.floor(Math.random()*dests.length)];
        randDests.push(randDest);
    }

    // select random commodity list
    for (var i = 0; i < randNumDests; i++) {
        var randComm = comms[Math.floor(Math.random()*comms.length)];
        randComms.push(randComm);
    }
    for(var i=0;i<randNumDests;i++){
        item = {}
        item['city'] = randDests[i];
        item['comm'] = randComms[i];
        item['demand'] = Math.floor(Math.random()*2000 + 1000);
        finalJSON.push(item);
    }
    localStorage.setItem('finalJSON', JSON.stringify(finalJSON));
    // console.log(finalJSON);
    return finalJSON;
}

function logout() {
    localStorage.clear();
    window.location.href = '/login/';
}

// function showMF_or_not() {
//     var mf_num = document.getElementById('number1');
//     // console.log(mf_num.textContent);
//     if (parseInt(mf_num.innerHTML) == 0) {
//         document.getElementById('placed').css.display = 'none';
//     }
// }
//
//
// function showTP_or_not() {
//     var tp_num = document.getElementById('number2');
//     // console.log("number2");
//     // console.log(typeof(tp_num.textContent));
//     if (parseInt(tp_num.innerHTML) == 0) {
//         document.getElementById('placed_t').css.display = 'none';
//     }
// }

$("#ham").click(function(){
    $("#sidcon").fadeIn();
    $("#sidebar").css("left","0");
});

$(window).click(function(e){
    if(e.target.id == 'sidcon') {
       // retract();
       setTimeout(function(){$('.opt_body').hide();},400);
       $("#sidebar").css("left","-400px");
       $("#sidcon").fadeOut();
       $('.options_sb').removeClass('active');
       $(".close_sb").fadeOut();
    }
 });

$('.close_sb').click(function(){
    setTimeout(function(){$('.opt_body').hide();},400);
   $("#sidebar").css("left","-400px");
   $("#sidcon").fadeOut();
   $('.options_sb').removeClass('active');
   $(".close_sb").fadeOut();
});

$('.options_sb > h4').click(function(){
    $('.options_sb').removeClass('active');
    $("#sidebar").css("left","-400px");
    $('.opt_body').show();
    var idno = $(this).index('.options_sb > h4');
    var option = $('.options_sb').toArray();
    // // console.log(idno);
    if(idno==4){
        idno--;
    }

    $(".close_sb").fadeIn();
    option[idno].className = 'options_sb active';
    // launch();
});

$(document).ready(function(){
    var tbl = document.getElementById("goods-tbl");
    for(var i=0;i<50;i++){
        tbl.innerHTML += "<tr><td>"+comms[i][1]+"</td><td colspan='3'>"+comms[i][0]+"</td><td colspan='2'>"+comms[i][2]+"</td><td>"+comms[i][3]+"</td></td></tr>"
    }
});

$('.details_sb').click(function(){
    $('.modal').modal('hide');
    var idno=$(this).index('.details_sb');
    var option = $('.options_sb').toArray();
    setTimeout(function(){
        $('.opt_body').show();
        $("#sidcon").fadeIn();
        $(".close_sb").fadeIn();
        option[idno+2].className = 'options_sb active';
    },300);
});

$("#notif-logo").click(function(){
    $("#notif-cont").fadeToggle();
});

// function launch(){
//     $('.active').animate({'width':'60vw'},300,function(){
//         $('.active').css('overflow-x','auto');
//         $('.active').animate({'height':'450px'},300,function(){
//             $('.active').css('overflow-y','auto');
//         });
//     });
// }

// function retract(){
//     // setTimeout(function(){
//     //     $('.active').css('overflow-x','hidden');
//     // },500);
//     // setTimeout(function(){
//     //     $('.active').css('overflow-y','hidden');
//     // },500);
//     $('.active').animate({'width':'300px'},300,function(){
//         console.log("heyblah");
//         $('.active').css('overflow-x','hidden');
//         $('.active').animate({'height':'100px'},300,function(){
//             $('.active').css('overflow-y','hidden');
//             $('.active').removeClass('active');
//         });
//     });
// }

function count(){
    var date1=new Date(2010,10,3);
    var date2=new Date(2017,9,24);
    var date=(date2.getTime()-date1.getTime())/(1000*60*60*24);/*不用考虑闰年否*/
    console.log("相差"+date+"天");
}

count()
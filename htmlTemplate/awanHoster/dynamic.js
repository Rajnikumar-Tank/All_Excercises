const left=document.getElementById('left');
const right=document.getElementById('right');
left.onclick=function(){
    document.getElementById('row').scrollLeft+=200;
}
right.onclick=function(){
    document.getElementById('row').scrollLeft-=200;
}
function onTabChange(tab){
    const tab1=document.getElementById("1");
    const tab2=document.getElementById('2');
    const tab3=document.getElementById('3');
    const tab4=document.getElementById("4");
    if(tab.getAttribute("id")==tab1.getAttribute("id")){
        document.getElementById('technologie').innerHTML="WordPress";
        document.getElementById('tech2').innerHTML="WordPress";
        document.getElementById('tech3').innerHTML="WordPress";
    }
    if(tab.getAttribute("id")==tab2.getAttribute("id")){
        document.getElementById('technologie').innerHTML="Magento";
        document.getElementById('tech2').innerHTML="Magento";
        document.getElementById('tech3').innerHTML="Magento";
    }
    if(tab.getAttribute("id")==tab3.getAttribute("id")){
        document.getElementById('technologie').innerHTML="Laravel";
        document.getElementById('tech2').innerHTML="Laravel";
        document.getElementById('tech3').innerHTML="Laravel";
    }
    if(tab.getAttribute("id")==tab4.getAttribute("id")){
        document.getElementById('technologie').innerHTML="PHP";
        document.getElementById('tech2').innerHTML="PHP";
        document.getElementById('tech3').innerHTML="PHP";
    }
}
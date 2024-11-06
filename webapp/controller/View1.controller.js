sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("thinkspace.zad.thinkspace.controller.View1", {
        onInit: function () {
          $.getScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js", () => {
            $.getScript("https://unpkg.com/vanta/dist/vanta.birds.min.js", () => {
              VANTA.BIRDS({
                el: "#vanta-bg",
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
backgroundColor: 0x5084dc,
  quantity: 9.00
              });
            });
          });

             
    
    
        },
        onAfterRendering:function(){
         

          var that = this;
                
          let bodyse = document.querySelector(".mainLogin");
          jQuery('#sign_up_btn').on('click',function(){
              
              bodyse.classList.add("div_slide");
              if(bodyse.classList.contains("div_slide")){
                  bodyse.style.background = '#6d4b40';
              }
          })
          jQuery('#RegisterBtn').on('click',function(){
              console.log(objdiv);
              var router = that.getOwnerComponent().getRouter();
              router.navTo("Home") //change router name 
            
          })
          jQuery('#sign_in_btn').on('click',function(){
              
              bodyse.classList.remove("div_slide");
              bodyse.style.background = '#f45936';
          })
          jQuery('.RegisterData').on('change',function(onvalue){
              objdiv[onvalue.target.name]=onvalue.target.value;
              onvalue.preventDefault();
             
              });
        }
    });
});

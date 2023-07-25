let ownerNameInput=document.querySelector(".cardOwnerName");
let ownerNumber=document.querySelector(".cardOwnerNumber");
let ownerDateMonth=document.querySelector(".cardOwnerdateMonth");
let ownerDateyear=document.querySelector("cardOwnerdateYear");
let confirm=document.querySelector(".accept");


// ON card
let cardNumber=document.querySelector(".cardNumber");
let cardName=document.querySelector(".cardName");
let cardDateMonth=document.querySelector(".cardDateMonth");
let cardDateYear=document.querySelector(".cardDateYear");
let cardCvc= document.querySelector(".cardCvc");
let cards = document.querySelectorAll('.card');
let comeBackDom=document.querySelector(".comeBack");


ownerNameInput.addEventListener("input",function(e){
    console.log(e.currentTarget);
    cardName.value=(e.currentTarget).value;

    // $(function(){
    //     let $formPart=$("#formPart")
    //     $formPart.validate()
    //     {
    //         rules:{
    //             name:{
    //                 lettersonly: false
    //             }
                
    //         }
        
    //         messages:{
    //             lettersonly:"only alphabetical characters!"
    //         }
    //     }
        
    //     })
        
    // function allLetter(e) {
    //     var letters = /^[a-z]*$/i;
    //     if (!(e.currentTarget).value.match(letters)) {
    //         alert('Please input letters only');
    //     }
    // }

})

$('.cardOwnerNumber').keyup(function()
 {
  var foo = $(this).val().split(" ").join(""); // remove hyphens
  if (foo.length > 0) 
  {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join(" ");
  }
  cardNumber.value=foo
// let myarray=[];
// myarray.push.foo
// console.log(myarray);
// cardNumber.value=myarray;
});



$(".cardOwnerdateMonth").on("input",function(event){
  console.log(event.target.value);
  cardDateMonth.value=event.target.value;
  $(".cardDateSep").css({"display":"block"})

})

$(".cardOwnerdateYear").on("input",function(event){
  cardDateYear.value=event.target.value;
})

$(".cardOwnerCvc").on("input",function(event){
  cardCvc.value=event.target.value ;

});


comeBackDom.addEventListener("focus",function(event){
  cardCvc.value=event.target.value;
  console.log(event);
  [...cards].forEach((card)=>{
  
    card.classList.toggle('is-flipped');
  });
});

$(".js-inpt").on("focus",function(event){
  console.log("hii")
  if ("card:contains(is-flipped)")
  {
   $(".card").removeClass("is-flipped")
  }
});


$(".accept").on("click",function(event){
  
  if(!($("#formPart").valid())){
alert("fill the blanks");
  }
else{
  event.preventDefault()
  $('.finish').css({"display":"flex","flex-direction":"column","align-items":"center"});
  // $('#formPart').css({"display":"none"});
   $('#formPart').css({"display":"none"});
  $(".continue").css({"background-color": "rgb(61, 3, 61)","color":"white","width" : "30%","border-radius": "10px","margin-top":"20px",
  "letter-spacing": "1px"})
}
});


jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-z\s]+$/i.test(value);
    },
   
  );

jQuery.validator.addMethod(
    "digitsCustom",
    function (value, element) {
      return this.optional(element) || /^[0-9 ]+$/i.test(value);
    },
   
  );
  
$(function () {

    $("#formPart").validate({
      rules: {
        name: {
          lettersonly: true,
          required: true
          
        },
        number:{
          required:true,
          digitsCustom:true
        },
        date:{
         required:true,
          maxlength:2,
          digits:true
        },
        cardOwnYear:{
         
          maxlength:4,
           digits:true
         },
         cardCvc:{
          required:true,
         }

      },
      messages: {
        name: {
          lettersonly: "Only alphabetical characters",
            required:"Please specify your name"
          
        },
        number:{
          required:"fill the Blanks",
          digitsCustom:"Please enter only digits"
        },
        date:{
          required:"can't be blank",
           maxlength:"it should contain two characters",
           digits:"Please enter only digits"
         },
         cardOwnYear:{
          maxlength:"it should contain two characters",
           digits:"Please enter only digits"
         },
         cardCvc:{
          required:"can't be blank"
         }
      },
      submitHandler: function (form) {
          $(form).ajaxSubmit();
      },
    });
  });
  

//#region
 //   $('.cardOwnerNumber').on('change', function(e){
  //     cardNumber = $('.cardOwnerNumber').val();
  //     // $('#user_phone').css({"border":"1px solid #ccc"});
  //     if(!cardNumber.match(/^[0-9 ]+$/))
  //     {
  //         $('.cardOwnerNumber').css({"border":"1px solid purple"});
  //     }      
  // })




  // [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

//#endregion

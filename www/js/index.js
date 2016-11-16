/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        this.receivedEvent('deviceready');
        $(":password").focus(function(e) {
            console.log(e); //currentTarget
            // e.currentTarget.next().show();

        });

        $(".close-icon").click(function(e) {
            $(":password").val('');
            console.log(e);
            console.log(this);
            $(".close-icon").hide();
            // .css("display", "inline-block");
        });

        $("#date").click(function() {
            console.log("hi");
        });

        $("#date").focus(function() {
            console.log(this);
            this.type = 'date';
            console.log(this.type);
            $("#date").trigger("click");
          });

          var items = [];
          $(document).ready(function () {
            console.log("click");
            $.getJSON( "http://localhost:3000/country/", function( data ) {
              $.each( data, function(key,val) {
              console.log("key"+key+"val"+val);
              $.each( val, function(key,val) {
              if($("#country option").length<=4){
                var options = new Option(val);
                $("#country").append(options);
              }
              });
            });
          console.log(items);
});
        });

        $("#country").change(function () {
          console.log($("#country").val());
          var a = $("#country").val();
          $.getJSON('http://localhost:3000/country/'+a,function (data) {
            $.each( data, function(key,val) {
              console.log(val);
              $("#state option").not(":first").remove();
              $.each( val, function(key,val) {
                //  $("#state").empty();
                if($("#state option").length<=val.length){
                var options = new Option(val);
                $("#state").append(options);
              }
})

          })
        })
      });
      $("#state").change(function () {
        console.log($("#state").val());
        var a = $("#state").val();
        $.getJSON('http://localhost:3000/'+a,function (data) {
          $.each( data, function(key,val) {
            console.log(val);
            $("#city option").not(":first").remove();
            $.each( val, function(key,val) {
              //  $("#state").empty();
              if($("#city option").length<=val.length){
              var options = new Option(val);
              $("#city").append(options);
            }
})

        })
      })
    });











    },

    receivedEvent : function(id) {
        console.log('Received Event: ' + id);
    },



    validation : function () {
      var fn=$("#firstname").val();
      var ln=$("#lastname").val();
      var pass=$("#password").val();
      var cpass=$("#cpassword").val();
      var email=$("#email").val();
      var phn=$("#phonenumber").val();
      var zc=$("#zipcode").val();
      var ad1=$("#address1").val();
      var ad2=$("#address2").val();
var pregex = /^([0-9]){4,4}$/;
var eregex = /^([0-9]){4,4}$/;
var phregex = /^([0-9]){10,10}$/;
var zpregex = /^([0-9]){6,6}$/;


      if(fn!="" || ln!="" || pass!="" || cpass!="" || email!="" || phn!="" || zc!="" || ad1!="" || ad2!="")
      {
          $("#firstname").closest(".border").css( "border"," 1px solid white");
          $("#lastname").closest(".border").css( "border"," 1px solid white");
          $("#password").closest(".border").css( "border"," 1px solid white");
          $("#cpassword").closest(".border").css( "border"," 1px solid white");
          $("#email").closest(".border").css( "border"," 1px solid white");
          $("#phonenumber").closest(".border").css( "border"," 1px solid white");
          $("#male").closest(".border").css( "border","none")||
          $("#female").closest(".border").css( "border","none");
          $("#zipcode").closest(".border").css( "border"," 1px solid white");
          $("#address1").closest(".border").css( "border"," 1px solid white");
          $("#address2").closest(".border").css( "border"," 1px solid white");

          if (fn=="") {
            alert("Please Enter First Name !");
            $('#firstname').focus();
            $("#firstname").closest(".border").css( "border"," 2px solid yellow");
          } else if (ln=="") {
            alert("Please Enter Last Name !");
            $('#lastname').focus();
            $("#lastname").closest(".border").css( "border"," 2px solid yellow");
          } else if (pass=="") {
          alert("Password Cant Be Empty !");
          $('#password').focus();
          $("#password").closest(".border").css( "border"," 2px solid yellow");
          $("#cpassword").closest(".border").css( "border"," 2px solid yellow");
        }  else if (!pass.match(pregex)) {
          alert ("Password Should Be 4 Digit Numbers !");
          $('#password').focus();
          $("#password").closest(".border").css( "border"," 2px solid yellow");
          $("#cpassword").closest(".border").css( "border"," 2px solid yellow");
        } else if (!(pass===cpass)) {
        alert ("Password Not Match !");
        $('#password').focus();
        $("#password").closest(".border").css( "border"," 2px solid yellow");
        $("#cpassword").closest(".border").css( "border"," 2px solid yellow");
      } else if (email=="") {
            alert("Email Cant Be Empty !");
            $('#email').focus();
            $("#email").closest(".border").css( "border"," 2px solid yellow");
          }  else if (!email.match(eregex)) {
            alert ("Please Fill Valid Email eg vaibhav.khot@gmail.com Special Symbols ._- only allowed !");
            $('#email').focus();
            $("#email").closest(".border").css( "border"," 2px solid yellow");
            } else if (phn=="") {
              alert("Please Enter Phone Number !");
              $('#phonenumber').focus();
              $("#phonenumber").closest(".border").css( "border"," 2px solid yellow");
            }  else if (!phn.match(phregex)) {
              alert ("Please Enter 10 Digit Phone Number !");
              $('#phonenumber').focus();
              $("#phonenumber").closest(".border").css( "border"," 2px solid yellow");
            } else if ($('input[name=gender]:checked').length<=0){
              alert ("Please Select Gender ! ");
              $("#male").closest(".border").css( "border"," 2px solid yellow")
            } else if (zc=="") {
              alert("Please Enter Zip Code !");
              $('#zipcode').focus();
              $("#zipcode").closest(".border").css( "border"," 2px solid yellow");
            }  else if (!zc.match(zpregex)) {
              alert ("Please Enter 6 Digit Zip Code !");
              $('#zipcode').focus();
              $("#zipcode").closest(".border").css( "border"," 2px solid yellow");
            } else if (!($("#finalcheck").prop("checked"))){
          alert("Please checked !");
}




      } else {
        alert ("Please Fill Details* !");
        $("#firstname").closest(".border").css( "border"," 2px solid yellow");
        $("#lastname").closest(".border").css( "border"," 2px solid yellow");
        $("#password").closest(".border").css( "border"," 2px solid yellow");
        $("#cpassword").closest(".border").css( "border"," 2px solid yellow");
        $("#email").closest(".border").css( "border"," 2px solid yellow");
        $("#phonenumber").closest(".border").css( "border"," 2px solid yellow");
        $("#zipcode").closest(".border").css( "border"," 2px solid yellow");
        $("#address1").closest(".border").css( "border"," 2px solid yellow");
        $("#address2").closest(".border").css( "border"," 2px solid yellow");
         $("#date").closest(".border").css( "border"," 2px solid yellow");
         $("#country").closest(".border").css( "border"," 2px solid yellow");
         $("#state").closest(".border").css( "border"," 2px solid yellow");
         $("#city").closest(".border").css( "border"," 2px solid yellow");
        //
      }
    }
};

app.initialize();;

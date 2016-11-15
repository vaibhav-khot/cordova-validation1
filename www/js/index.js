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


        $(document).ready(function () {
          console.log("click");
          $.getJSON( "http://localhost:3000/country/", function( data ) {
            var items = [];
            $.each( data, function(key,val) {
              console.log(val);
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
    $("#register1").click(function () {
      if ($("#firstname").val()=="") {
        alert("Please Enter First Name");
        $("#firstname").focus();
        $("#firstname").closest("border").css( "border", "1px solid yellow" );
      }
    })










    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();;

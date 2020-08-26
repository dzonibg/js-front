let response;
$(document).ready(function () {
    let content = "<p>Welcome to the API frontend homepage. From here, you can explore some of the functions" +
        " that the backend can provide you with. It's created for easier testing and further improvements in" +
        " real world scenarios.</p>";
    $("#content").append(content);

   $("#linkHome").click(function () {
        $("#content").empty();
        $("#content").append(content);
   });

   $("#linkLogin").click(function (){
       $("#content").empty();
       $("#content").append("A login form.");
   });

});
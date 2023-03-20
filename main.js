$(function () {
    $(".btn-mob").click(function () {
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });

    $(".reviews").bxSlider({
        auto: true,
        pause: 5000
    });

    $(".accordian a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active") == false) {
            $(".accordian a").removeClass("active");
            $(".accordian p").slideUp();
            $(this).addClass("active");
            $(this).next("p").slideDown()

        }
    });

    $(".sign-up").click(function () {
        $("body").append(`<div class="overlay"></div>`)
        $("body").append(`<div class="popover"></div>`)
        $(".popover").append(
            `<a href="" class="close" aria-label="close">&times;</a>
       <form action="sing.php" method="post" class=signup-form>
       <table>
           <tr>
               <td><label for="fname">First Name</label></td>
               <td><input type="text" id="fname" name="fname" placeholder="Enter first name"></td>
           </tr>
           <tr>
               <td><label for="lname">Last Name</label></td>
               <td><input type="text" id="lname" name="lname" placeholder="Enter last name"></td>
           </tr>
           <tr>
               <td><label for="bday">Birthday</label></td>
               <td><input type="date" id="bday" name="bday" ></td>
           </tr>
           <tr>
               <td><label>Gender</label></td>
               <td>
                   <input type="radio" id="m" name="gender"><label for="m">Male</label>
                   <input type="radio" id="f" name="gender"><label for="f">Female</label>
               </td>
           </tr>
           <tr>
               <td><label for="mai">Email</label></td>
               <td><input type="text" id="mai" name="mail" placeholder="Enter Email"></td>
           </tr>
           <tr>
               <td><label for="passs">Password</label></td>
               <td><input type="password" id="passs" name="passs"></td>
           </tr>
           <tr>
               <td><label for="con">Confirm Password</label></td>
               <td><input type="password" id="con" name="passs"></td>
           </tr>
           <tr>
               <td></td>
               <td><input type="checkbox" id="term" name="term"><label for="term">I agree to the terms of use</label></td>
           </tr>
           <tr>
               <td></td>
               <td><button class="btn" type="submit">Submit</button>   <button class="btn" value="Cancel">Cancel</button></td>
           </tr>
       </table>
   </form>`
        );

        $(".popover .close").click(function (e) {
            e.preventDefault();
            $(".popover, .overlay").remove()
        });

        $(".overlay").click(function () {
            $(".popover, .overlay").remove()
        });
        $(window).keyup(function (e) {
            if (e.which == 27) {
                $(".popover, .overlay").remove()
            }
        })
    });
});

// Chart Js Start
{
    const ctx = document.querySelector('.chart1');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [75, 25],
                borderWidth: 1,
                backgroundColor: ["rgba(202,60,60,1.0)", "rgba(255,255,255,1.0)"],
                cutout: '85%'
            }]
        },
    });
};
{
    const ctx = document.querySelector('.chart2');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [25, 75],
                borderWidth: 1,
                backgroundColor: ["rgba(202,60,60,1.0)", "rgba(255,255,255,1.0)"],
                cutout: '85%'
            }]
        },
    });
};
{
    const ctx = document.querySelector('.chart3');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [75, 25],
                borderWidth: 1,
                backgroundColor: ["rgba(202,60,60,1.0)", "rgba(255,255,255,1.0)"],
                cutout: '85%'
            }]
        },
    });
};
{
    const ctx = document.querySelector('.chart4');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [50, 50],
                borderWidth: 1,
                backgroundColor: ["rgba(202,60,60,1.0)", "rgba(255,255,255,1.0)"],
                cutout: '85%'
            }]
        },
    });
};

//scroll to top
// Get the button
let mybutton = document.querySelector(".go-top");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click",function(){
    topFunction();
});
let date_today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let is_friday = date_today.getDay();

let friday_banner = document.getElementById('friday-banner');

    if (is_friday == 5) {
        friday_banner.style.display = "block";
        on_size()
    }
}

        function on_size() {
            let header_element = document.getElementById('header-element');
            let int_viewport_width = window.innerWidth;

            if (is_friday == 5) {
                if (int_viewport_width < 620) {
                    header_element.style.paddingTop = "70px";
                } else if (int_viewport_width >= 620 && int_viewport_width <= 700) {
                    header_element.style.paddingTop = "50px";
                } else {
                    header_element.style.paddingTop = "30px";
                }
            }
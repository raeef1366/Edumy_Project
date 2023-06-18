const cards = [
    { 
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/170/course/overviewfiles/t1.jpg",
        title: "Design",
        body: "Over 800 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/156/course/overviewfiles/t8.jpg",
        title: "Business",
        body: "Over 1,400 Courses",
    },
    
    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/180/course/overviewfiles/t3.jpg",
        title: "Software Development",
        body: "Over 350 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/188/course/overviewfiles/t4.jpg",
        title: "Web Development",
        body: "Over 640 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/198/course/overviewfiles/t7.jpg",
        title: "Phtography",
        body: "Over 740 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/203/course/overviewfiles/t5.jpg",
        title: "Audio + Music",
        body: "Over 120 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/207/course/overviewfiles/t2.jpg",
        title: "Marketing",
        body: "Over 200 Courses",
    },

    {
        img: "https://demo.createdbycocoon.com/moodle/edumy/12/pluginfile.php/218/course/overviewfiles/t6.jpg",
        title: "3D + Animation",
        body: "Over 900 Courses",
    }

]

cards.map((e) => {
    const text = document.querySelector(".cart");
    text.innerHTML += `
    <div class="col-sm-6 col-lg-3">
    <a href="#" class="photo">
        <img src=${e.img} alt>

        <div class="photoText">
            <span>${e.title}</span>
            <span>${e.body}</span>
        </div>
    </a>
</div>
    `

})
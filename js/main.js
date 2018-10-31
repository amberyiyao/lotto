document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnBack").addEventListener("click", function () {
        document.getElementById("home").classList.toggle("display");
        document.getElementById("list").classList.toggle("display");

    });

    document.getElementById("btnSend").addEventListener("click", function () {
        document.getElementById("home").classList.toggle("display");
        document.getElementById("list").classList.toggle("display");

        var x = document.getElementById("digits").value;
        console.log(x);
        var y = document.getElementById("max").value;
        console.log(y);


        let formData = new FormData();

        let url = "https://davidst.edumedia.ca/mad9014/nums.php";


        formData.append("digits", x);
        formData.append("max", y);

        let customSettings = {
            mode: "cors",
            method: "POST",
            body: formData
        };

        let request = new Request(url, customSettings);


        fetch(request)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(
                function (data) {
                    //

                    console.log(data.numbers);

                    let ul = document.querySelector(".num_list");
                    ul.innerHTML = ""; //clear out the old list
                    for (let item in data.numbers) {

                        console.log(item + ": " + data.numbers[item]);

                        let li = document.createElement("li");
                        li.innerHTML = data.numbers[item];
                        ul.appendChild(li);

                    }
                }
            )
            .catch(function (error) {
                alert(error);
            });

    });

}


//
//    let ul = document.querySelector(".num_list");
//    ul.innerHTML = ""; //clear out the old list
//    for (let item in numbers) {
//
////        console.log(item + ": " + numbers[item]);
//        let li = document.createElement("li");
//        li.innerHTML = numbers[item];
//        ul.appendChild(li);






//
//document.getElementById("btnSend").addEventListener("click", function () {
//
//    var digits = document.getElementById("digits").value;
//    console.log(digits);
//    var y = document.getElementById("range").value;
//    console.log(y);
//
//    function getRandomInteger(min, max) {
//        min = Math.ceil(min); // min is inclusive
//        max = Math.floor(max + 1); // max is exclusive so we add one
//        return Math.floor(Math.random() * (max - min)) + min;
//    }
//
//    let b = y;
//    let a = getRandomInteger(1, b);
//    console.log(a);
//
//    let lotto = [];
//
//    for (let i = 0; i < digits; i++) {
//
//        lotto.push(getRandomInteger(1, b));
//
//    }
//
//    console.log(lotto);
//})

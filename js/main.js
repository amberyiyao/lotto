document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnBack").addEventListener("click", function () {
        document.getElementById("home").classList.toggle("display");
        document.getElementById("list").classList.toggle("display");

    });

    document.getElementById("btnSend").addEventListener("click", function () {
        document.getElementById("home").classList.toggle("display");
        document.getElementById("list").classList.toggle("display");

        let digits = document.getElementById("digits").value;
        let max = document.getElementById("max").value;

        let formData = new FormData();

        let url = "https://davidst.edumedia.ca/mad9014/nums.php";


        formData.append("digits", digits);
        formData.append("max", max);

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

                    console.log(data.numbers);

                    let ul = document.querySelector(".num_list");
                    ul.innerHTML = "";

                    for (let item in data.numbers) {
                        let li = document.createElement("li");
                        li.innerHTML = data.numbers[item];
                        ul.appendChild(li);
                    }


                    if (ul.innerHTML == "") {
                        let li = document.createElement("li");
                        li.textContent = "You need to write the numbers in the textbox! Start again now!";
                        ul.appendChild(li);
                        document.querySelector("li").classList.toggle("Message");
                    }
                }
            )
            .catch(function (error) {
                alert(error);
            });

    });

}

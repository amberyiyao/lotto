document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("btnSend").addEventListener("click", getData);
    document.getElementById("btnBack").addEventListener("click", getData);
}


function getData() {

    let n = document.getElementById("digits").value;
    console.log(n);
    let c = document.getElementById("max").value;

    function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max + 1); // max is exclusive
        return Math.floor(Math.random() * (max + 1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    let url = "https://davidst.edumedia.ca/mad9014/nums.php?digits=6&max=42";

    let formData = new FormData();

    formData.append("digits", n);
    formData.append("max", c);

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

                console.log(c);


                for (let i = 0; i < document.n; i++) {
                    data.numbers.push(getRandomInteger(1, c))

                }


                console.log(data.numbers);
                let ul = document.querySelector(".num_list");
                ul.innerHTML = ""; //clear out the old list
                for (let item in data.numbers) {
                    if (item < n) {
                        console.log(item + ": " + data.numbers[item]);
                        let li = document.createElement("li");
                        li.innerHTML = data.numbers[item];
                        ul.appendChild(li);
                        console.log(data);
                    }
                }
            }
        )
        .catch(function (error) {
            alert(error);
        });
}

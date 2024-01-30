function solve() {

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");

    const addWorkerBtn = document.getElementById("add-worker");
    addWorkerBtn.addEventListener("click", addWorker);

    function addWorker(event) {
        event.preventDefault();
        const tbody = document.getElementById("tbody");

        const tr = document.createElement("tr");

        const tdFname = document.createElement('td');
        tdFname.textContent = fname.value;

        const tdLName = document.createElement('td');
        tdLName.textContent = lname.value;

        const tdEmail = document.createElement("td");
        tdEmail.textContent = email.value;

        const tdBirth = document.createElement('td');
        tdBirth.textContent = birth.value;

        const tdPosition = document.createElement("td");
        tdPosition.textContent = position.value

        const tdSalary = document.createElement('td');
        tdSalary.textContent = salary.value;


        const tdButtons = document.createElement('td');
        const firedBtn = document.createElement('button');
        firedBtn.className = "fired";
        firedBtn.textContent = "Fired";

        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";

        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);
        tdButtons.style.display = "table-row"

        tr.appendChild(tdFname);
        tr.appendChild(tdLName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tr.appendChild(tdButtons);

        const fnameInput = fname.value;
        const lnameInput = lname.value;
        const emailInput = email.value;
        const birthInput = birth.value;
        const positionInput = position.value;
        const salaryInput = salary.value;

        if (fname.value == "" || lname.value == "" || email.value == "" || birth.value == "" || position.value == "" || salary.value == "") {
            return;
        }

        tbody.appendChild(tr);

        editBtn.addEventListener("click", edit);
        firedBtn.addEventListener("click", firedWorker);

        let sum = Number(document.getElementById("sum").textContent);
        sum += Number(salaryInput);
        document.getElementById('sum').textContent = sum.toFixed(2);

        fname.value = "";
        lname.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";

        function edit(event) {
            tbody.removeChild(tr);
            fname.value = fnameInput;
            lname.value = lnameInput;
            email.value = emailInput;
            birth.value = birthInput;
            position.value = positionInput;
            salary.value = salaryInput;

            const elements = event.target.parentElement.parentElement.children[5];
            let sum = Number(document.getElementById("sum").textContent);
            sum -= Number(elements.textContent);
            document.getElementById('sum').textContent = sum.toFixed(2);
        }

        function firedWorker(event) {
            tbody.removeChild(tr);
            const elements = event.target.parentElement.parentElement.children[5];
            let sum = Number(document.getElementById("sum").textContent);
            sum -= Number(elements.textContent);
            document.getElementById('sum').textContent = sum.toFixed(2);
        }
    }

}
solve()
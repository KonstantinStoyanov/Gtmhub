
const data = {
  data: [
    {
      name: 'Georgi',
      insured: true,
      salary: {
        monthly: 3000
      }
    },
    {
      name: 'Misho',
      insured: true,
      salary: {
        monthly: 5673
      }
    },
    {
      name: 'Nasko',
      insured: false,
      salary: {
        monthly: 4532
      }
    },
    {
      name: "Pesho",
      insured: false,
      salary: {
        monthly: 4000
      }
    },
    {
      name: "Vasil",
      insured: true,
      salary: {
        monhtly: 1000
      }
    }
  ]
}

//   $(document).ready(function() {
//        let element=document.querySelector("schedule");


function solve() {


  let div = document.getElementById("schedule");

  let table = document.createElement("table")

  let nameCol = document.createElement("th");
  nameCol.innerText = "Name";
  let monthly = document.createElement("th");
  monthly.innerText = "Monthly"
  let yearly = document.createElement("th")
  yearly.innerText = "Yearly"
  let trHeader = document.createElement("tr");
  trHeader.appendChild(nameCol);
  trHeader.appendChild(monthly);
  trHeader.appendChild(yearly);

  table.appendChild(trHeader)



  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    if (element.insured) {

      let listItem = document.createElement("tr");
      let nameItem = document.createElement("td");
      nameItem.innerText = element.name;
      listItem.appendChild(nameItem);

      let monthlyItem = document.createElement("td");
      monthlyItem.innerText = element.salary.monhtly || element.salary.monthly;
      listItem.appendChild(monthlyItem);

      let yearlyItem = document.createElement("td");
      yearlyItem.innerText = element.salary.monhtly * 12 || element.salary.monthly * 12;
      listItem.appendChild(yearlyItem);

      table.appendChild(listItem)
    }

  }
  div.appendChild(table)

}
solve()



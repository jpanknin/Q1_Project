// Fill in the input box for the properties available for selection
//https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript

window.onload = fillSelectBox(properties);

function fillSelectBox(properties) {
  for (var i = 0; i < properties.length; i++) {
    // console.log(properties[i].propInfo.propName);
    var optionBox = document.querySelector('#propertySelector');
    var option = document.createElement('option');
    var choice = document.createTextNode(properties[i].propInfo.propAddress);
    option.value = properties[i].propInfo.propAddress;
    option.appendChild(choice);
    optionBox.appendChild(option);
  }
}

// Selecting which property to load from the object page
// https://stackoverflow.com/questions/26086777/global-variable-and-addeventlistener

var property;
var propSelect = document.querySelector('#propertySelectorButn');
propSelect.addEventListener('click', propSelector);

function propSelector() {
  property = document.querySelector('#propertySelector').value;
  for (var i = 0; i < properties.length; i++) {
    if (properties[i].propInfo.propAddress == property) {
      fillValues(i);
      fillProforma(i);
      return i;
    }
  }
}

// Fill in table values
function fillValues(property) {
  var prop = properties[property]
  propInfo(prop);
  purchaseInfo(prop);
  saleAssumptions(prop);
  financingAssumptions(prop);
  rentalAssumptions(prop);
  // rentalTotals(prop);
  returnsDiscountRate(prop);
  currentFinancials(prop);
  totalUnitCalc(prop);
  marketAssumptions(prop);
  floorplanCalcs(prop);
  purchaseInfoCalcs(prop);
  rentalIncome(prop);

}

function fillProforma(property) {
  var prop = properties[property];
  var saleYear = (parseInt(document.querySelector('#saleYear').value));
  proformaYear(saleYear);
  proformaRentalIncome(prop, saleYear);
  proformaOtherIncome(prop, saleYear);
  grossRentIncome(prop, saleYear),
  vacancy(prop, saleYear)
}

// console.log(typeof properties[0].propInfo.numUnits);

// Fill in the Property Information table with values
function propInfo(prop) {
  var info = prop.propInfo;
  for (item in info) {
    var val = "#" + item;
    var td = document.querySelector(val);
    var text = document.createTextNode(info[item]);
    // console.log(typeof info[item]);
    if (typeof info[item] != "function") {
      td.value = info[item];
    } else if (info[item] == "function") {
      // td.value = info[item]();
      // console.log(td.value);

    }
  }
}



function purchaseInfo(prop) {
  var info = prop.purchaseInfo;
  for (item in info) {
    if (typeof info[item] != "object") {
      var val = "#" + item;
      var td = document.querySelector(val);
      td.value = info[item];
    } else {
      for (key in info[item]) {
        var val = "#closing" + key;
        var td = document.querySelector(val);
        td.value = info[item][key];
      }
    }
  }
}

function purchaseInfoCalcs(prop) {
  var info = prop.purchaseInfo;
  var closingCosts = info.purchPrice * info.closing.CostPercent;
  closingCosts = "$" + closingCosts.toLocaleString(undefined, {minimumFractionDigits: 0});
  document.querySelector('#closingCostAmount').innerText = closingCosts;
  var totalCosts = info.purchPrice + parseInt(closingCosts);
  totalCosts = "$" + totalCosts.toLocaleString(undefined, {minimumFractionDigits: 2});
  document.querySelector('#totalCost').innerText = totalCosts;
  var purchUnit = (parseInt(info.purchPrice / totalUnitCalc(prop))).toFixed(2);
  purchUnit = "$" + purchUnit.toLocaleString(undefined, {minimumFractionDigits: 2});
  document.querySelector('#purchCostUnit').innerText = purchUnit;
  var totalUnit = (parseInt(totalCosts / totalUnitCalc(prop)).toFixed(2));
  totalUnit = "$" + totalUnit.toLocaleString(undefined, {minimumFractionDigits: 0});
  document.querySelector('#totalCostUnit').innerText = totalUnit;
}

function saleAssumptions(prop) {
  var info = prop.saleAssumptions;
  for (item in info) {
    var val = "#" + item;
    var td = document.querySelector(val);
    var text = document.createTextNode(info[item]);
    if (info[item] > 1) {
      td.value = info[item];
    } else {
      td.value = ((info[item] * 100).toFixed(2)) + "%";
    }
  }
}

function financingAssumptions(prop) {
  var info = prop.financing;
  for (item in info) {
    var val = "#" + item;
    var td = document.querySelector(val);
    var text = document.createTextNode(info[item]);
    if (info[item] > 1) {
      td.value = info[item];
    } else {
      td.value = (info[item] * 100).toFixed(2) + "%";
    }
  }
}

function rentalAssumptions(prop) {
  var info = prop.rentalAssumptions;
  for (var i = 0; i < info.length - 1; i++) {
    for (key in info[i]) {
      var val = ("#fp" + (i + 1) + key);
      // console.log("Node", val.prop('tagName'));
      var td = document.querySelector(val);
      td.value = info[i][key]
      if (typeof info[i][key] != "function") {
        var text = document.createTextNode(info[i][key]);
        td.value = info[i][key];
      } else {
          var text = document.createTextNode(info[i][key]());
          td.value = info[i][key]();
      }
    }
  }
}

function rentalIncome(prop) {
  var data = prop.rentalAssumptions;
  var totalRent = 0;
  for (var i = 0; i < data.length - 1; i++) {
    totalRent += data[i].TotalUnits * data[i].RentUnit;
  }
  totalRent = totalRent * 12;
  document.querySelector('#rentIncomeTotal').innerText = totalRent;
  var otherIncome = prop.currentFinancials.revenue.total.other;
  document.querySelector('#otherIncomeTotal').value = otherIncome;
  var grossRent = totalRent + otherIncome;
  console.log(typeof grossRent);
  document.querySelector('#grossIncomeTotal').innerText = grossRent;
  return totalRent;
}

function returnsDiscountRate(prop) {
  var info = prop.returnsSummary;
  for (key in info) {
    var val = "#" + key + "Discount";
    var td = document.querySelector(val);
    var percent = ((info[key].discountRate) * 100).toFixed(2) + "%";
    var text = document.createTextNode(percent);
    td.value = percent;
  }
}

function currentFinancials(prop) {
  var info = prop.currentFinancials;
  // console.log(info);
}

function totalUnitCalc(prop) {
  var units = document.querySelector('#numUnits');
  var info = prop.rentalAssumptions;
  var totalUnits = 0;
  for (var i = 0; i < info.length - 1; i++) {
    totalUnits += info[i].TotalUnits;
  }
  units.value = totalUnits;
  return totalUnits;
}

function floorplanCalcs(prop) {
  var info = prop.rentalAssumptions;
  for (var i = 0; i < info.length - 1; i++) {
    var totalSF = info[i].TotalUnits * info[i].SFUnit;
    var rentSF = "$" + (info[i].RentUnit / info[i].SFUnit).toFixed(2);
    document.querySelector('#fp' + (i + 1) + "TotalSF").innerText = totalSF;
    document.querySelector('#fp' + (i + 1) + "RentSF").innerText = rentSF;
  }
}

function marketAssumptions(prop) {
  var info = prop.marketRentalAssumptions[0];
  for (var i = 1; i <= 10; i++) {
    var data = info[i];
    for (key in data) {
      var val = "#year" + [i] + key;
      var td = document.querySelector(val);
      var text = document.createTextNode(info[i][key]);
      td.value = (info[i][key] * 100).toFixed(2) + "%";
    }
  }
}

function proformaYear(saleYear) {
  var row = document.querySelector('#proformaYear');
  for (var i = 1; i <= saleYear + 1; i++) {
    var el = document.createElement('th');
    el.setAttribute("class", "proformaYearRow");
    var id = "proformaYear-" + i;
    el.setAttribute("id", id);
    el.innerHTML = "Year " + i;
    row.appendChild(el);
  }
}

// function proformaRentalIncome(prop, saleYear) {
//   var rentGrowth = {};
//   var data = prop.marketRentalAssumptions[0];
//   var rent = prop.currentFinancials.revenue.total.rent;
//   var row = document.querySelector('#proformaRentalIncome');
//   for (var i = 1; i <= saleYear; i++) {
//     var el = document.createElement('td');
//     el.setAttribute("id", "proformaRentalIncome-" + i);
//     rent = (rent * (1 + data[i].Revenue)).toFixed(2);
//     // rent = "$" + rent.toLocaleString(undefined, {minimumFractionDigits: 2});
//     rentGrowth[i] = rent;
//     el.innerHTML = rent;
//     row.appendChild(el);
//   }
//   return rentGrowth;
// }

function proformaRentalIncome(prop, saleYear) {
  var rentGrowth = {};
  var data = prop.marketRentalAssumptions[0];
  var rent = prop.currentFinancials.revenue.total.rent;
  for (var i = 1; i <= saleYear; i++) {
    var el = document.querySelector('#proformaRentalIncome-' + i);
    // console.log(el);
    rent = (rent * (1 + data[i].Revenue)).toFixed(2);
    rentGrowth[i] = rent;
    el.innerHTML = rent;
  }
  return rentGrowth;
}

function proformaOtherIncome(prop, saleYear) {
  var otherGrowth = {};
  var data = prop.marketRentalAssumptions[0];
  var other = prop.currentFinancials.revenue.total.other;
  for (var i = 1; i <= saleYear; i++) {
    var el = document.querySelector("#proformaOtherIncome-" + i);
    other = (other * (1 + data[i].Revenue)).toFixed(2);
    otherGrowth[i] = other;
    el.innerHTML = other;
  }
  console.log(otherGrowth);
  return otherGrowth;
}

function grossRentIncome(prop, saleYear) {
  var rent = proformaRentalIncome(prop, saleYear);
  var other = proformaOtherIncome(prop, saleYear);
  var grossIncome = {};
  for (var i = 1; i <= saleYear; i++) {
    var grossNum = parseInt(rent[i]) + parseInt(other[i]);
    var grossPrint = "$" + (parseInt(rent[i]) + parseInt(other[i])).toLocaleString(undefined, {minimumFractionDigits: 0});
    var el = document.querySelector('#proformaGrossIncome-' + i);
    grossIncome[i] = grossNum;
    el.innerHTML = grossPrint;
  }
  return grossIncome;
}

function vacancy(prop, saleYear) {
  var data = prop.marketRentalAssumptions[0];
  var grossIncome = grossRentIncome(prop, saleYear);
  console.log(grossIncome);
  for (key in grossIncome) {
    var value = grossIncome[key];
    console.log(typeof value);
    value = parseInt(value);
    console.log("Value", value);
  }
  var vacancyRate = {};
  for (var i = 1; i <= saleYear; i++) {

    var vacancy = parseInt(grossIncome[i]) - (parseInt(grossIncome[i]) * data[i].Vacancy);
    // console.log(vacancy);
    var el = document.querySelector('#proformaVacancy-' + i);
    vacancyRate[i] = vacancy;
    el.innerHTML = vacancy;
  }
  return vacancyRate;
}

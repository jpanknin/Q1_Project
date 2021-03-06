// Fill in the input box for the properties available for selection
//https://stackoverflow.com/questions/78932/how-do-i-programmatically-set-the-value-of-a-select-box-element-using-javascript

$(document).ready(function() {



var props = JSON.stringify("js/props.JSON");
$.getJSON("js/props.JSON", function(data) {
  var properties = data;
})

window.onload = fillSelectBox(properties);



function fillSelectBox(properties) {
  for (var i = 0; i < properties.length; i++) {
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
propSelect.addEventListener('click', runProgram)


function propSelector() {
  property = document.querySelector('#propertySelector').value;
  for (var i = 0; i < properties.length; i++) {
    if (properties[i].propInfo.propAddress == property) {

      // fillValues(i);
      // fillProforma(i);
      // locations(i)
      return i;
    }
  }
}

function runProgram() {
  fillValues(propSelector());
  fillProforma(propSelector());
}

// var purchasePrice = properties[propSelector()].purchaseInfo.purchPrice;
// var priceInput = document.querySelector('#purchPrice');
// priceInput.addEventListener('keypress', function(event) {
//   console.log("Hello");
//   // purchasePrice = priceInput.value
// })
// console.log(purchasePrice);


function toDollar(num) {
  // num = num.toFixed(0);
  num = "$" + num.toLocaleString(undefined, {
    minimumFractionDigits: 0
  });
  return num;
}

function toSmall(num) {
  num = "$" + num.toLocaleString(undefined, {
    minimumFractionDigits: 1
  });
  return num;
}

function toPercent(num) {
  num = (num * 100).toFixed(2) + "%";
  return num;
}

function toNum(num) {
  num = num.toLocaleString(undefined, {
    minimumFractionDigits: 0
  });
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
  currentExpenses(prop);
  curExpensePercent(prop);
  totalDebt(prop);
  totalEquity(prop);
  totalSources(prop);
  sourcesUnit(prop)
  uses(prop);
  curFinancialsCalcs(prop);
  curExpenseUnit(prop);
  curExpenseSF(prop);
  managementPercent(prop);
  reservePercent(prop);
  // dateBox(prop);
}

function fillProforma(property) {
  var prop = properties[property];
  var saleYear = (parseInt(document.querySelector('#saleYear').value));
  proformaYear(saleYear);
  proformaRentalIncome(prop, saleYear);
  proformaOtherIncome(prop, saleYear);
  grossRentIncome(prop, saleYear);
  vacancy(prop, saleYear);
  netRent(prop, saleYear);
  proformaExpenses(prop, saleYear);
  totalExp(prop, saleYear);
  noi(prop, saleYear);
  saleMetrics(prop, saleYear);
  purchaseCap(prop, saleYear);
  // locations(prop);
  // initialize()
  // initMap(prop);
  // googleMap(prop);
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
  var price = document.querySelector('#purchPrice')
  price.value = "$" + info.purchPrice.toLocaleString(undefined, {
    minimumFractionDigits: 0
  });
  var closingPer = document.querySelector('#closingCostPercent');
  closingPer.value = toPercent(info.closing.CostPercent);
}

function purchaseInfoCalcs(prop) {
  var info = prop.purchaseInfo;

  var closingCostsNum = info.purchPrice * info.closing.CostPercent;
  closingCosts = toDollar(closingCostsNum);
  document.querySelector('#closingCostAmount').innerText = closingCosts;

  var totalCostsNum = info.purchPrice + parseInt(closingCostsNum);
  totalCosts = toDollar(totalCostsNum);
  document.querySelector('#totalCost').innerText = totalCosts;

  var purchUnit = (parseInt(info.purchPrice / totalUnitCalc(prop)));
  purchUnit = toDollar(purchUnit);
  document.querySelector('#purchCostUnit').innerText = purchUnit;

  var totalUnitNum = (parseInt(totalCostsNum / totalUnitCalc(prop)));
  totalUnit = toDollar(totalUnitNum);
  document.querySelector('#totalCostUnit').innerText = totalUnit;
  return totalCostsNum;
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
      td.value = toPercent(info[item]);
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
  totalRentPrint = toDollar(totalRent);
  document.querySelector('#rentIncomeTotal').innerText = totalRentPrint;
  var otherIncome = prop.currentFinancials.revenue.total.other;
  otherIncomePrint = toDollar(otherIncome);
  document.querySelector('#otherIncomeTotal').value = otherIncomePrint;
  var grossRent = totalRent + otherIncome;
  grossRentPrint = toDollar(grossRent);
  document.querySelector('#grossIncomeTotal').innerText = grossRentPrint;
  return totalRent;
}

function returnsDiscountRate(prop) {
  var info = prop.returnsSummary;
  for (key in info) {
    var val = "#" + key + "Discount";
    var td = document.querySelector(val);
    var percent = toPercent(info[key].discountRate);;
    var text = document.createTextNode(percent);
    td.value = percent;
  }
}

function currentFinancials(prop) {
  var info = prop.currentFinancials;
  var vacancy = info.revenue.total.vacancy;
  document.querySelector('#vacancyRate').value = toPercent(vacancy);
  var concessions = info.revenue.total.concessions;
  document.querySelector('#concessionRate').value = toPercent(concessions);
  var credit = info.revenue.total.creditLoss;
  document.querySelector('#creditLossRate').value = toPercent(credit);
  // var netRent =
}

function currentExpenses(prop) {
  var info = prop.currentFinancials.expenses.total;
  var totalExpenses = 0;
  for (key in info) {
    var val = "#" + key + "Total";
    var td = document.querySelector(val);
    td.value = toDollar(info[key]);
  }
}

function curExpensePercent(prop) {
  var info = prop.currentFinancials.expenses.total;
  var management = info.management;
  document.querySelector('#managementPercent').value = toPercent(management);
  var reserves = info.reserves;
  document.querySelector('#reservesPercent').value = toPercent(reserves);
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

function totalSFCalc(prop) {
  var info = prop.rentalAssumptions;
  var totalSF = 0;
  for (var i = 0; i < info.length - 1; i++) {
    totalSF += info[i].TotalUnits * info[i].SFUnit;
  }
  return totalSF;
}

function totalDebt(prop) {
  var totalSources = purchaseInfoCalcs(prop);
  var ltv = prop.financing.ltv;
  var debt = totalSources * ltv
  document.querySelector('#debtTotal').innerText = toDollar(debt);
  return debt;
}

function totalEquity(prop) {
  var totalSources = purchaseInfoCalcs(prop);
  var debt = totalDebt(prop);
  var equity = totalSources - debt;
  document.querySelector('#equityTotal').innerText = toDollar(equity);
  return equity;
}

function totalSources(prop) {
  document.querySelector('#sourcesTotalSum').innerText = toDollar(purchaseInfoCalcs(prop));
  return purchaseInfoCalcs(prop);
}

function sourcesUnit(prop) {
  var equity = totalEquity(prop);
  var debt = totalDebt(prop);
  var total = totalSources(prop);
  var units = totalUnitCalc(prop);
  var sf = totalSFCalc(prop);
  document.querySelector('#equityUnit').innerText = toDollar(equity / units);
  document.querySelector('#debtUnit').innerText = toDollar(debt / units);
  document.querySelector('#sourcesUnitSum').innerText = toDollar(total / units);
  document.querySelector('#equitySF').innerText = toDollar(equity / sf);
  document.querySelector('#debtSF').innerText = toDollar(debt / sf);
  document.querySelector('#sourcesSFSum').innerText = toDollar(total / sf);
  document.querySelector('#equityPer').innerText = toPercent(equity / total);
  document.querySelector('#debtPer').innerText = toPercent(debt / total);
  document.querySelector('#sourcesPerSum').innerText = toPercent(total / total);
}

function uses(prop) {
  var info = prop.purchaseInfo;
  var price = info.purchPrice;
  var closing = info.purchPrice * info.closing.CostPercent;
  var total = price + closing;
  var units = totalUnitCalc(prop);
  var sf = totalSFCalc(prop);
  document.querySelector('#purchaseTotal').innerText = toDollar(price);
  document.querySelector('#closingTotal').innerText = toDollar(closing);
  document.querySelector('#usesTotalSum').innerText = toDollar(total);
  document.querySelector('#purchaseUnit').innerText = toDollar(price / units);
  document.querySelector('#closingUnit').innerText = toDollar(closing / units);
  document.querySelector('#usesUnitSum').innerText = toDollar(total / units);
  document.querySelector('#purchaseSF').innerText = toDollar(price / sf);
  document.querySelector('#closingSF').innerText = toDollar(closing / sf);
  document.querySelector('#usesSFSum').innerText = toDollar(total / sf);
  document.querySelector('#purchasePer').innerText = toPercent(price / total);
  document.querySelector('#closingPer').innerText = toPercent(closing / total);
  document.querySelector('#usesPerSum').innerText = toPercent(total / total);
}

function curFinancialsCalcs(prop) {
  var data = prop.currentFinancials.revenue.total
  var units = totalUnitCalc(prop);
  var sf = totalSFCalc(prop);
  var rentIncome = rentalIncome(prop);
  var otherIncome = data.other;
  var grossIncome = rentIncome + otherIncome;
  var vacancyTotal = -(grossIncome * data.vacancy);
  var concessionsTotal = -(grossIncome * data.concessions);
  var creditLossTotal = -(grossIncome * data.creditLoss);
  var netIncome = grossIncome + vacancyTotal + concessionsTotal + creditLossTotal;
  document.querySelector('#rentIncomeUnit').innerText = toDollar(rentIncome / units);
  document.querySelector('#rentIncomeSF').innerText = toSmall(rentIncome / sf);
  document.querySelector('#rentIncomePer').innerText = toPercent(rentIncome / grossIncome);
  document.querySelector('#otherIncomeUnit').innerText = toDollar(otherIncome / units);
  document.querySelector('#otherIncomeSF').innerText = toSmall(otherIncome / sf);
  document.querySelector('#otherIncomePer').innerText = toPercent(otherIncome / grossIncome);
  document.querySelector('#grossIncomeUnit').innerText = toDollar(grossIncome / units);
  document.querySelector('#grossIncomeSF').innerText = toSmall(grossIncome / sf);
  document.querySelector('#grossIncomePer').innerText = toPercent(grossIncome / grossIncome);
  document.querySelector('#vacancyTotal').innerText = toDollar(vacancyTotal);
  document.querySelector('#vacancyUnit').innerText = toDollar(vacancyTotal / units);
  document.querySelector('#vacancySF').innerText = toSmall(vacancyTotal / sf);
  document.querySelector('#concessionTotal').innerText = toDollar(concessionsTotal);
  document.querySelector('#concessionUnit').innerText = toDollar(concessionsTotal / units);
  document.querySelector('#concessionSF').innerText = toSmall(concessionsTotal / sf);
  document.querySelector('#creditLossTotal').innerText = toDollar(creditLossTotal);
  document.querySelector('#creditLossUnit').innerText = toDollar(creditLossTotal / units);
  document.querySelector('#creditLossSF').innerText = toSmall(creditLossTotal / sf);
  document.querySelector('#netRentTotal').innerText = toDollar(netIncome);
  document.querySelector('#netRentUnit').innerText = toDollar(netIncome / units);
  document.querySelector('#netRentSF').innerText = toSmall(netIncome / sf);
  return netIncome;
}


function curExpenseUnit(prop) {
  var data = prop.currentFinancials.expenses.total;
  var units = totalUnitCalc(prop);
  for (key in data) {
    var val = "#" + key + "Unit";
    var td = document.querySelector(val);
    var amount = data[key];
    if (amount > 1) {
      var node = document.createTextNode(toDollar(amount/units));
      td.appendChild(node);
    }
  }
}

function curExpenseSF(prop) {
  var data = prop.currentFinancials.expenses.total;
  var sf = totalSFCalc(prop);
  for (key in data) {
    var val = "#" + key + "SF";
    var td = document.querySelector(val);
    var amount = data[key];
    if (amount > 1) {
      var node = document.createTextNode(toDollar(amount/sf));
      td.appendChild(node);
    }
  }
}

function curExpensePer(prop) {
  var data = prop.currentFinancials.expenses.total;
  var sf = totalSFCalc(prop);
  for (key in data) {
    var val = "#" + key + "Per";
    var td = document.querySelector(val);
    var amount = data[key];
    if (amount > 1) {
      var node = document.createTextNode(toDollar(amount/sf));
      td.appendChild(node);
    }
  }
}

function managementPercent(prop) {
  var data = prop.currentFinancials.expenses.total;
  var manage = data.management;
  var units = totalUnitCalc(prop);
  var sf = totalSFCalc(prop);
  var netRent = curFinancialsCalcs(prop);
  var manageTotal = manage * netRent;
  document.querySelector('#managementTotal').innerHTML = toDollar(manageTotal);
  document.querySelector('#managementUnit').innerHTML = toDollar(manageTotal / units);
  document.querySelector('#managementSF').innerHTML = toDollar(manageTotal / sf);
  return manageTotal;
}

function reservePercent(prop) {
  var data = prop.currentFinancials.expenses.total;
  var reserves = data.reserves;
  var units = totalUnitCalc(prop);
  var sf = totalSFCalc(prop);
  var netRent = curFinancialsCalcs(prop);
  var reserveTotal = reserves * netRent;
  document.querySelector('#reservesTotal').innerHTML = toDollar(reserveTotal);
  document.querySelector('#reservesUnit').innerHTML = toDollar(reserveTotal / units);
  document.querySelector('#reservesSF').innerHTML = toDollar(reserveTotal / sf);
  return reserveTotal;
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
  for (var i = 1; i <= saleYear; i++) {
    var el = document.createElement('th');
    el.setAttribute("class", "proformaYearRow");
    var id = "proformaYear-" + i;
    el.setAttribute("id", id);
    el.setAttribute("class", "dateCenter")
    el.innerHTML = "Year " + i;
    row.appendChild(el);
  }
}

function proformaRentalIncome(prop, saleYear) {
  var rentGrowth = {};
  var data = prop.marketRentalAssumptions[0];
  var rent = curFinancialsCalcs(prop);;
  for (var i = 1; i <= saleYear; i++) {
    var el = document.querySelector('#proformaRentalIncome-' + i);
    // console.log(el);
    rent = (rent * (1 + data[i].Revenue));
    rentGrowth[i] = rent;
    el.innerHTML = toDollar(rent);
  }
  return rentGrowth;
}

function proformaOtherIncome(prop, saleYear) {
  var otherGrowth = {};
  var data = prop.marketRentalAssumptions[0];
  var other = prop.currentFinancials.revenue.total.other;
  for (var i = 1; i <= saleYear; i++) {
    var el = document.querySelector("#proformaOtherIncome-" + i);
    other = Math.round((other * (1 + data[i].Revenue)));
    otherGrowth[i] = other;
    el.innerHTML = toDollar(other);
  }
  return otherGrowth;
}

function grossRentIncome(prop, saleYear) {
  var rent = proformaRentalIncome(prop, saleYear);
  var other = proformaOtherIncome(prop, saleYear);
  var grossIncome = {};
  for (var i = 1; i <= saleYear; i++) {
    var grossNum = parseInt(rent[i]) + parseInt(other[i]);
    var grossPrint = toDollar(grossNum);
    var el = document.querySelector('#proformaGrossIncome-' + i);
    grossIncome[i] = grossNum;
    el.innerHTML = grossPrint;
  }
  return grossIncome;
}

function vacancy(prop, saleYear) {
  var data = prop.marketRentalAssumptions[0];
  var grossIncome = grossRentIncome(prop, saleYear);
  for (key in grossIncome) {
    var value = grossIncome[key];
    value = parseInt(value);
  }
  var vacancyRate = {};
  for (var i = 1; i <= saleYear; i++) {
    var income = parseInt(grossIncome[i]);
    var vacancy = income * data[i].Vacancy;
    var el = document.querySelector('#proformaVacancy-' + i);
    vacancyRate[i] = vacancy;
    el.innerHTML = toDollar(vacancy);
  }
  return vacancyRate;
}

function netRent(prop, saleYear) {
  var income = grossRentIncome(prop, saleYear);
  var vacancyRate = vacancy(prop, saleYear);
  var netIncome = {};
  for (var i = 1; i <=saleYear; i++) {
    netIncome[i] = income[i] - vacancyRate[i]
    var text = "#proformaNetIncome-" + i;
    var el = document.querySelector(text);
    el.innerText = toDollar(netIncome[i]);
  }
  return netIncome;
}

function proformaExpenses(prop, saleYear) {
  var data = prop.currentFinancials.expenses.total;
  var expenses = prop.marketRentalAssumptions[0];
  var expenseRates = {};
  for (key in expenses) {
    expenseRates[key] = expenses[key].Expense;
  }
  var expenseAmount = {};
  var total = 0;
  for (item in data) {
    if (data[item] > 1) {
      expenseAmount[item] = data[item];
    }
    total += data[item];
  }
  var j = 1;
  for (line in expenseAmount) {
    for (var j = 1; j <= saleYear; j++) {
      var select = "#proforma" + line + "-" + j;
      var el = document.querySelector(select);
      var amount = toDollar(expenseAmount[line] * (1 + (expenseRates[j] ** j)));
      el.innerHTML = amount;
    }
  }
  return total;
}

function totalExp(prop, saleYear) {
  var expense = proformaExpenses(prop, saleYear);
  var data = prop.marketRentalAssumptions[0];
  var yearExpense = {};
  for (var i = 1; i <= saleYear; i++) {
    var exp = data[i].Expense;
    yearExpense[i] = expense * ((1 + exp) ** i);
    var val = "#proformaTotalExpenses-" + i;
    var el = document.querySelector(val);
    var amount = toDollar(yearExpense[i]);
    el.innerText = amount;
  }
  return yearExpense;
}

function noi(prop, saleYear) {
  var income = netRent(prop, saleYear);
  var expense = totalExp(prop, saleYear);
  var netOpIncome = {};
  for (var i = 1; i <= saleYear; i++) {
    netOpIncome[i] = income[i] - expense[i];
  }
  for (var j = 1; j <= saleYear; j++) {
    var val = "#proformaNOI-" + j;
    var el = document.querySelector(val);
    var inc = toDollar(netOpIncome[j]);
    el.innerText = inc;
  }
  return netOpIncome;
}

function saleMetrics(prop, saleYear) {
  var units = totalUnitCalc(prop);
  var cap = prop.saleAssumptions.saleCapRate;
  var income = noi(prop, saleYear)[saleYear - 1];
  var total = income / cap;
  var unit = income / units;
  document.querySelector('#salePrice').innerText = toDollar(total);
  document.querySelector('#salePriceUnit').innerText = toDollar(unit);
}

function purchaseCap(prop, saleYear) {
  var price = prop.purchaseInfo.purchPrice;
  var total = purchaseInfoCalcs(prop);
  var rent = noi(prop, saleYear)[1];
  document.querySelector('#capOnPurchase').innerText = toPercent(rent / price);
  document.querySelector('#capOnTotal').innerText = toPercent(rent / total);
}

// function locations(prop) {
//   var data = properties[prop].location;
//   return data;
// }

// var propNumber = propSelector()
// var mapProp = locations(propNumber);
// var latitude = mapProp.lat;
// var longitude = mapProp.lng;
// console.log(longitude);

// function initMap() {
//   var propNumber = propSelector()
//   // console.log(propNumber);
//   var data = properties[propNumber].location;
//   var latitude = data.lat;
//   var longitude = data.lng;
//   var uluru = {lat: latitude, lng: longitude};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
})

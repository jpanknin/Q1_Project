var properties = [{
    // property1: {
    propInfo: {
      propName: "Galvanize",
      propAddress: "315 Hudson",
      propCity: "New York",
      propState: "New York",
      propType: "Multifamily",
      numUnits: null,
    },
    location: {
      lat: 40.726388,
      lng: -74.007792
    },
    purchaseInfo: {
      purchPrice: 19000000,
      closing: {
        CostPercent: .03,
        CostAmount: undefined
      },
      totalCost: 0,
      purchCostUnit: undefined,
      totalCostUnit: undefined,
      capOnPurchase: undefined,
      capOnTotal: undefined
    },
    saleAssumptions: {
      saleYear: 6,
      saleCapRate: .06,
      salesCosts: .02,
    },
    saleSummary: {
      price: null,
      priceUnit: null
    },
    financing: {
      ltv: .7,
      interestRate: .06,
      loanTerm: 10,
      loanAmort: 25
    },
    sourcesUses: {
      sources: {
        equity: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        debt: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        totalSources: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        }
      },
      uses: {
        price: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        costs: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        totalUses: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
      }
    },
    rentalAssumptions: [{
        // floorplan1: {
        Type: "1 Bed/1 Bath",
        TotalUnits: 50,
        RentUnit: 1100,
        SFUnit: 662,
        TotalSF: function() {
          return this.SFUnit * this.TotalUnits;
        },
        RentSF: function() {
          return this.SFUnit / this.RentUnit;
        }
      },
      {
        // floorplan2: {
        Type: "2 Bed/1 Bath",
        TotalUnits: 75,
        RentUnit: 1400,
        SFUnit: 1041,
        TotalSF: function() {
          return this.SFUnit * this.TotalUnits;
        },
        RentSF: function() {
          return this.SFUnit / this.RentUnit;
        }
      },
      {
        // floorplan3: {
        Type: "2 Bed/2 Bath",
        TotalUnits: 55,
        RentUnit: 1800,
        SFUnit: 1185,
        TotalSF: function() {
          return this.SFUnit * this.TotalUnits;
        },
        RentSF: function() {
          return this.SFUnit / this.RentUnit;
        }
      },
      {
        TotalUnits: null,
          // console.log(info);
          // return properties.rentalAssumptions[0].TotalUnits();
        // },
        TotalSF: null,
        AvgSF: null,
        PriceUnit: null,
        PriceSF: null
      }
    ],
    returnsSummary: {
      unlevered: {
        netProfit: null,
        discountRate: .08,
        pv: null,
        npv: null,
        equityMult: null,
        irr: null,
        irrCF: null,
        irrSale: null,
        cashOnCash: null
      },
      levered: {
        netProfit: null,
        discountRate: .08,
        pv: null,
        npv: null,
        equityMult: null,
        irr: null,
        irrCF: null,
        irrSale: null,
        cashOnCash: null
      }
    },
    currentFinancials: {
      date: null,
      revenue: {
        total: {
          rent: 1000000,
          other: 100000,
          gross: null,
          vacancy: .1,
          concessions: .02,
          creditLoss: .0,
          net: null
        },
        unit: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        sf: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        percentTotal: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        linePercent: {
          vacancy: .1,
          concessions: .03,
          creditLoss: .05
        }
      },
      expenses: {
        total: {
          taxes: 500000,
          insurance: 75000,
          utilities: 125000,
          payroll: 150000,
          repairs: 75000,
          contract: 100000,
          turnover: 75000,
          sales: 50000,
          admin: 50000,
          management: .03,
          reserves: .02
        },
        unit: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        sf: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        percent: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        costPercent: {
          management: .03,
          reserves: .02
        }
      }
    },
    marketRentalAssumptions: [{
      1: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      2: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      3: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      4: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      5: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      6: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      7: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      8: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      9: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      10: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      }
    }]
  },
  {
    propInfo: {
      propName: "Eataly",
      propAddress: "200 Fifth Avenue",
      propCity: "New York",
      propState: "New York",
      propType: "Multifamily",
      numUnits: null,
    },
    location: {
      lat: 40.741993,
      lng: -73.989936
    },
    purchaseInfo: {
      purchPrice: 21000000,
      closing: {
        CostPercent: .03,
        CostAmount: null
      },
      totalCost: null,
      purchCostUnit: null,
      totalCostUnit: null,
      capOnPurchase: null,
      capOnTotal: null
    },
    saleAssumptions: {
      saleYear: 10,
      saleCapRate: .07,
      salesCosts: .03,
    },
    saleSummary: {
      price: null,
      priceUnit: null
    },
    financing: {
      ltv: .65,
      interestRate: .07,
      loanTerm: 15,
      loanAmort: 30
    },
    sourcesUses: {
      sources: {
        equity: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        debt: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        totalSources: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        }
      },
      uses: {
        price: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        costs: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
        totalUses: {
          total: null,
          unit: null,
          sf: null,
          percent: null
        },
      }
    },
    rentalAssumptions: [{
        // floorplan1: {
        Type: "1 Bed/1 Bath",
        TotalUnits: 50,
        RentUnit: 1100,
        SFUnit: 662,
        TotalSF: null,
        RentSF: null
      },
      {
        // floorplan2: {
        Type: "2 Bed/1 Bath",
        TotalUnits: 75,
        RentUnit: 1400,
        SFUnit: 1041,
        TotalSF: function() {
          return this.SFUnit * this.TotalUnits;
        },
        RentSF: function() {
          return this.SFUnit / this.RentUnit;
        }
      },
      {
        // floorplan3: {
        Type: "2 Bed/2 Bath",
        TotalUnits: 75,
        RentUnit: 1800,
        SFUnit: 1185,
        TotalSF: function() {
          return this.SFUnit * this.TotalUnits;
        },
        RentSF: function() {
          return this.SFUnit / this.RentUnit;
        }
      },
      {
        TotalUnits: null,
          // console.log(info);
          // return properties.rentalAssumptions[0].TotalUnits();
        // },
        TotalSF: null,
        AvgSF: null,
        PriceUnit: null,
        PriceSF: null
      }
    ],
    returnsSummary: {
      unlevered: {
        netProfit: null,
        discountRate: .08,
        pv: null,
        npv: null,
        equityMult: null,
        irr: null,
        irrCF: null,
        irrSale: null,
        cashOnCash: null
      },
      levered: {
        netProfit: null,
        discountRate: .08,
        pv: null,
        npv: null,
        equityMult: null,
        irr: null,
        irrCF: null,
        irrSale: null,
        cashOnCash: null
      }
    },
    currentFinancials: {
      date: "9/22/2017",
      revenue: {
        total: {
          rent: 2000000,
          other: 200000,
          gross: null,
          vacancy: .07,
          concessions: .04,
          creditLoss: .0,
          net: null
        },
        unit: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        sf: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        percentTotal: {
          rent: null,
          other: null,
          gross: null,
          vacancy: null,
          concessions: null,
          creditLoss: null,
          net: null
        },
        linePercent: {
          vacancy: .1,
          concessions: .03,
          creditLoss: .05
        }
      },
      expenses: {
        total: {
          taxes: 500000,
          insurance: 75000,
          utilities: 125000,
          payroll: 150000,
          repairs: 75000,
          contract: 100000,
          turnover: 75000,
          sales: 50000,
          admin: 50000,
          management: .03,
          reserves: .03
        },
        unit: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        sf: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        percent: {
          taxes: null,
          insurance: null,
          utilities: null,
          payroll: null,
          repairs: null,
          contract: null,
          turnover: null,
          sales: null,
          admin: null,
          management: null,
          reserves: null
        },
        costPercent: {
          management: .03,
          reserves: .02
        }
      }
    },
    marketRentalAssumptions: [{
      1: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      2: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      3: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      4: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      5: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      6: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      7: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      8: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      9: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      },
      10: {
        Revenue: .03,
        Expense: .03,
        Vacancy: .1,
        Concessions: .03,
        CreditLoss: .0
      }
    }]
    // }
  }
];


var prop = properties[0].propInfo;
// for (item in prop) {
// console.log("Item ", item);
// }
// console.log("Prop ", prop);
// console.log(properties[0].propInfo.propName);

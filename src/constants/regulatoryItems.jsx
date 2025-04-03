export const regulatoryItems = [
  {
    label:
      "Are you or a family member a senior executive or 10% or greater shareholder of a Publicly/Exposed traded company?*",
    name: "tradeCompany",
    children: [
      {
        label: "List name of stock ticker symbol*",
        name: "tickerSymbol",
        placeholder: "Enter List name of stock ticker symbol*",
      },
      {
        label: "Relationship*",
        name: "relationship",
        placeholder: "Enter Relationship*",
      },
      {
        label: "Person Name*",
        name: "perrsonname",
        placeholder: "Enter Person name*",
      },
      {
        label: "Firm/Employer*",
        name: "firmemployer",
        placeholder: "Enter Firm/Employer*",
      },
    ],
  },
  {
    label:
      "Are you or a family member employed with a member firm of a stock exchange or FINRA registered broker?*",
    name: "finraBroker",
    children: [
      {
        label: "Relationship*",
        name: "relationship",
        placeholder: "Enter Relationship*",
      },
      {
        label: "Person Name*",
        name: "perrsonname",
        placeholder: "Enter Person name*",
      },
      {
        label: "Firm/Employer*",
        name: "firmemployer",
        placeholder: "Enter Firm/Employer*",
      },
    ],
  },
  {
    label:
      "Are you or a family member a senior political figure (SPF) or politically exposed person (PEP)?*",
    name: "politicalFigure",
    children: [
      {
        label: "Politically Publicly/Exposed Person Political Title*",
        name: "publiclyExposed",
        placeholder:
          "Enter Politically Publicly/Exposed Person Political Title*",
      },
      {
        label: "Official or Immediate Family Members/Members*",
        name: "membersMembers",
        placeholder: "Enter Official or Immediate Family Members/Members*",
      },
      {
        label: "Political Organization*",
        name: "politicalOrganization",
        placeholder: "Enter Political Organization*",
      },
    ],
  },
  {
    label:
      "Is the account maintained for a foreign financial institution as defined by Title 31 of the Code of Federal Regulations?*",
    name: "foreignInstitution",
    children: [
      {
        label: "Name of Foreign Financial Institution*",
        name: "financialInstitution",
        placeholder:
          "Enter Name of Foreign Financial Institution*",
      },
    ]
  },
  {
    label:
      "Is the account a foreign bank organized under foreign law and located outside of the United States as defined by Title 31 of the code of Federal Regulations?*",
    name: "foreignBank",
    children: [
      {
        label: "Provide Name of Agent*",
        name: "agent",
        placeholder:
          "Enter Provide Name of Agent*",
      },
    ]
  },
  {
    label:
      "Is the account a PAB account, meaning a proprietary securities account of a broker or dealer as defined by SEC 15c3-3(a)(16)?*",
    name: "pabAccount",

  },
  {
    label: "Have you granted trading authority to a third party?*",
    name: "thirdPartyAuthority",
    children: [
      {
        label: "Provide Name of Agent*",
        name: "nameAgent",
        placeholder:
          "Enter Provide Name of Agent*",
      },
    ]
  },
  {
    label:
      "Is the customer a senior officer of a bank, savings and loan institution, insurance company, registered investment advisory firm, registered investment company, or a person who could influence the trading of investments in an institutional type of account?*",
    name: "seniorOfficer",
    children: [
      {
        label: "List name of stock ticker symbol*",
        name: "tickerSymbol",
        placeholder: "Enter List name of stock ticker symbol*",
      },
      {
        label: "Relationship*",
        name: "relationship",
        placeholder: "Enter Relationship*",
      },
      {
        label: "Person Name*",
        name: "perrsonname",
        placeholder: "Enter Person name*",
      },
      {
        label: "Firm/Employer*",
        name: "firmemployer",
        placeholder: "Enter Firm/Employer*",
      },
    ],
  },
  {
    label:
      "Is the customer's company owned by or controlled by a public corporation?*",
    name: "publicCorporation",
    children: [
      {
        label: "List name of stock ticker symbol*",
        name: "tickerSymbol",
        placeholder: "Enter List name of stock ticker symbol*",
      },
      {
        label: "Corporation Name*",
        name: "corporationName",
        placeholder: "Enter Corporation Name*",
      },
      {
        label: "Address 1*",
        name: "address1",
        placeholder: "Enter Address 1*",
      },
      {
        label: "Address 2",
        name: "address2",
        placeholder: "Enter Address 2",
      },
      {
        label: "City*",
        name: "city",
        placeholder: "Enter City*",
      },
      {
        label: "Country*",
        name: "country",
        placeholder: "Enter Country*",
      },
      {
        label: "State*",
        name: "state",
        placeholder: "Enter State*",
      },
      {
        label: "Zip Code*",
        name: "zipCode*",
        placeholder: "Enter Zip Code*",
      },
    ],
  },
  {
    label:
      "Is the customer's business owned, controlled by, or under common control of a broker?*",
    name: "brokerControl",
    children: [
      {
        label: "List name of stock ticker symbol*",
        name: "tickerSymbol",
        placeholder: "Enter List name of stock ticker symbol*",
      },
      {
        label: "Corporation Name*",
        name: "corporationName",
        placeholder: "Enter Corporation Name*",
      },
      {
        label: "Address 1*",
        name: "address1",
        placeholder: "Enter Address 1*",
      },
      {
        label: "Address 2",
        name: "address2",
        placeholder: "Enter Address 2",
      },
      {
        label: "City*",
        name: "city",
        placeholder: "Enter City*",
      },
      {
        label: "Country*",
        name: "country",
        placeholder: "Enter Country*",
      },
      {
        label: "State*",
        name: "state",
        placeholder: "Enter State*",
      },
      {
        label: "Zip Code*",
        name: "zipCode*",
        placeholder: "Enter Zip Code*",
      },
    ],
  },
];

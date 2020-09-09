import { LightningElement, track} from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
  @track fullname = "Salesforce Troop";
  @track title = "Salesforce developer";
  @track showText = false;
  @track toggleText = true;
  @track inputText = "Sushant Kumar";
  
  changeHandler1(event) {
    this.inputText = event.target.value;
  }
  get checkText() {
    return this.inputText === "Hello"; 
  }

  changeHandler(event){
    this[event.target.name] = event.target.value;    
    this.showText = true;
  }

  showHandler() {
    this.showText = true;
  }
  
  toggleHandler() {
    this.toggleText = !this.toggleText;
  }

  carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"];
  programmingList = [
    {
      id: "06868",
      language: "HTML"
    },
    {
      id: "19797",
      language: "CSS"
    },
    {
      id: "298789",
      language: "Javascript"
    },
    {
      id: "398798",
      language: "Apex"
    },
    {
      id: "48967",
      language: "Aura"
    },
    {
      id: "58798",
      language: "Java"
    }
  ];

  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple Inc.",
      name: "Tim cook"
    },
    {
      id: 3,
      company: "Facebook",
      name: "Mark Zuckerberg"
    },
    {
      id: 4,
      company: "Amazon.com",
      name: "Jeff Bezos"
    },
    {
      id: 5,
      company: "Capgemini",
      name: "Paul Hermelin"
    }
  ];
}
import { Component } from '@angular/core';


export interface Portfolio {
  id: number
  title: string
  description: string
  image: string
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  data: Portfolio[] = [
    {
      "id": 1,
      "title": "LOG CABIN",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/cabin.png"
    },
    {
      "id": 2,
      "title": "TASTY CAKE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/cake.png"
    },
    {
      "id": 3,
      "title": "CIRCUS TENT",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/circus.png"
    },
    {
      "id": 4,
      "title": "CONTROLLER",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/game.png"
    },
    {
      "id": 5,
      "title": "LOCKED SAFE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/safe.png"
    },
    {
      "id": 6,
      "title": "SUBMARINE",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      "image": "./assets/img/submarine.png"
    }
  ]

  cardDetails:any = {}
  showModal(data:any): void{
    this.cardDetails = data
  }
}


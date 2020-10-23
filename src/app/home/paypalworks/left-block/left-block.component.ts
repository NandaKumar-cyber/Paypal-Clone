import { Component } from "@angular/core";

@Component({
  selector: "app-left-block",
  templateUrl: "./left-block.component.html",
  styleUrls: ["./left-block.component.css"],
})
export class LeftBlockComponent {
  public online_mobile_data = [
    {
      title: "Sign up",
      description: "It's free and only takes a few minutes",
    },
    {
      title: "Link a credit / debit card",
      description: "You only have to do it once",
    },
    {
      title: "3Pay with PayPal at your favourite brands",
      description: " Wherever you see the PayPal button",
    },
    {
      title: "4Receive email receipt of your purchase",
      description: " The seller will fulfil your order",
    },
  ];
}

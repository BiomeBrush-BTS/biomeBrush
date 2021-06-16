import html from "./brushing.html";
import "./brushing.css";

export default class Brushing extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

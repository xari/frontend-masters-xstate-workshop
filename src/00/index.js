import { createMachine } from "xstate";

let test_trigger_quality_gate_failure = undefined;

const elOutput = document.querySelector("#output");

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

console.log("Welcome to the XState workshop!");

const user = {
  name: "David Khourshid",
  company: "Microsoft",
  interests: ["piano", "state machines"],
};

output(user);

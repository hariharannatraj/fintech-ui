import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]',
})
export class OnlynumberDirective {
  private static readonly allowedKeyCodes = [
    "Backspace",
    "Delete",
    "Insert",
    "ArrowUp",
    "ArrowRight",
    "Period",
    "ArrowDown",
    "ArrowLeft",
    "Tab",
    "Home",
    "End",
    "Enter",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Numpad0",
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "Numpad4",
    "Numpad5",
    "Numpad6",
    "Numpad7",
    "Numpad8",
    "Numpad9",
  ];

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {

    const isCommandExecution = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
    const isKeyAllowed = OnlynumberDirective.allowedKeyCodes.indexOf(e.code) !== -1;

    if (!isCommandExecution && !isKeyAllowed) {
      e.preventDefault();
      return;
    }
  }
}
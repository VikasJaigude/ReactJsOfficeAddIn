/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function lauchApp(event) {
    var contextInfo = Office.context.diagnostics;
    if (contextInfo.platform=="OfficeOnline")
    {
       window.open('https://www.google.com','_blank');
       Office.context.mailbox.item.notificationMessages.removeAsync("action");
       event.completed();
    }
    else {
       Office.context.ui.displayDialogAsync('https://smartapp2.azurewebsites.net/', {height: 280, width: 480}, function (asyncResult) {processm(asyncResult, event);});
    }
}

function redistributeMail(event) {
    var item = Office.context.mailbox.item;
    var contextInfo = Office.context.diagnostics;
    if (contextInfo.platform=="OfficeOnline")
    {
       window.open('https://localhost:3000/?itemId=' + item.itemId,'_blank');
       Office.context.mailbox.item.notificationMessages.removeAsync("action");
       event.completed();
    }
    else {
       Office.context.ui.displayDialogAsync('https://localhost:3000/?itemId=' + item.itemId, {height: 280, width: 480}, function (asyncResult) {processm(asyncResult, event);});
    }
}

function processMessage(arg) {
  var messageFromDialog = JSON.parse(arg.message);
}

function processm(asyncResult, event) {
  Office.context.mailbox.item.notificationMessages.removeAsync("action");
  event.completed();
}



function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;

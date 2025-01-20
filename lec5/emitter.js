// function Emitter() {
//     this.events = {};
// }

// // Add a listener for an event
// Emitter.prototype.on = function (type, cb) {
//     this.events[type] = this.events[type] || []; // Initialize if not present
//     this.events[type].push(cb); // Push the callback to the event array
// };

// // Emit an event and call all listeners
// Emitter.prototype.emit = function (type) {
//     if (this.events[type]) {
//         this.events[type].forEach(listener => {
//             listener(); // Call each listener
//         });
//     }
// };

// module.exports = Emitter;

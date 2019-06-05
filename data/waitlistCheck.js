var guests = require('../data/guests')

module.exports = function(guest) {
	if (guests.tables.length >= 5) {
		guests.waitlist.push(guest)

		console.log('added to tables')
	} else {
		guests.tables.push(guest)
		console.log('added to waitlist')

	}
}
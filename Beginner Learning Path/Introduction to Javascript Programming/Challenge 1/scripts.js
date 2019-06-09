const TAX_RATE 				= 0.08;
const PHONE_PRICE			= 99.99;
const ACCESSORY_PRICE 		= 9.99;
const SPENDING_THRESHOLD 	= 200;

let bank_balance 			= 303.91;
let totalAmount				= 0;
let numPhones				= 0;
let numAccessories			= 0;

function calculateTax(price) {
	return price *= TAX_RATE;
}

function purchasePhone() {
	var totalPhoneCost;

	numPhones++;
	totalPhoneCost = calculateTax(PHONE_PRICE);
	totalAmount += totalPhoneCost;
	bank_balance -= totalPhoneCost;
}

function purchaseAccessory() {
	var totalAccessoryCost;

	numAccessories++;
	totalAccessoryCost = calculateTax(ACCESSORY_PRICE);
	totalAmount += totalAccessoryCost;
	bank_balance -= totalAccessoryCost;
}

function formatTotalAmount() {
	totalAmount = totalAmount.toFixed(2);
}

function calculateTotalPhonePurchase() {
	while ( bank_balance > 0) {
		purchasePhone();
		if ( totalAmount <= SPENDING_THRESHOLD ) {
			purchaseAccessory();
		}
	}
	formatTotalAmount();
}

calculateTotalPhonePurchase();
console.log(`You can afford ${numPhones} phones and ${numAccessories} accessories for $${totalAmount}.`);
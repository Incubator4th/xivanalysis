import {ensureActions} from '../type'

// tslint:disable:no-magic-numbers

export const BRD = ensureActions({
	MAGES_BALLAD: {
		id: 114,
		name: 'Mage\'s Ballad',
		icon: 'https://xivapi.com/i/002000/002602.png',
		onGcd: false,
		cooldown: 80,
		potency: 100,
	},
	ARMYS_PAEON: {
		id: 116,
		name: 'Army\'s Paeon',
		icon: 'https://xivapi.com/i/002000/002603.png',
		onGcd: false,
		cooldown: 80,
		potency: 100,
	},
	RAIN_OF_DEATH: {
		id: 117,
		name: 'Rain Of Death',
		icon: 'https://xivapi.com/i/002000/002605.png',
		onGcd: false,
		cooldown: 15,
		potency: 130,
	},
	BATTLE_VOICE: {
		id: 118,
		name: 'Battle Voice',
		icon: 'https://xivapi.com/i/002000/002601.png',
		onGcd: false,
		cooldown: 180,
		statusesApplied: ['BATTLE_VOICE'],
	},
	EMPYREAL_ARROW: {
		id: 3558,
		name: 'Empyreal Arrow',
		icon: 'https://xivapi.com/i/002000/002606.png',
		onGcd: false,
		cooldown: 15,
		potency: 230,
	},
	THE_WANDERERS_MINUET: {
		id: 3559,
		name: 'The Wanderer\'s Minuet',
		icon: 'https://xivapi.com/i/002000/002607.png',
		onGcd: false,
		cooldown: 80,
		potency: 100,
	},
	IRON_JAWS: {
		id: 3560,
		name: 'Iron Jaws',
		icon: 'https://xivapi.com/i/002000/002608.png',
		onGcd: true,
		potency: 100,
	},
	THE_WARDENS_PAEAN: {
		id: 3561,
		name: 'The Warden\'s Paean',
		icon: 'https://xivapi.com/i/002000/002609.png',
		onGcd: false,
		cooldown: 45,
		statusesApplied: ['THE_WARDENS_PAEAN'],
	},
	SIDEWINDER: {
		id: 3562,
		name: 'Sidewinder',
		icon: 'https://xivapi.com/i/002000/002610.png',
		onGcd: false,
		cooldown: 60,
		potency: [100, 175, 260],
		cooldownGroup: 3562, // Sidewinder Group
	},
	PITCH_PERFECT: {
		id: 7404,
		name: 'Pitch Perfect',
		icon: 'https://xivapi.com/i/002000/002611.png',
		onGcd: false,
		cooldown: 3,
		potency: [100, 250, 450],
	},
	TROUBADOUR: {
		id: 7405,
		name: 'Troubadour',
		icon: 'https://xivapi.com/i/002000/002612.png',
		onGcd: false,
		cooldown: 180,
		statusesApplied: ['TROUBADOUR'],
	},
	CAUSTIC_BITE: {
		id: 7406,
		name: 'Caustic Bite',
		icon: 'https://xivapi.com/i/002000/002613.png',
		onGcd: true,
		potency: 150,
		statusesApplied: ['CAUSTIC_BITE'],
	},
	STORMBITE: {
		id: 7407,
		name: 'Stormbite',
		icon: 'https://xivapi.com/i/002000/002614.png',
		onGcd: true,
		potency: 100,
		statusesApplied: ['STORMBITE'],
	},
	NATURES_MINNE: {
		id: 7408,
		name: 'Nature\'s Minne',
		icon: 'https://xivapi.com/i/002000/002615.png',
		onGcd: false,
		cooldown: 90,
		statusesApplied: ['NATURES_MINNE'],
	},
	REFULGENT_ARROW: {
		id: 7409,
		name: 'Refulgent Arrow',
		icon: 'https://xivapi.com/i/002000/002616.png',
		onGcd: true,
		potency: 340,
	},
	SHADOWBITE: {
		id: 16494,
		name: 'Shadowbite',
		icon: 'https://xivapi.com/i/002000/002617.png',
		onGcd: false,
		cooldown: 60,
		potency: [100, 160, 220],
		cooldownGroup: 3562, // Sidewinder Group
	},
	BURST_SHOT: {
		id: 16495,
		name: 'Burst Shot',
		icon: 'https://xivapi.com/i/002000/002618.png',
		onGcd: true,
		potency: 230,
	},
	APEX_ARROW: {
		id: 16496,
		name: 'Apex Arow',
		icon: 'https://xivapi.com/i/002000/002619.png',
		onGcd: true,
		potency: 500,
	},
})
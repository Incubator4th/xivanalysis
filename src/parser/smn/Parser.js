import CoreParser from 'parser/core/Parser'

import Bahamut from './modules/Bahamut'
import Checklist from './modules/Checklist'
import Enkindle from './modules/Enkindle'
import Gauge from './modules/Gauge'
import Ruin2 from './modules/Ruin2'

class Parser extends CoreParser {
	static jobModules = {
		bahamut: Bahamut,
		checklist: Checklist,
		enkindle: Enkindle,
		gauge: Gauge,
		ruin2: Ruin2
	}
}

export default Parser
